

import Footer from "./component/Footer";
import Header from "./component/Header";
// import TopMenu from "./Components/TopMenu";
import { Outlet } from "react-router-dom";
import TopHead from "./component/TopHead";
const Layout=()=>{
    return(
        <> 
         <div id="topHeader">
         {/* <Header/> */}
         <TopHead/>
         </div>
          
          <Outlet/>
          <Footer/>
        </>
    )
}
export default Layout;