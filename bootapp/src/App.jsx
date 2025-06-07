
// import axios from "axios";
// import { useState } from "react";
// const App=()=>{
//   const[input,setInput]=useState({});
//   const handleInput=(e)=>{
//     let name=e.target.name;
//     let value=e.target.value;
//     setInput(Values=>({...Values,[name]:value}))
//     console.log(input)
//   }
//   const handleSubmit=async()=>{
//     // console.log(input)
//     let api="http://localhost:3000/students";
//     const response=await axios.post(api,input);
//     console.log(response.data)
//     alert("Data Inserted")
//   }   

//   return(
//     <>
//      <h3>Application Form!!</h3>
//     Enter Name: <input type="text" name="name"  onChange={handleInput}/><br/><br/>
//     Enter Rollno: <input type="text" name="rollno"  onChange={handleInput}/><br/><br/>
//     Enter City: <input type="text" name="city"  onChange={handleInput}/><br/><br/>
//     Enter Fees: <input type="text" name="fees"  onChange={handleInput}/><br/><br/>
//     <button onClick={handleSubmit}>Save!!!</button>
//     </>
//   )
// }
// export default App;

//=======================================use-spread operator==================================================================================================
// import axios from "axios";
// import { useState } from "react";
// const App=()=>{
//   const[input,setInput]=useState({});
//   const handleInput=(e)=>{
//     let name=e.target.name;
//     let value=e.target.value;
//     setInput(Values=>({...Values,[name]:value}))
//     console.log(input)
//   }
//   const handleSubmit=async()=>{
//     // console.log(input)
//     let api="http://localhost:3000/employee";
//     const response=await axios.post(api,input);
//     console.log(response.data)
//     alert("Data Inserted")
//   }

//   return(
//     <>
//      <h3>Employee Records!!</h3>
//     Employee name: <input type="text" name="name"  onChange={handleInput}/><br/><br/>
//     Employee Number: <input type="text" name="number"  onChange={handleInput}/><br/><br/>
//     Enter Designation: <input type="text" name="designation"  onChange={handleInput}/><br/><br/>
//     Enter City: <input type="text" name="city"  onChange={handleInput}/><br/><br/>
//     <button onClick={handleSubmit}>Save!!!</button>
//     </>
//   )
// }
// export default App;

//==========================================================================================================================
// import { BrowserRouter,Routes,Route } from "react-router-dom"
// import Layout from "./Layouts/Layout"
// import Home from "./pages/Home"
// import Insert from "./pages/Insert"
// const App=()=>{
//   return(
//     <>
//        <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Layout/>}>
//             <Route index element={<Home/>}/>
//             <Route path="home" element={<Home/>}/>
//             <Route path="insert" element={<Insert/>}/>

//             </Route>
//           </Routes>
//        </BrowserRouter>
//     </>
//   )
// }
// export default App

//=======================================================================================================================================

import { BrowserRouter,Routes,Route } from "react-router-dom";
import LayoutBt from "./Layouts/LayoutBt";
import Home from "./bootpages/Home";
import Insert from "./bootpages/Insert";
import Display from "./bootpages/Display";
import Update from "./bootpages/Update";
const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutBt/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="insert" element={<Insert/>}/>
          <Route path="display" element={<Display/>}/>
          <Route path="update" element={<Update/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;