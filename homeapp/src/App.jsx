
import { useState } from "react";
const App=()=>{
  const[coin,setCoin]=useState("Heads");
  const[flipcount,setFlipcount]=useState(0);
  const[heads,setHeads]=useState(0);
  const[tails,setTails]=useState(0);
  const flipCoin=()=>{
    const flip=Math.random()< 0.5 ?"Hedas":"Tails"
  }
  return(
    <>
    <div>
      <h1>Flip Coin</h1>
      <div style={{width:"100px",height:"100px",border:"1px solid black" ,padding:"1rem",borderRadius:"100%"}}>
        <h3>{coin}</h3>
        <button onClick={flipCoin}>Click</button>
      </div>
    </div>
    </>
  )
}
export default App;