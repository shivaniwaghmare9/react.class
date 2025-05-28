import { useState } from "react";
const RollDice=()=>{
    const [dice1, setDice1] = useState(1);
      const [dice2, setDice2] = useState(1);
    
      const rollDice = () => {
        setDice1(Math.floor(Math.random() * 6) + 1);
        setDice2(Math.floor(Math.random() * 6) + 1);
    let box1=document.querySelector("#circle1")
    let box2=document.querySelector("#circle2")
    let box3=document.querySelector("#circle3")
    let box4=document.querySelector("#circle4")
    let box5=document.querySelector("#circle5")
    let box6=document.querySelector("#circle6")

    if(dice1==1){
        box1.style.opacity="1";
        box2.style.opacity="0";
        box3.style.opacity="0";
        box4.style.opacity="0";
        box5.style.opacity="0";
        box6.style.opacity="0";
    }
    else if(dice1==2){
        box1.style.opacity="0";
        box2.style.opacity="1";
        box3.style.opacity="0";
        box4.style.opacity="0";
        box5.style.opacity="0";
        box6.style.opacity="0";
    }
    else if(dice1==3){
        box1.style.opacity="0";
        box2.style.opacity="0";
        box3.style.opacity="1";
        box4.style.opacity="0";
        box5.style.opacity="0";
        box6.style.opacity="0";
    }
    else if(dice1==4){
         box1.style.opacity="0";
         box2.style.opacity="0";
         box3.style.opacity="0";
         box4.style.opacity="1";
         box5.style.opacity="0";
         box6.style.opacity="0";
     }
     else if(dice1==5){
         box1.style.opacity="0";
         box2.style.opacity="0";
         box3.style.opacity="0";
         box4.style.opacity="0";
         box5.style.opacity="1";
         box6.style.opacity="0";
     }
     else if(dice1==6){
         box1.style.opacity="0";
         box2.style.opacity="0";
         box3.style.opacity="0";
         box4.style.opacity="0";
         box5.style.opacity="0";
         box6.style.opacity="1";
     }
    // let box1=document.querySelector("#circle1")
    // let box2=document.querySelector("#circle2")
    // let box3=document.querySelector("#circle3")
    // let box4=document.querySelector("#circle4")
    // let box5=document.querySelector("#circle5")
    // let box6=document.querySelector("#circle6")

    if(dice2==1){
        box1.style.opacity="1";
        box2.style.opacity="0";
        box3.style.opacity="0";
        box4.style.opacity="0";
        box5.style.opacity="0";
        box6.style.opacity="0";
    }
    else if(dice2==2){
        box1.style.opacity="0";
        box2.style.opacity="1";
        box3.style.opacity="0";
        box4.style.opacity="0";
        box5.style.opacity="0";
        box6.style.opacity="0";
    }
    else if(dice2==3){
        box1.style.opacity="0";
        box2.style.opacity="0";
        box3.style.opacity="1";
        box4.style.opacity="0";
        box5.style.opacity="0";
        box6.style.opacity="0";
    }
    else if(dice2==4){
        box1.style.opacity="0";
         box2.style.opacity="0";
         box3.style.opacity="0";
         box4.style.opacity="1";
         box5.style.opacity="0";
         box6.style.opacity="0";
     }
     else if(dice2==5){
         box1.style.opacity="0";
         box2.style.opacity="0";
         box3.style.opacity="0";
         box4.style.opacity="0";
         box5.style.opacity="1";
         box6.style.opacity="0";
     }
     else if(dice2==6){
         box1.style.opacity="0";
         box2.style.opacity="0";
         box3.style.opacity="0";
         box4.style.opacity="0";
         box5.style.opacity="0";
         box6.style.opacity="1";
     }

};
    return(
        <>
           <h1>Roll <span>Dice</span> </h1>
    <div id="roll">
    <div id="circle">
        <div id="circle1">
            <div></div>
        </div>
        <div id="circle2">
            <div></div>
            <div></div>
        </div>
        <div id="circle3">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div  id="circle4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div  id="circle5">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div  id="circle6">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

    <h1>Roll <span>Dice</span> </h1>
        
    <div id="circle">
        <div id="circle1">
            <div></div>
        </div>
        <div id="circle2">
            <div></div>
            <div></div>
        </div>
        <div id="circle3">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div  id="circle4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div  id="circle5">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div  id="circle6">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <button onClick={rollDice}>Roll Dice</button>
    </div> 
        </>
    )
}
export default RollDice;