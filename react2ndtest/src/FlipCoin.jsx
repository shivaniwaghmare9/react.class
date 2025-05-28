
import { useState } from "react";
// import img1 from "./coin.jpg";
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
        <div id="div">
          <h1>COIN FLIP TASK!! </h1>
          <div className="box">
          <h3> {coin}</h3>
          </div>
          <div className="counter">
          <h3 id="add">Flip Coin Count : {flipcount}</h3>
          <h3 id="heads">Counting of Heads :{heads}</h3>
          <h3 id="tails">Counting of Tails : {tails}</h3>
          </div>
          <button onClick={flipcoin} id="btn">Flip Me!!</button>
        </div>
          
        </>
    )
}
export default FlipCoin;