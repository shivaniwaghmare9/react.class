
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Search from "./pages/Search";
import Update from "./pages/Update";
import Contact from "./pages/Contact";
import Edit from "./pages/MyEdit";
const App=()=>{
  return(
    <>
     {/* <h1>Welcome to Crud Work</h1> */}
     {/*-============================================ROUTER-DOM=============================================================================*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>

              <Route index element={<Home/>}/>
              <Route path="home"  element={<Home/>}/>
              <Route path="insert"  element={<Insert/>}/>
              <Route path="display"  element={<Display/>}/>
              <Route path="search"  element={<Search/>}/>
              <Route path="update"  element={<Update/>}/>
              <Route path="contact"  element={<Contact/>}/>
              <Route path="myedit/:id" element={<Edit/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;