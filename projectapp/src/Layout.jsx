
import { Outlet } from "react-router-dom";
import Topnav from "./components/Topnav";
import Footer from "./components/Footer";
import myimg from "./images/myimg6.jpg";

const Layout=()=>{
    return(
        <>

         <Topnav/>

         <div>
            <img src={myimg} id="img"/>
         </div>
         <Outlet/>
         <Footer/>
         
        
        </>
    )
}
export default Layout;
