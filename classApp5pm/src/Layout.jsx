import { Link,Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
         <Link to="home">Home</Link>
         <Link to="insert">insert</Link>
         <Link to="display">Display</Link>
         <Link to="update">Update</Link>
         <Link to="search">Search</Link>
         <hr />
         <Outlet/>
         <hr />
         www.mycompany.com!!
        </>
    )
}
export default Layout;