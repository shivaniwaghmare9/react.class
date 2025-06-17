
import { useState } from "react";
const App=()=>{
  const[coin,setCoin]=useState("Heads");
  const[flipcount,setFlipcount]=useState(0);
  const[heads,setHeads]=useState(0);
  const[tails,setTails]=useState(0);
  const flipCoin=()=>{
    const flip=Math.random()< 0.5 ?"Heads":"Tails";
    setCoin(flip);
    setFlipcount(flipcount+1)
    if(flip=="Heads")
    {
      setHeads(heads+1);
    }
    else{
      setTails(tails+1)
    }
  }
  return(
    <>
    <div>
      <h1>Flip Coin</h1>
      <div style={{width:"100px",height:"100px",border:"1px solid black" ,padding:"1rem",borderRadius:"100%"}}>
        <h3>{coin}</h3>
        
      </div>
      <div>
        <h4>FliCount:{flipcount}</h4>
        <h4>HeadsCount:{heads}</h4>
        <h4>Tails Count:{tai}</h4>

      </div>
      <button onClick={flipCoin}>Click</button>
    </div>
    </>
  )
}
export default App;