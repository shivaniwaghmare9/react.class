
import { useSelector,useDispatch } from "react-redux";
import { bglClrChange } from "./colorSlice";
import { useState } from "react";
const App=()=>{
  cosnt[clr,setClr]=useState("")
  const myclr=useSelector(state=>state.mycolor.color)
  const dispatch=useDispatch();
  return(
    <>
    <h3>React redux toolkit!!</h3><br/>
    Enter Color: <input type="text" value={clr} onChange={(e)=>{setClr(e.target.value)}}/><br/><br/>
    <button onClick={()=>{dispatch(bglClrChange(clr))}}>Click</button><br/><br/>
    <div style={{width:"200px",height:"200px",backgroundColor:myclr}}>

    </div>
    </>
  )
}
export default App;