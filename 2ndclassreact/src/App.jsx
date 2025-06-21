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

//--------------------------------------------------------------------------------------------------------------------------------
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

//   const ans=EmpData.map((key)=> {
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
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NoFound from "./pages/NoFound";
// const App=()=>{
//   return(
//     <>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Layout/>}>
//             <Route index element={<Home/>}/>
//             <Route path="home" element={<Home/>}/>
//              <Route path="about" element={<About/>}/>
//               <Route path="contact" element={<Contact/>}/>
//               <Route path="*" element={<NoFound/>}/>
//             </Route>
//           </Routes>
//         </BrowserRouter>
//     </>
//   )
// }
// export default App;



//====================================================BOOTSTRAP-NAVBAR=NAVIGATION======================================================================================================================================
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./bootpages/Home";
import Form from "./bootpages/Form";
import MapTable from "./bootpages/TablewithMap";
import Event from "./bootpages/Event";
import Contact from "./bootpages/Contact";
import Context from "./bootpages/Context";
import ToolKit from "./bootpages/ToolKit";
const App=()=>{
  return(
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="form" element={<Form/>}/>
          <Route path="map" element={<MapTable/>}/>
          <Route path="event" element={<Event/>}/>
          <Route path="context" element={<Context/>}/>
          <Route path="toolkit" element={<ToolKit/>}/>
          <Route path="contact" element={<Contact/>}/>

          </Route>
        </Routes>
     </BrowserRouter>
      
    </>
  )
}
export default App;

//===========================================HOOKS(03/06/2025)(USESTATE HOOK)==========================================================================================================

// import { useState } from "react";
// const App=()=>{
//   const[val,setVal]=useState("Shivani");
//   return(
//     <>
//      <h3>Welcome to react hook!!!: {val}</h3>
//      <button onClick={()=>{setVal("Riya")}}>Click me</button>
//     </>
//   )
// }
// export default App;

//=====================================================================================================================================

// import { useState } from "react";
// const App=()=>{
//   const[color,setColor]=useState("red");
//   return(
//     <>
//     <div style={{width:"35%",backgroundColor:"grey",padding:"2rem"}}>
//      <h3>Welcome to react hook!!!</h3>
//      <h4 style={{color:color}}>My fav color: {color}</h4>
//      <button onClick={()=>{setColor("blue")}}>Blue</button>
//      <button onClick={()=>{setColor("green")}}>Green</button>
//      <button onClick={()=>{setColor("darkblue")}}>Dark Blue</button>
//      <button onClick={()=>{setColor("yellow")}}>Yellow</button>
//      </div>
//     </>
//   )
// }
// export default App;
//=================================================COUNTER APP=====================================================================================
// import { useState } from "react"
// const App=()=>{
//   const[count,setCount]=useState(0)
//   const Incre=()=>{
//     setCount(count+1);
//   }
//   const Decre=()=>{
//     if(count==0){
//       alert("Not less then 0")
//     }
//     else
//     {
//       setCount(count-1);
//     }
//   }
//   return(
//     <>
//     <div style={{marginLeft:"30%",backgroundColor:"gray",width:"30%",padding:"2rem"}}>
//       <h3>Counter App!!</h3>
//       <button onClick={Incre}>Increment</button>
//       <h4>{count}</h4>
//       <button onClick={Decre}>Decrement</button>
//       <button onClick={()=>{setCount(0)}}>Reset</button>
      
//       </div>
//     </>
//   )
// }
// export default App

//=============================================================================================================================

// import { useState } from "react"
// const App=()=>{
//   const[count,setCount]=useState(0)
  
//   const Decre=()=>{
//     if(count==0){
//       alert("Not less then 0")
//     }
//     else
//     {
//       setCount(count-1);
//     }
//   }
//   return(
//     <>
//     <div style={{marginLeft:"30%",backgroundColor:"gray",width:"30%",padding:"2rem"}}>
//       <h3>Counter App!!</h3>
//       <button onClick={()=>{setCount(count+1)}}>Increment</button>
//       <h4>{count}</h4>
//       <button onClick={Decre}>Decrement</button>
//       <button onClick={()=>{setCount(0)}}>Reset</button>
      
//       </div>
//     </>
//   )
// }
// export default App

//==============================================(USESTATE-USEEFFECT(1 her render par chalegaa) HOOK)=======================================================================================
// import { useState,useEffect } from "react";
// const App=()=>{
//   const[myval,setMyval]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//        setMyval(myval+1);
//     },2000)
    
//   })
//   return(
//     <>
//      <h3>React usestate and useeffect hook using:{myval}</h3>

//     </>
//   )
// }
// export default App;

//============================================USEEFFECT(2-EK hi bar chalegaa)================================================================================
// import { useState,useEffect } from "react";
// const App=()=>{
//   const[myval,setMyval]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//        setMyval(myval+1);
//     },3000)
// },[])
//   return(
//     <>
//      <h3>Using React usestate and useeffect hook :{myval}</h3>

//     </>
//   )
// }
// export default App;

//=============================================USEEFFECT(3-ek hi bar render hoga lekin ydii first me change kiyaa to second me changes hoge)==========================================================================================================
// import { useState,useEffect } from "react";
// const App=()=>{
//   const[add,setAdd]=useState(0);
//   const[multi,setMulti]=useState(0);
//   useEffect(()=>{

//     setMulti(add*2)

//   },[add])
//   return(
//     <>
//      <h3>Counter App!!!</h3>
//      <h4>Addition:{add}</h4>
//      <h4>Multiplication:{multi}</h4>
//      <button onClick={()=>{setAdd(add+1)}}>Click me</button>
    
     
//     </>
//   )
// }
// export default App;

//=======================================(04/06/2025)(from-handle-design-submit)=========================================================================================
// import { useState } from "react";
// const App=()=>{
//   const[name,setaName]=useState("");
//   const[city,setCity]=useState("");
//   const handleSubmit=()=>{
//     console.log({name:name,city:city})
//   }
//   return(
//     <>
//      <h3>Application Form</h3>
//      Enter Name: <input type="text" value={name} 
//      onChange={(e)=>{setaName(e.target.value)}}/><br/><br/>
//      Enter City: <input type="text" value={city}  
//      onChange={(e)=>{setCity(e.target.value)}}/><br/><br/>
//      <button onClick={handleSubmit}>Submit</button>

//     </>
//   )
// }
// export default App;

//=================================================MULTIPUL OBJECT RETURN KRNA(spread operator)=======================================================

