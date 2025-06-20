
import { useSelector,useDispatch } from "react-redux";
import { bglClrChange } from "./colorSlice";
import { useState } from "react";
const App=()=>{
  const[clr,setClr]=useState("")
  const myclr=useSelector(state=>state.mycolor.color)
  const dispatch=useDispatch();
  return(
    <>
    <h3 align="center">React redux toolkit!!</h3><br/>
    <div style={{marginLeft:"20%"}}>
    Enter Color: <input type="text" value={clr} onChange={(e)=>{setClr(e.target.value)}}/><br/><br/>
    <button onClick={()=>{dispatch(bglClrChange(clr))}} style={{backgroundColor:"blue",border:"none",color:"aliceblue"}}>Click</button><br/><br/>
    <div style={{width:"200px",height:"200px",backgroundColor:myclr}}>

    </div>
    </div>
    </>
  )
}
export default App;