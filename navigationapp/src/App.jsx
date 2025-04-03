
//===============================================[navigation]=============================================================================

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Nofound from "./pages/Nofound";


const App=()=>{
  return(
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              
              <Route index element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="product" element={<Product/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="*" element={<Nofound/>}/>

            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;