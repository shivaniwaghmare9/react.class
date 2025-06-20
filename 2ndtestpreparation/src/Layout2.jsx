import Topnav from "./Topnav2";
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