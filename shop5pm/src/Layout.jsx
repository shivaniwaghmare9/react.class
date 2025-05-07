import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TopMenu from "./Components/TopMenu";
import { Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
          <Header/>
          <hr/>
          <TopMenu/>
          <Outlet/>
          <Footer/>
        </>
    )
}
export default Layout;