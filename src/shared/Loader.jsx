import { Hourglass } from "react-loader-spinner"

const Loader = () =>{
    return(
    <div style={{width:"100%",height:"1000px",display:"flex",justifyContent:"center", paddingTop:"30px"}}>
        <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#1976d2', '#72a1ed']}
    />
    </div>
    )
}
export default Loader