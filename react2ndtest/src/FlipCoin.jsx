
import { useState } from "react";
const FlipCoin=()=>{
    const [coin,setCoin]=useState("Heads");
    const [flipcount,setFlipcount]=useState(0);
     const[heads,setHeads]=useState(0);
    const[tails,setTails]=useState(0);
   

   const flipcoin=()=>{
        const flip = Math.random() < 0.5 ? "Heads" : "Tails";
        setCoin(flip);
        setFlipcount(flipcount+1)
        if(flip === "Heads")
        {
            setHeads(heads+1);
        }
        else
        {
           setTails(tails+1);
        }
   }

    return(
        <>
        <div>
          <h1>COIN FLIP TASK!! </h1>
          <h2>Start: {coin}</h2>
          <h2>Flip Coin Count : {flipcount}</h2>
          <h2>Counting of Heads :{heads}</h2>
          <h2>Counting of Tails : {tails}</h2>
          <button onClick={flipcoin}>Flip Me!!</button>
        </div>
          
        </>
    )
}
export default FlipCoin;