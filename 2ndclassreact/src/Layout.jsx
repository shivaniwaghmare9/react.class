
// import { Link ,Outlet} from "react-router-dom";
// const Layout=()=>{
//     return(
//         <>
//         <div className="header">
//         <Link to="home">Home</Link>
//         <Link to="about">About</Link>
//         <Link to="contact">Contact</Link>
//         </div>
//         <hr />
//         <div className="head">
//         <Outlet/>
//         </div>
//         <hr />
//         <div className="footer">
//         www.myCompany.com All reserved!!!
//         </div>

//         </>
//     )
// }
// export default Layout;
//============================================BOOTSTRAP-LAYOUT==============================================================================================
import Footer from "./componenet/Footer";
import Topnav from "./componenet/Topnav";
import { Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
         <Topnav/>
         <div className="middout">
         <Outlet/>
         </div>
         <Footer/>
        </>
    )
}
export default Layout;