import { Container, Grid, Typography } from "@mui/material";
import Author from "../Author/Author";
import Blogs from "../Blog/Blog";

const HomePage = () => {
    return(
        <Container maxWidth="lg">
            <Grid container spacing={2} padding={3}>
                <Grid item xs={12} md={3} >
                    <Typography component="h3" variant="h5" mb={3} fontWeight="700" mt={2}>نویسنده ها</Typography>
                    <Author/>
                </Grid>
                <Grid item xs={12} md={9} mt={2}>
                    <Typography component="h3" variant="h5" mb={3} fontWeight="700" >مقالات</Typography>
                    <Blogs/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default HomePage;