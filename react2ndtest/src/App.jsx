
// import FlipCoin from "./FlipCoin";
// const App=()=>{
//    return (
//     <>
//     <FlipCoin/>
//     </>
//   );
// }

// export default App;
//========================================================================FROM TOOLKIT=========================================================================
import { useSelector,useDispatch } from "react-redux";
import { flipcoin } from "./coinSlice";
const App=()=>{
  const {coin,count,headscount,tailscount}=useSelector((state)=>state.mycoin);
  const dispatch=useDispatch();
  return(
    <>
     <div id="div">
         <h1>Flip Coin!!</h1>
      <div className="box">
         <p>{coin}</p>
      </div>
      <div className="counter">
         <h3 id="add">FlipCount :{count}</h3>
         <h3 id="heads">Heads Count : {headscount}</h3>
         <h3 id="tails">tails Count :{tailscount}</h3>
      </div>
      <button onClick={()=>{dispatch(flipcoin())}} id="btn">Flip me!!</button>

     </div>
    </>
  )
}
export default App;

