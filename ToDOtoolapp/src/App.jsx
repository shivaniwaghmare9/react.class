import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./counterSlice";
const App=()=>{
  const data=useSelector(state=>state.mycounter.count);
  const dispatch=useDispatch();
  return(
    <>
     <h1>Welcome to ToDo App</h1>
     <button onClick={()=>{dispatch(increment())}}>Increment</button>
     <h1> {data}</h1>
     <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </>
  )
}
export default App;