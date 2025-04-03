//============================================Array.map -method==============================================================================



// const App=()=>{
//   const arr=["PHp","Java","Mern","Python"]
//   const arr1=arr.map((key)=>{
//     return(
//       <>
//         {/* <h3>{key}</h3>
//         <option>{key}</option> */}
//         <li>{key}</li>
//       </>
//     )
//   })
//   return(
//     <>
//     <h1 align="center">Subjects Record!!!!</h1>
//     <hr />
//       {/* {arr1}
//       <select>{arr1}</select> */}
//       <ul>{arr1}</ul>
//     </>
//   )
// }
// export default App;

//==============================================table with array of object.map=======================================================================================
// const table=()=>{
//   const Record=[
//     {
//       name:"Shivani",
//       roll:123,
//       age:20,
//       sub:"Mern"
//     },
//     {
//       name:"Riyaa",
//       roll:124,
//       age:21,
//       sub:"Data-science"
//     },
//     {
  //     name:"Prinshu",
  //     roll:125,
  //     age:22,
  //     sub:"Python"
  //   },
  //   {
  //     name:"Pihu",
  //     roll:126,
  //     age:23,
  //     sub:"Java"
  //   }
  // ]

  // const info=Record.map((key)=>{
  //   return(
  //     <>
  //     <tr>
  //       <td>{key.name}</td>
  //       <td>{key.roll}</td>
  //       <td>{key.age}</td>
  //       <td>{key.sub}</td>
  //     </tr>
  //     </>
  //   )
  // })
  // return(
  //   <>
  //     <h1 align="center">Students Record!!!!</h1>
  //     <hr />

  //     <table border="2" width="500">
//         <tr>
//           <th>Name</th>
//           <th>Rollno</th>
//           <th>Age</th>
//           <th>Subject</th>
//         </tr>
//         {info}
//       </table>

//     </>
//   )

// }
// export default table;

//==============================================Array of Object with component(file)================================================================================================

import Data from "./EmpData";
import Design from "./EmpDesign";

const table2=()=>{
  const Record2=Data.map((key)=><Design 
  nm={key.name} 
  no={key.empno}
   pst={key.Post} 
   sal={key.Sal}
   />)
  return(
    <>
      <h1 align="center">Empolyeee Records!!!!</h1>
      <hr />
      <table border="2" width="500">
        <tr>
          <th>Name</th>
          <th>EmpNo</th>
          <th>Post</th>
          <th>Salary</th>
        </tr>
        {Record2}
      </table>
    </>
  )
}
export default table2;
