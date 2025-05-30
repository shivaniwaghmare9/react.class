//===================================================1st day(28-05-2025)=================================================================================================
// const App=()=>{
//   const name=["shivani","riyaa", "priyaa"]
//   const ans=name.map((key)=>{
//     return(
//       <h1>{key}</h1>
//     )
//   })
//   return(
//     <>
//      <h1>Welcome!!!</h1>
//      {ans}
//     </>
//   )
// }
// export default App;

//=========================================================================================================================================
// const App=()=>{
//   const subject=["PHp","Java","Python","Mern","Html"]
// const ans=subject.map((key)=>{
//   return(
//     <>
//       <li>{key}</li>
      
//     </>

//   )
// })
//   return(
//     <>
//     <h1>Welcome !!!</h1>
    
//     <ol>{ans}</ol>
     
//     </>
//   )
// }
// export default App;

//=============================================================================================================================

// const App=()=>{
  
// const student=[
//   {
//     name:"Shivani",
//     rollno:22,
//     city:"Bhopal",
//     fees:56769
//   },
//   {
//     name:"Prinshu",
//     rollno:21,
//     city:"Vidisha",
//     fees:45678
//   },
//   {
//     name:"Preeti",
//     rollno:23,
//     city:"Riva",
//     fees:34567
//   },
//   {
//     name:"Ram",
//     rollno:24,
//     city:"Indore",
//     fees:234567
//   }
// ]
// const ans=student.map((key)=>{
//   return(
//     <>
//      <tr>
//       <td>{key.name}</td>
//       <td>{key.rollno}</td>
//       <td>{key.city}</td>
//       <td>{key.fees}</td>
//      </tr>
//     </>
//   )
// })

// return(
//   <>
//   <h1>Welcome to Students Record!!!</h1>
//   <hr />
//    <table border="1" width="500px"> 
//     <tr>
//       <th>Name</th>
//       <th>Rollono</th>
//       <th>City</th>
//       <th>Fees</th>
//     </tr>
//     {ans}
//    </table>
//   </>
// )
// }
// export default App;

//================================================================================================================================================================
// import EmpData from "./EmpData";
// const App=()=>{
//   let sno=0;
//   const ans=EmpData.map((key)=>{
//     sno++;
//     return(
//       <>
//        <tr>
//         <td>{sno}</td>
//         <td>{key.name}</td>
//         <td>{key.Empno}</td>
//         <td>{key.Post}</td>
//         <td>{key.Salary}</td>
//        </tr>
//       </>
//     )
//   })
//   return(
//     <>
//     <h1>Employee Records!!!</h1>
//      <table border="1" width="500px">
//       <tr>
//       <th>Sno</th>
//       <th>Name</th>
//       <th>Empno</th>
//       <th>Post</th>
//       <th>Salary</th>
//       </tr>
//       {ans}
//      </table>
//     </>
//   )
// }
// export default App;
//==================================================================================================================================
//==============================================Work===============================================================================================
// const App=()=>{
//   const data=["Shivani","Pritam","Ram","Divya","Riyaa"]
//   const ans=data.map((key)=>{
//     return(
//       <>
//       <h1>{key}</h1>
//       </>
//     )
//   })
//   return(
//     <>
//      <h1>Practice Array!</h1>
//      {ans}
//     </>
//   )
// }
// export default App;

//------------------------------------------------------------------------------------------------------------------------------------

