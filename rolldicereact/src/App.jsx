  
// import  { useState } from 'react';
// const App=()=>{
//   const [dice1, setDice1] = useState(1);
//   const [dice2, setDice2] = useState(1);

//   const rollDice = () => {
//     setDice1(Math.floor(Math.random() * 6) + 1);
//     setDice2(Math.floor(Math.random() * 6) + 1);
//   };

//   return (
//     <div className="container">
//       <h1>Roll Dice</h1>
//       <div className="dice-container">
//         <div className="dice">
//           <p>{dice1}</p>
//         </div>
//         <div className="dice">
//           <p>{dice2}</p>
//         </div>
//       </div>
//       <button className="roll-btn" onClick={rollDice}>Roll Dice</button>
//     </div>
//   );

// }
// export default App;

//===================================================================WITH COMPONENT=====================================================================
// import RollDice from "./componets/RollDice";
// const App=()=>{
//   return(
//     <>
//       <RollDice/>
//     </>
//   )
// }
// export default App;


import React, { useState } from 'react';


function App() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  const rollDice = () => {
    setDice1(Math.floor(Math.random() * 6) + 1);
    setDice2(Math.floor(Math.random() * 6) + 1)
  };

  const getDots = (num) => {
    let dots = [];
    for (let i = 0; i < num; i++) {
      dots.push(<div className="dot"></div>);
    }
    return dots;
  };

  return (
    <div className="container">
      <h1>Roll Dice</h1>
      <div className="dice-container">
        <div className="dice">
          {getDots(dice1)}
        </div>
        <div className="dice">
          {getDots(dice2)}
        </div>
      </div>
      <button className="roll-btn" onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default App;