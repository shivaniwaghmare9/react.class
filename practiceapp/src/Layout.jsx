import { Link,Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
          <Link to="home">Home</Link>
          <Link to="about">About</Link>
          <Link to="product">Product</Link>
          <Link to="contact">Contact</Link>

          <hr size="4" color="black"/>
          <Outlet/>
          <hr size="4" color="black"/>
          www.welcomeourcarrenttalwebsite.com
        </>
    )
}
export default Layout;
