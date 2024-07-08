import { Typography } from "@mui/material"

const Footer = () =>{
    return(
        <footer>
            <Typography
            component="p" variant="p"
            bgcolor="#f7f7f7" color="primary"
            padding="10px" textAlign="center"
            fontWeight="700" mt="5">
                The blog project with GraphQL - Alireza Hadad
            </Typography>
        </footer>
    )
}
export default Footer;