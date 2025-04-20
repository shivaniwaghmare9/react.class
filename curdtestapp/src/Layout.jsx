
import { Outlet } from "react-router-dom";
import Headnav from "./Component.jsx/Headnav";
import Footer from "./Component.jsx/Footer";


const Layout=()=>{
    return(
        <>
         <Headnav/>
         <Outlet/>
         <Footer/>
        </>
    )
}
export default Layout;