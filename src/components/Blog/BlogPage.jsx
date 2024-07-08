import { useNavigate, useParams } from "react-router-dom"
import { GET_POST_INFO } from "../../GraphQL/queries";
import { useQuery } from "@apollo/client";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";

import Loader from "../../shared/Loader";
import { ArrowBackRounded } from "@mui/icons-material";
import CommentForm from "../Comment/CommentForm";
import Comments from "../Comment/Comments";

const BlogPage = () => {
    const { slug } = useParams()
    const navigate = useNavigate()

    const { loading ,data ,errors } = useQuery(GET_POST_INFO,{ variables: {slug} });

    if(loading) return <Loader/>
    if(errors) return <h4>errors ...</h4>
    
    const {post} = data

    return(
        <Container maxWidth="lg">
            <Grid container alignItems="center">
                <Grid item xs={12} mt={5} display="flex" justifyContent="space-between">
                    <Typography component="h2" variant="h4" color="primary" fontWeight="700">{post.title}</Typography>
                    <ArrowBackRounded style={{cursor:"pointer"}} onClick={()=> navigate(-1)} />
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <img src={post.coverPhoto.url} alt={post.slug} width="50%" />
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center">
                    <Avatar src={post.author.avatar.url} sx={{width:"80px",height:"80px", marginLeft:2}} />
                    <Box component="div">
                        <Typography component="p" variant="h5" fontWeight="700">{post.author.name}</Typography>
                        <Typography component="p" variant="p" color="text.secondary">{post.author.field}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <div dangerouslySetInnerHTML={{__html:sanitizeHtml(post.content.html)}}></div>
                </Grid>
                <Grid item xs={12}>
                    <CommentForm slug={slug}/>
                </Grid>
                <Grid item xs={12} mb={5}>
                    <Comments slug={slug}/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default BlogPage