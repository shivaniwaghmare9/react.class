
import { useSelector,useDispatch } from "react-redux";
import { flipCount } from "./coinSlice";
const App=()=>{
  const {coin,count,headCount,tailCount}=useSelector(state=>state.mycoin)
  const dispatch=useDispatch();
  return(
    <>
      <h1>Flip Coin</h1>
      <div>
        {coin}
      </div>
      <div>
        <h3>FlipCount:{count}</h3>
        <h3>HeadsCount:{headCount}</h3>
        <h3>TailsCount:{tailCount}</h3>
      </div>
      <button onClick={()=>{dispatch(flipCount())}}>Click</button>
    </>
  )
}
export default App;