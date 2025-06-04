
import { useSelector,useDispatch } from "react-redux";
import { Increment,Decrement } from "../CounterSlice";
const CounterTodo=()=>{
    const data=useSelector(state=>state.mycounter.count)
    return(
        <>
          <div>
            <h3>Counter App!!!</h3>
          </div>
        </>
    )
}
export default CounterTodo;