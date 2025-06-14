
import { useSelector,useDispatch } from "react-redux";
import { ChangeColor } from "../ColorSlice";
import { useState } from "react";
const Course=()=>{
    const[clr,setClr]=useState("");
    const color=useSelector(state=>state.mycolor.color)
    const dispatch=useDispatch();
    return(
        <>
        <div className="slice">
        <h3>Theme Change!!</h3>
        Enter Color: <input type="text" value={clr} onChange={(e)=>{setClr(e.target.value)}}/><br/><br/>
        <div style={{width:"200px",height:"200px",border:"1px solid black",backgroundColor:color}}>

        </div><br/>
        <button onClick={()=>{dispatch(ChangeColor(clr))}} className="btn4">Change</button>
        </div>
        </>
    )
}
export default Course;