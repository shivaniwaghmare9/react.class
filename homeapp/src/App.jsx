
import { useSelector,useDispatch } from "react-redux";
import { bglClrChange } from "./colorSlice";
import { useState } from "react";
const App=()=>{
  const[txtval,setTxtVal]=useState("")
  const myclr=useSelector(state=>state.mycolor.color)
  const dispatch=useDispatch();
  return(
    <>
    <h3 align="center">Welcome to my color</h3><br/>
    <div style={{marginLeft:"20%"}}>
    Enter Color: <input type="text" value={txtval} onChange={(e)=>{setTxtVal(e.target.value)}}/><br/><br/>
    <button onClick={()=>{dispatch(bglClrChange(txtval))}} style={{backgroundColor:"blue",border:"none",color:"aliceblue"}}>Change Color</button><br/><br/>
    <div style={{width:"200px",height:"200px",backgroundColor:myclr}}>

    </div>
    </div>
    </>
  )
}
export default App;