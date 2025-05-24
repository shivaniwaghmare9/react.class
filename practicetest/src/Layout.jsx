
import { Link,Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
         <div id="nav">
            <Link to="home">Home</Link> 
            <Link to="counter">Counter App</Link>
            <Link to="theme">Theme Change App</Link>
            <Link to="todo">Todo List App</Link>
            <Link to="contact">Contact Us</Link>
         </div>
            <hr size="4"/>
            <Outlet/>
         
        </>
    )
}
export default Layout;