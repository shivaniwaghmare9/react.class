// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./pages/Home";
// import Insert from "./pages/Insert";
// import Display from "./pages/Display";
// import Search from "./pages/Search";
// import Update from "./pages/Update";
// import Edit from "./pages/Edit";
// import Total from "./pages/Total";
// import Contact from "./pages/Contact";

// const App=()=>{
//   return(
//     <>
//      <BrowserRouter>
//          <Routes>
//             <Route path="/" element={<Layout/>}>
//             <Route index element={<Home/>}/>
//             <Route path="home" element={<Home/>}/>
//             <Route path="insert" element={<Insert/>}/>
//             <Route path="display" element={<Display/>}/>
//             <Route path="search" element={<Search/>}/>
//             <Route path="update" element={<Update/>}/>
//             <Route path="edit/:id" element={<Edit/>}/>
//             <Route path="qnty" element={<Total/>}/>
//             <Route path="contact" element={<Contact/>}/>
//             </Route>
//          </Routes>
//      </BrowserRouter>
//     </>
//   )
// }
// export default App;






import { useSelector,useDispatch } from "react-redux"
import { bgClrChange } from "./colorSlice"
const App=()=>{
  const myclr=useSelector(state=>state.mycolor.color)
  const dispatch=useDispatch();
  return(
    <>
     <h1 align="center">React redux toolkit!!</h1>
     <button onClick={()=>{dispatch(bgClrChange())}} style={{backgroundColor:"blue",border:"none"}}>Click</button><br/><br/>
     <div style={{width:"200px",height:"200px",backgroundColor:myclr}}>

     </div>
    </>
  )
}
export default App;