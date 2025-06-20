//================================================(28-04-2025(toolkit!!!))================================================================================================================

// import { useSelector,useDispatch } from "react-redux";
// import { increment,decrement } from "./counterSlice";
// const App=()=>{
//   const mydata=useSelector(state=>state.mycounter.count);
//   const dispatch=useDispatch();
//   return(
//     <>
//      <h1>Welcome tool!!!</h1>
//      <button onClick={()=>dispatch(increment())}>Increment</button>
//      <h1>{mydata}</h1>
//      <button onClick={()=>dispatch(decrement())}>Decrement</button>
//     </>
//   )
// }
// export default App;

//=================================================(work)===========================================================================================================
// import { useSelector,useDispatch } from "react-redux";
// import { increment,decrement } from "./counterSlice";
// const App=()=>{
//   const mydata=useSelector(state=>state.mycounter.count);
//   const dispatch=useDispatch();
//   return(
//     <>
//       <h1>Welcome to toolkit classes!!!!</h1>
//       <button onClick={()=>{dispatch(increment())}}>Increment</button>
//       <h1>{mydata}</h1>
//       <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
//     </>
//   )
// }
// export default App;

//============================================(29-04-2025)=====================================================================================
// import { useSelector,useDispatch } from "react-redux";
// import { changename } from "./nameSlice";
// const App=()=>{
//   const usrname=useSelector(state=>state.myname.user)
//   const dispatch=useDispatch();
//   return(
//     <>
//      <h1>Welcome : {usrname}</h1>
//      <button onClick={()=>{dispatch(changename())}}>Change name</button>
//     </>
//   )
// }
// export default App;
//===================================================CHNAGECOLOR========================================================================

import { useSelector,useDispatch } from "react-redux";
import { changeColor } from "./colorSlice";
import { useState } from "react";
const App=()=>{
  const[clr,setClr]=useState("")
  const data=useSelector(state=>state.mycolor.color)
  const dispath=useDispatch();
  return(
    <>
        <h1>ColorSlice!!!</h1>
        Enter Color: <input type="text" value={clr} onChange={(e)=>{setClr(e.target.value)}}/><br/><br/>
        <div style={{backgroundColor:data,width:"200px",height:"200px",border:"1px solid black"}}>

        </div>
        <button onClick={()=>{dispath(changeColor(clr))}}>Change!!</button>
    </>
  )
}
export default App;
//===============================================(30-04-2025(payload[todo-list]))====================================================================================================================
// import { useSelector,useDispatch } from "react-redux";
// import { useState } from "react";
// import { addTask } from "./todoSlice";
// const App=()=>{
//   const work=useSelector(state=>state.todo.task);
//   const dispatch=useDispatch();
//   const[val,setVal]=useState("");
//   console.log(work)
//   let sno=0;
//   const ans=work.map((key)=>{
//     sno++;
//     return(
//       <>
//        <tr>
//         <td>{sno}</td>
//         <td>{key.task}</td>
//        </tr>
//       </>
//     )
//   })
//   return(
//     <>
//        <h1>My change color program</h1>
//        Enter Work: <input type="text"value={val}  
//        onChange={(e)=>{setVal(e.target.value)}}/><br/><br/>
//        <button onClick={()=>{dispatch(addTask({task:val}))}}>Add</button>
//          <hr />
//          <table border="1"width="300px">
//           <tr>
//             <th>Sno</th>
//             <th>Task</th>
//           </tr>
//           {ans}
//          </table>
       
//     </>
//   )
// }
// export default App;


// //================================================(01-05-2025(todo app))=================================================================================================================
// import { useSelector,useDispatch } from "react-redux";

