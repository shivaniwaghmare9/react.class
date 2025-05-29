import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import ToDo from "./Pages/ToDo";

const App=()=>{
  return(
    <>
     <BrowserRouter>
        <Routes>
              <Route path="/" element={<Layout/>}>
               <Route index  element={<Home/>}/>
               <Route path="home" element={<Home/>}/>
               <Route path="todo" element={<ToDo/>}/>
              </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;