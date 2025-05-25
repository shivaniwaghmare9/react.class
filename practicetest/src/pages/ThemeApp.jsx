
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { changeColor } from "../ThemeSlice";
const  ThemeApp=()=>{
    const data=useSelector(state=>state.mycolor.color);
    const[clr,setClr]=useState("");
    const dispatch=useDispatch();
    return(
        <>
          <h1>ThemeChange App!!!</h1>
          Enter Color: <input type="text" value={clr} 
          onChange={(e)=>{setClr(e.target.value)}}/><br/><br/>
          <button onClick={()=>{dispatch(changeColor(clr))}}>Change!!</button>
          <div style={{width:"300px",height:"400px",border:"1px solid black",backgroundColor:data}}></div>

        </>
    )
}
export default ThemeApp;