// import { useState } from "react";
// import { addTask,removeTask,remByIndex } from "./todoSlice";
// const App=()=>{
//   const[val,setVal]=useState("");
//   const data=useSelector(state=>state.todo.task);
//   const dispatch=useDispatch();
//   console.log(data);
//    let sno=0;
//    const ans=data.map((key,index)=>{
//         sno++;
//         return(
//           <>
//            <tr>
//             <td>{sno}</td>
//             <td>{key.work}</td>
//             <td>
//               <button onClick={()=>{dispatch(removeTask({id:key.id}))}}>Delete</button>
//             </td>
//             <td>
//               <button onClick={()=>{dispatch(remByIndex({id:index}))}}>Remove</button>
//             </td>
//            </tr>
//           </>  
//         )
//       })
//   return(
//     <>
//      <h1>Welcome To To-Do App Class</h1>
//       Enter Your Task: <input type="text" value={val} 
//       onChange={(e)=>{setVal(e.target.value)}}/><br/><br/>
//      <button onClick={()=>{dispatch(addTask({id:Date.now(),work:val}))}}>Add</button>
//      <hr />
//      <table border="1"width="300px">
//            <tr>
//              <th>Sno</th>
//              <th>Task</th>
//              <th>Delete</th>
//              <th>Remove</th>
//            </tr>
//            {ans}
//          </table>
//     </>
//   )
// }
// export default App;

//===============================================(02-05-2025(ToDo))=================================================================================================================================================
// import { useState } from "react";
// import { useSelector,useDispatch } from "react-redux";
// import { addTask,RemoveTask,taskComplete,taskInComplete,myEditSave } from "./todoSlice";
// const App=()=>{
//   const[txtVal,setTxtval]=useState("");
//   const[btnStatus,setbtnStatus]=useState(true);
//   const[myid,setMyid]=useState("");
//   const data=useSelector(state=>state.todo.task);
//     const dispatch=useDispatch();
//     console.log(data);
//     const dataEdit=(id,work)=>{
//       setTxtval(work);
//       setbtnStatus(false);
//       setMyid(id);
//     }
//     const myEditData=()=>{
//       dispatch(myEditSave({id:myid,work:txtVal}));
//       setbtnStatus(true);
//     };
//     let sno=0;
    
//     const ans=data.map((key)=>{
//               sno++;
//               return(
//                 <>
//                  <tr>
//                   <td>{sno}</td>
//                   <td>{key.taskStatus?(
//                     <>
//                     <span style={{color:"red",textDecoration:"line-through"}}>
//                       {key.work}
//                       </span>
//                       </>
//                      ):(
//                     <>{key.work}</>
//                      )}
//                   </td>
//                   <td>
//                     <button onClick={()=>{dispatch(RemoveTask({id:key.id}))}}>Delete</button>
//                   </td>
//                   <td>
//                     <button onClick={()=>{dispatch(taskComplete({id:key.id}))}}>Complete</button>
//                   </td>
//                   <td>
//                     <button onClick={()=>{dispatch(taskInComplete({id:key.id}))}}>InComplete</button>
//                   </td>
//                   <td>
//                     <button onClick={()=>{dataEdit(key.id,key.work)}}>Edit</button>
//                   </td>
//                  </tr>
//                 </>  
//               )
//             })
//   return(
//     <>
//      <h1>Welome ToDo App</h1>
//      Enter Your Task : <input type="text" value={txtVal} 
//      onChange={(e)=>{setTxtval(e.target.value)}}/><br/><br/>
//      {btnStatus ?(
//       <>
//    <button onClick={()=>{dispatch(addTask({id:Date.now(),work:txtVal,taskStatus:false}))}}>Add</button>
     
//       </>
//      ):(
//       <>
//         <button onClick={myEditData}>EditSave</button>
//       </>
//      )}
//      <hr />
     
//       <table border="1"width="600px">
//             <tr>
//               <th>Sno</th>
//               <th>Your Task</th>
//               <th>Delete</th>
//               <th>Complete</th>
//               <th>Incomplete</th>
//               <th>Edit</th>
//             </tr>
//             {ans}
//           </table>
//     </>
//   )
// }
// export default App;