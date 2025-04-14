 
 import { Outlet } from "react-router-dom";
import Headnav from "./Component.jsx/Headnav";
import Headbanner from "./Component.jsx/HeadBanner";
const Layout=()=>{
    return(
        <>
         <Headnav/>
         <Outlet/>
         <Headbanner/>
        </>
    )
}
export default Layout;