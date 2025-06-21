
// //====================================================COUNTER======================================================================
// // import { useSelector,useDispatch } from "react-redux";
// // import { Increment,Decrement } from "../TodoSlices/counterSlice";
// // const ToolKit=()=>{
// //     const work=useSelector(state=>state.mycounter.count)
// //     const dispatch=useDispatch();

// //     return(
// //         <>
// //            <h3>Counter App!!</h3>
// //            <h4>Count:{work}</h4>
// //            <button onClick={()=>{dispatch(Increment())}}>Increment</button>
// //            <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>
// //         </>
// //     )
// // }
// // export default ToolKit;
// //==================================================COLORSLICE========================================================

// // import { useSelector,useDispatch } from "react-redux";
// // import { changeClr } from "../TodoSlices/colorSlice";
// // const ToolKit=()=>{
// //     const clr=useSelector(state=>state.mycolor.color)
// //     const dispatch=useDispatch();
// //     return(
// //         <>
// //          <h3>Change Color!!</h3>
// //          <button onClick={()=>{dispatch(changeClr())}}>Change</button><br/><br/>
// //          <div style={{width:"200px",height:"200px",backgroundColor:clr}}>

// //          </div>
         
// //         </>
// //     )
// // }
// // export default ToolKit;

// //==============================================THEMECHANGE(COLOR)=========================================================================================

// import { useSelector,useDispatch } from "react-redux";
// import { changeClr } from "../TodoSlices/colorSlice";
// import { useState } from "react";
// const ToolKit=()=>{
//     const[myclr,setClr]=useState("")
//     const clr=useSelector(state=>state.mycolor.color)
//     const dispatch=useDispatch();
//     return(
//         <>
//          <h3>Change Color!!</h3>
//          Enter Color: <input type="text" value={myclr} onChange={(e)=>{setClr(e.target.value)}}/><br/><br/>
//          <button onClick={()=>{dispatch(changeClr(myclr))}}>Change</button><br/><br/>
//          <div style={{width:"200px",height:"200px",backgroundColor:clr}}>

//          </div>
         
//         </>
//     )
// }
// export default ToolKit;

//=================================================================TODO=====================================================

import { useSelector,useDispatch } from "react-redux";
import { addTask } from "../TodoSlices/todoSlice";
import { useState } from "react";
const ToolKit=()=>{
    const[txtval,setTxtVal]=useState("");
    const data=useSelector(state=>state.todo.task)
    const dispatch=useDispatch();
    console.log(data);
    let sno=0;
    const ans=data.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.work}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>Todo App!!</h1>
        Enter Task: <input type="text" value={txtval} onChange={(e)=>{setTxtVal(e.target.value)}}/><br/><br/>
        <button onClick={()=>{dispatch(addTask({work:txtval}))}}>Add</button><br/><br/>
        <table>
            <tr>
                <th>SNO</th>
                <th>TASK</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default ToolKit;