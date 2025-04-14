
import { Outlet } from "react-router-dom";
import Topnav from "./components/Topnav";
import Footer from "./components/Footer";
import NavBanner from "./components/NavBanner";

const Layout=()=>{
    return(
        <>

         <Topnav/>
         {/* <NavBanner/> */}
         <Outlet/>
         
         <Footer/>
         
        
        </>
    )
}
export default Layout;
