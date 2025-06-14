
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Faculty from "./pages/Faculty";
import Course from "./pages/OurCourse";
import Contact from "./pages/Contact";
import Style from "./pages/Stylediv";
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="style" element={<Style/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="faculty" element={<Faculty/>}/>
        <Route path="course" element={<Course/>}/>
        <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
    </>
  )
}
export default App;