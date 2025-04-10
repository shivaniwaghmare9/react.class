
import { Link,Outlet } from "react-router-dom";
const Layout=()=>{
    return(
    <>
        <div id="link">
            <Link to="home" id="link1">Home</Link>
            <Link to="insert" id="link1">Insert</Link>
            <Link to="display" id="link1">Display</Link>
        </div>
        <hr />

         <Outlet/>  
       
       <hr />

       www.myappdesigncompany.com...
   </>
    )
}
export default Layout;