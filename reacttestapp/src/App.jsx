import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Placement from "./pages/Placement";
import Gallery from "./pages/Gallery";

const App=()=>{
  return(
    <>
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/> 
            <Route path="about" element={<About/>}/> 
            <Route path="services" element={<Services/>}/>
            <Route path="placement" element={<Placement/>}/>
            <Route path="gallery" element={<Gallery/>}/>
            </Route>
          </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;