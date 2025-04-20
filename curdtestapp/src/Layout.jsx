
import { Outlet } from "react-router-dom";
import Headnav from "./Component.jsx/Headnav";


const Layout=()=>{
    return(
        <>
         <Headnav/>
         <Outlet/>
        </>
    )
}
export default Layout;