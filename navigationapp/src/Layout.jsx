
import { Link,Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
         <div style={{backgroundColor:"azure",height:"40px",display:"flex",gap:"30px",padding:"1rem",}}>
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
            <Link to="product">Product</Link>
            <Link to="contact">Contact</Link>
         </div>
         <hr size="2" color="black"/>
         <div style={{margin:"2rem",display:"flex", justifyContent:"center",alignItems:"center",height:"300px",backgroundColor:"bisque"}}>
         <Outlet/>
         </div>
         <hr size="2" color="black"/>
         www.Cybrominstitute.com All facilities!!!
         
        </>
    )
}
export default Layout;