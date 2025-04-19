
import { Outlet } from "react-router-dom";
import Headnav from "./Components.jsx/Headnav";
import HeadBanner from "./Components.jsx/HeadBanner";

const Layout=()=>{
    return(
        <>
        <Headnav/>
        <Outlet/>
        <HeadBanner/>
        </>
    )
}
export default Layout;