  
  
import { Outlet } from "react-router-dom";
import Topnav from "./Components/Topnav";

const Layout=()=>{
    return(
        <>
          <Topnav/>
          <Outlet/>
        </>
    )
}
export default Layout;