
//====================================================COUNTER======================================================================
// import { useSelector,useDispatch } from "react-redux";
// import { Increment,Decrement } from "../TodoSlices/counterSlice";
// const ToolKit=()=>{
//     const work=useSelector(state=>state.mycounter.count)
//     const dispatch=useDispatch();

//     return(
//         <>
//            <h3>Counter App!!</h3>
//            <h4>Count:{work}</h4>
//            <button onClick={()=>{dispatch(Increment())}}>Increment</button>
//            <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>
//         </>
//     )
// }
// export default ToolKit;
//==================================================COLORSLICE========================================================

// import { useSelector,useDispatch } from "react-redux";
// import { changeClr } from "../TodoSlices/colorSlice";
// const ToolKit=()=>{
//     const clr=useSelector(state=>state.mycolor.color)
//     const dispatch=useDispatch();
//     return(
//         <>
//          <h3>Change Color!!</h3>
//          <button onClick={()=>{dispatch(changeClr())}}>Change</button><br/><br/>
//          <div style={{width:"200px",height:"200px",backgroundColor:clr}}>

//          </div>
         
//         </>
//     )
// }
// export default ToolKit;

//==============================================THEMECHANGE(COLOR)=========================================================================================

import { useSelector,useDispatch } from "react-redux";
import { changeClr } from "../TodoSlices/colorSlice";
import { useState } from "react";
const ToolKit=()=>{
    const[myclr,setClr]=useState("")
    const clr=useSelector(state=>state.mycolor.color)
    const dispatch=useDispatch();
    return(
        <>
         <h3>Change Color!!</h3>
         Enter Color: <input type="text" value={myclr} onChange={(e)=>{setClr(e.target.value)}}/><br/><br/>
         <button onClick={()=>{dispatch(changeClr(myclr))}}>Change</button><br/><br/>
         <div style={{width:"200px",height:"200px",backgroundColor:clr}}>

         </div>
         
        </>
    )
}
export default ToolKit;