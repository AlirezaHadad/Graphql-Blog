import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../GraphQL/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";

import sanitizeHtml from "sanitize-html";
import CardEL from "../../shared/CardEL";
import Loader from "../../shared/Loader";
 
const AuthorPage = () =>{
    const { slug } = useParams()

    const { loading ,data ,errors } = useQuery(GET_AUTHOR_INFO,{ variables: {slug}  });

    if(loading) return <Loader/>
    if(errors) return <h4>errors ...</h4>

    const {author} = data
    console.log(data);
    return(
        <Container maxWidth="lg">
            <Grid container alignItems="center">
                <Grid xs={12} md={4} item display="flex" flexDirection="column" alignItems="center">
                    <Avatar src={author.avatar.url} sx={{width:"250px", height:"250px"}} />
                    <Typography component="h3" variant="h5" fontWeight="700">{author.name}</Typography>
                    <Typography component="p" color="text.secondary" mt={1} variant="h6" fontWeight="400">{author.field}</Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                    <div dangerouslySetInnerHTML={{__html: sanitizeHtml(author.description.html) }}></div>  
                </Grid>
            </Grid>
            <Grid item xs={12} mt={6} mb={6}>
                <Typography component="h3" variant="p" fontWeight="700">مقالات {author.name}</Typography>
                <Grid container spacing={2} mt={3}>
                    {author.posts.map((post)=>(
                        <Grid item xs={12} sm={6} md={3} key={post.id}>
                            <CardEL title={post.title} slug={post.slug} coverPhoto={post.coverPhoto} author={author} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    )
}
export default AuthorPage;