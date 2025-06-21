
import { useSelector,useDispatch } from "react-redux";
import { Increment,Decrement } from "../TodoSlices/counterSlice";
const ToolKit=()=>{
    const work=useSelector(state=>state.mycounter.count)
    const dispatch=useDispatch();

    return(
        <>
           <h3>Counter App!!</h3>
           <h4>Count:{work}</h4>
           <button onClick={()=>{dispatch(Increment())}}>Increment</button>
           <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>
        </>
    )
}
export default ToolKit;