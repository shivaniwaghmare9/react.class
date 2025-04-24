
import { Outlet } from "react-router-dom";
import Tophead from "./componets/TopHead";
const Layout=()=>{
    return(
        <>

           <Tophead/>
           <Outlet/>
        </>
    )
}
export default Layout;