
import { useSelector,useDispatch } from "react-redux";
import { bglClrChange } from "./colorSlice";
const App=()=>{
  const myclr=useSelector(state=>state.mycolor.color)
  const dispatch=useDispatch();
  return(
    <>
    <h3>React redux toolkit!!</h3><br/>
    <button onClick={()=>{dispatch(bglClrChange())}}>Click</button><br/><br/>
    <div style={{width:"200px",height:"200px",backgroundColor:myclr}}>

    </div>
    </>
  )
}
export default App;