// const App=()=>{
//   const subject=["Php","Html","Java","Pythan","React"]
//   const ans=subject.map((key)=>{
//     return(
//       <>
//        {/* <li>{key}</li> */}
//        <option>{key}</option>
//       </>
//     )
//   })
//   return(
//     <>
//      <h1>Practice!!!!</h1>
//      {/* <ol>{ans}</ol> */}
//      {/* <ul>{ans}</ul> */}
//      <select>{ans}</select>
//     </>
//   )
// }
// export default App;
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const App=()=>{
//   const student=[
//     {
//       name:"shivani",
//       rollono:123,
//       city:"Bhopal",
//       fees:45000
//     },
//     {
//       name:"Sweta",
//       rollono:123,
//       city:"Bhopal",
//       fees:25000
//     },
//     {
//       name:"Divya",
//       rollono:123,
//       city:"Bhopal",
//       fees:65000
//     },
//     {
//       name:"Pritam",
//       rollono:123,
//       city:"Bhopal",
//       fees:35000
//     },
//     {
//       name:"Ram",
//       rollono:123,
//       city:"Bhopal",
//       fees:55000
//     }
//   ]
//   const ans=student.map((key)=>{
//     return(
//       <>
//        <tr>
//         <td>{key.name}</td>
//         <td>{key.rollono}</td>
//         <td>{key.city}</td>
//         <td>{key.fees}</td>
//        </tr>
//       </>
//     )
//   })
//   return(
//     <>
//      <h1>Student Records!!!</h1>
//      <table border="1" width="500px">
//       <tr>
//         <th>Name</th>
//         <th>Rollno</th>
//         <th>City</th>
//         <th>Fees</th>
//       </tr>
//       {ans}
//      </table>
//     </>
//   )
// }
// export default App;
//-------------------------------------------------------------------------------------------------------------------------------------------------
// import EmpData from "./EmpData";
// const App=()=>{
//   const ans=EmpData.map((key)=>{
//     return(
//       <>
//        <tr>
//         <td>{key.name}</td>
//         <td>{key.empno}</td>
//         <td>{key.designation}</td>
//         <td>{key.salary}</td>
//        </tr>
//       </>
//     )
//   })
//   return(
//     <>
//       <h1>Employee Records!!!</h1>
//       <table border="1" width="500px">
//         <tr>
//           <th>Name</th>
//           <th>Empno</th>
//           <th>Designation</th>
//           <th>Salary</th>
//         </tr>
//         {ans}
//       </table>
//     </>
//   )
// }
// export default App;
 //==============================================================================================================================================================
// import EmpData from "./EmpData";
// import EmpDesign from "./EmpDesign";
// const App=()=>{
//   let sno=0;
//   const ans=EmpData.map((key)=> {
//     sno++;
//     return(
//       <>
//       <EmpDesign 
      
//   nm={key.name}  
//   eno={key.empno} 
//   dpt={key.department} 
//   sal={key.salary}/>
//       </>
//     )
//   })
//   return(
//     <>
//      <h1 align="center">Welcome To Employeeee Records!!!!</h1>
//      <hr />
//      <table border="1" width="500px">
//       <tr>
//         <th>Sno</th>
//         <th>Name</th>
//         <th>EmpNo</th>
//         <th>Department</th>
//         <th>Salary</th>
//       </tr>
//       {ans}
//      </table>
//     </>
//   )
// }
// export default App;

//=======================================================================product============================================================

// import ProDesign from "./ProDesign";
// import ProductData from "./ProductData";
// const App=()=>{
//   let sno=0;
//   const ans=ProductData.map((key)=> {
//     sno++;
//     return(
//       <>
//       <ProDesign 
   
//   no={key.pno}  
//   nm={key.name} 
//   qnt={key.Qunty} 
//   ct={key.city}/>
//       </>
//     )
//   })
//   return(
//     <>
//      <h1 align="center">Welcome To Product Records!!!!</h1>
//      <hr />
//      <table border="1" width="700px">
//       <tr>
        
//         <th>Number</th>
//         <th>ProductName</th>
//         <th>Quantity</th>
//         <th>City</th>
//       </tr>
//       {ans}
//      </table>
//     </>
//   )
// }
// export default App;

//================================================================================(react-router-dom)================================================================
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
const App=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
             <Route path="about" element={<About/>}/>
              <Route path="contact" element={<Contact/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}
export default App;



