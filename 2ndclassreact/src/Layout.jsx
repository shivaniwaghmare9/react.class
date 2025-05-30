
import { Link ,Outlet} from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <div className="header">
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        </div>
        <hr />
        <div className="head">
        <Outlet/>
        </div>
        <hr />
        <div className="footer">
        www.myCompany.com All reserved!!!
        </div>

        </>
    )
}
export default Layout;