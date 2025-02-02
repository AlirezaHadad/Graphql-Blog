import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../GraphQL/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../../shared/Loader";

const Author = () => {
    const { loading ,data ,errors } = useQuery(GET_AUTHORS_INFO);

    if(loading) return <Loader/>
    if(errors) return <h4>errors ...</h4>
    console.log(data);
    const {authors} = data
    
    return(
        <Grid container  sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px",borderRadius: 4 }}>
            {authors.map((author,index)=>(
                <> 
                <Grid item xs={12} padding={2}>
                    <Link to={`/author/${author.slug}`} style={{display:"flex",alignItems:"center",textDecoration:"none"}}> 
                        <Avatar src={author.avatar.url} sx={{marginLeft:2}} />
                        <Typography component="p" variant="p" color="text.secondary">{author.name}</Typography>
                    </Link> 
                </Grid>
                {index !== authors.length - 1 && (
                <Grid item xs={12}>
                    <Divider variant="middle" />
                </Grid>
                )}
                </> 
            ))}
        </Grid>
    )
}
export default Author;