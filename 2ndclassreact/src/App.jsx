//====================================================================================================================================================
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
import EmpData from "./EmpData";
const App=()=>{
  const ans=EmpData.map((key)=>{
    return(
      <>
       <tr>
        <td>{key.name}</td>
        <td>{key.Empno}</td>
        <td>{key.Post}</td>
        <td>{key.Salary}</td>
       </tr>
      </>
    )
  })
  return(
    <>
    <h1>Employee Records!!!</h1>
     <table border="1" width="500px">
      <tr>
      <th>Name</th>
      <th>Empno</th>
      <th>Post</th>
      <th>Salary</th>
      </tr>
      {ans}
     </table>
    </>
  )
}
export default App;

//==============================================================================================================================================================
// import EmpData from "./EmpData";
// import Design from "./EmpDesign";
// const App=()=>{
//   const ans=EmpData.map((key)=> <Design 
//   nm={key.name}  
//   no={key.Empno} 
//   pt={key.Post} 
//   sal={key.Salary}/>)
//   return(
//     <>
//      <h1 align="center">Welcome To Employeeee Records!!!!</h1>
//      <hr />
//      <table border="1" width="500px">
//       <tr>
//         <th>Name</th>
//         <th>EmpNo</th>
//         <th>Post</th>
//         <th>Salary</th>
//       </tr>
//       {ans}
//      </table>
//     </>
//   )
// }
// export default App;


