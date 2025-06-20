
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Faculty from "./pages/Faculty";
// import Course from "./pages/OurCourse";
// import Contact from "./pages/Contact";
// import Style from "./pages/Stylediv";
// const App=()=>{
//   return(
//     <>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout/>}>
//         <Route index element={<Home/>}/>
//         <Route path="home" element={<Home/>}/>
//         <Route path="style" element={<Style/>}/>
//         <Route path="about" element={<About/>}/>
//         <Route path="faculty" element={<Faculty/>}/>
//         <Route path="course" element={<Course/>}/>
//         <Route path="contact" element={<Contact/>}/>
//         </Route>
//       </Routes>

//     </BrowserRouter>
//     </>
//   )
// }
// export default App;

//=============================================(2NDTEXT)======================================================================================================

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Search from "./pages/Search";
import Update from "./pages/Update";
import Edit from "./pages/Edit";
import Total from "./pages/Total";
import Contact from "./pages/Contact";

const App=()=>{
  return(
    <>
     <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="insert" element={<Insert/>}/>
            <Route path="display" element={<Display/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="update" element={<Update/>}/>
            <Route path="edit/:id" element={<Edit/>}/>
            <Route path="qnty" element={<Total/>}/>
            <Route path="contact" element={<Contact/>}/>
            </Route>
         </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;