

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
 import MyCart from "./pages/MyCart";
 import Search from "./pages/Search";
import ProductDisplay from "./pages/ProductDisplay";
import SmartPhones from "./pages/Smartphones";
import Smartwatch from "./pages/Smartwatches";
const App=()=>{
    return(
        <>
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="smartphones" element={<SmartPhones/>}/>
              <Route path="smartwatches" element={<Smartwatch/>}/>
              <Route path="mycart" element={<MyCart/>}/>
              <Route path="search" element={<Search/>} />
              <Route path="prodisplay/:id" element={<ProductDisplay/>}/>

            </Route>
          </Routes>
         </BrowserRouter>
         
        </>
    )
}
export default App;