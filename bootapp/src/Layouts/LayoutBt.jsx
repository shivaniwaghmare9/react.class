
import { Outlet } from "react-router-dom"
import Topnav from "../Component/TopNav"
import Footer from "../Component/Footer"
const LayoutBt=()=>{
    return(
        <> 
        <Topnav/>
        <hr />
        <Outlet/>
        <hr />
        <Footer/>
         
        </>
    )
}
export default LayoutBt