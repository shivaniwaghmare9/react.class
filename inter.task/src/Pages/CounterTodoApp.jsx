
import { useSelector,useDispatch } from "react-redux";
import { Increment,Decrement } from "../CounterSlice";
const CounterTodo=()=>{
    const data=useSelector(state=>state.mycounter.count)
    const dispatch=useDispatch();
    return(
        <>
          <div>
            <h3>Counter App!!!</h3>
            <h4>count:{data}</h4>
            <button onClick={()=>{dispatch(Increment())}}>Increment</button>
            <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>
          </div>   
        </>
    )
}
export default CounterTodo;