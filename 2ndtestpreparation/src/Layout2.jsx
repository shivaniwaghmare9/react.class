import Topnav from "./Topnav";
import { Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <Topnav/>
        <Outlet/>
        </>
    )
}
export default Layout;