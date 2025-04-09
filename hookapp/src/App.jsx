
//=============================================USESTATE-SETNAME(07-04-2025)=========================================================================
// import { useState } from "react";

// const App=()=>{
//   const [name,setName]=useState("Riya")
//   return(
//     <>
//      <h1>Welcome to my App {name}</h1>
//      <button onClick={()=>{setName("Shivani")}}>Submit</button>

//     </>
//   )
// }
// export default App;
//=================================================USESTATE-SETCOLOR==============================================================================
// import { useState } from "react";

// const App=()=>{
//   const [color,setColor]=useState("red")
//   return(
//     <>
//      <h1 style={{color:color}}>My favouriet color is :{color}</h1>
//      <button onClick={()=>{setColor("green")}}>green color</button>
//      <button onClick={()=>{setColor("blue")}}>blue color </button>
//      <button onClick={()=>{setColor("orange")}}>orange color</button>
//      <button onClick={()=>{setColor("black")}}>balck color</button>

//     </>
//   )
// }
// export default App;

//==========================================COUNTER APP=========================================================================
// import { useState } from "react";

// const App=()=>{
//   const [cnt,setCnt]=useState(0);

//  const myDec=()=>{
//   if(cnt<=0)
//   {
//     alert("Not Less than 0.")
//   }
//   else{
//     setCnt(cnt-1)
//   }
 //}
//   return(
//     <>
//     <h1 align="center">My Counter App</h1>
//        <div style={{border:"2px solid black",padding:"20px",borderRadius:"30px",backgroundColor:"grey",width:"300px",margin:"auto" }}>

//           <h1>my count:{cnt}</h1>
//           <button onClick={()=>{setCnt(cnt+1)}} id="btn1">Increment</button>
//          <button onClick={myDec} id="btn2">Decrement</button>
//          <button onClick={()=>{setCnt(0)}} id="btn3">Reset</button>
//       </div>
//     </>
//   )
// }
// export default App;


//==============================================COUNT(USEEFFECT)========================================================================================

// import { useState, useEffect } from "react";

// const App=()=>{
//   const [count,setCount]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(count+1)
//     },4000)
//   })
//   return(
//     <>
//   <h1>Welcome:{count}</h1>
//   <button>Click Me</button>
//     </>
//   )
// }
// export default App;



//============================================(HOOK)USESTATE-WORK-IN-HOME=========================================================================================================
// import {useState} from "react";
// const App=()=>{
//   const [name,setName]=useState("Drishti");
//   return(
//     <>
//     <h1>Welcome To My World {name}</h1>
//     <button onClick={()=>{setName("Shivani")}}>Click me</button>
//     </>
//   )
// }
// export default App;
//===================================================COLOR=========================================================================================
// import {useState} from "react";
// const App=()=>{
//   const [color,setColor]=useState("red");
//   return(
//     <>
//     <h1 style={{color:color}}>Welcome To My World {color}</h1>
//     <button onClick={()=>{setColor("orange")}}>Click me</button>
//     <button onClick={()=>{setColor("green")}}>green color</button>
//     <button onClick={()=>{setColor("blue")}}>blue color</button>
//     <button onClick={()=>{setColor("yellow")}}>yellow color</button>
//     </>
//   )
// }
// export default App;

//================================================================================================================================================
// import { useState } from "react";
// const App=()=>{
//   const[cnt,setCnt]=useState(0);
//   const Dec=()=>{
//     if(cnt<=0)
//     {
//       alert("count less than 0.");
//     }
//     else
//     {
//       setCnt(cnt-1);
//     }
//   }
//   return(
//     <>
//     <h1 align="center">My Counter App</h1>
//     <div id="box1">
//       <h2>Count:{cnt}</h2>
//       <button onClick={()=>{setCnt(cnt+1)}} id="Btn1">Increment</button>
//       <button onClick={Dec} id="Btn2">Decrement</button>
//       <button onClick={()=>{setCnt(0)}} id="Btn3">Reset</button>
 
//     </div>
//     </>
//   )
// }
// export default App;

//==============================================[USEEFFECTS]=================================================================================================
// import {useState,useEffect} from "react";
// const App=()=>{

//   const[count, setCount]=useState(0);
//   useEffect(()=>{
//     setCount(count+1)
//   })

//  return(
//     <>
//        <h1>Welcome Count:{count}</h1>
       
//     </>
//   )
// }
// export default App;

//==============================================USEEFFECT+SETTIMEOUT=============================================================================

// import {useState,useEffect} from "react";
// const App=()=>{
//   const [count,setcount]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setcount(count+1)
//     },2000)
    
//   })
//   return(
//     <>
//       <h1>Welocme to counting:{count}</h1>
//     </>
//   )
// }
// export  default App;

//===========================================08-04-2025(work-in-home)==================================================================================================
// import { useState,useEffect } from "react";

// const App=()=>{
//   const [count,setCount]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(count+1);
//     },2000)
   
//   })
//   return(
//     <>
//      <h2>Welcome To:{count}</h2>
//     </>
//   )
// }
// export default App;
//======================================================================================================================================
// import { useState } from "react";
// // import { Button } from "bootstrap";

// const App=()=>{
//   const[count,setCount]=useState(0);
//   const Dec=()=>{
//     if(count<=0)
//     {
//       alert("count less than 0.");
//     }
//     else{
//       setCount(count-1);
//     }
//   }
//   return(
//     <>
//     <h1 align="center">My Counter App</h1>
//     <div id="box2">
//        <h2>Count:{count}</h2>
//        <button onClick={()=>{setCount(count+1)}}>Increment</button>
//        <button onClick={Dec}>Decrement</button>
//        <button onClick={()=>{setCount(0)}}>Reset</button>

//     </div>
//     </>
//   )
// }
// export default App;
//===========================================================================================================================
// import { useState } from "react";
// const App=()=>{
//   const[name,setName]=useState("jiyaa");

//   return(
//     <>
//       <h2>Welcome to our world {name}</h2>
//       <button onClick={()=>{setName("Shivani")}}>Click me</button>
//     </>
//   )
// }
// export default App;


//=============================================(08-04-2025=class)(useeffect(1))=====================================================================
// import { useState,useEffect } from "react";
// const App=()=>{
//   const[count,setCount]=useState(0);
//   useEffect(()=>{
//   setTimeout(() => {
//      setCount(count+1);
//   }, 5000);
//   })

//   return(
//     <>
//      <h2>react example to:{count}</h2>
//      
//     </>
//   )
// }
// export default App;
//========================================================(useeffect(2-empty-array))======================================================
// import { useState,useEffect } from "react";
// const App=()=>{
//   const[count,setCount]=useState(0);
//   useEffect(()=>{
//   setTimeout(() => {
//      setCount(count+1);
//   }, 5000);
//   },[])

//   return(
//     <>
//      <h2>react example to:{count}</h2>
    
//     </>
//   )
// }
// export default App;

//=====================================================(useeffect(3)jb-first-me change-ho tbhi second me changes ho )=====================================================================

// import { useState,useEffect } from "react";
// const App=()=>{
//   const[count,setCount]=useState(0);
//   const[multi,setMulti]=useState(0);
  

//   useEffect(()=>{
//     setMulti(count*2)
//   },[count])

//   return(
//     <>
//      <h2>My Counter:{count}</h2>
//      <h3>Multiplication:{multi}</h3>
//      <button onClick={()=>{setCount(count+1)}}>Click Here</button>
    
//     </>
//   )
// }
// export default App;

//================================================FORM======================================================================

// import { useState } from "react";
// const App=()=>{
//   const[name,setName]=useState("");
// const[city,setCity]=useState("");

// const handleSubmit=()=>{
//   alert(`Name: ${name} City: ${city}`)
// }
//   return(
//     <>

//     <h2>Application Form</h2>
//     name: <input type="text" value={name}
//     onChange={(e)=>{setName(e.target.value)}} />
//     <br/><br/>
//     city: <input type="text" value={city}
//     onChange={(e)=>{setCity(e.target.value)}} />

//     <button onClick={handleSubmit}>Submit</button>
//     </>
//   )
// }
// export default App;


//================================================FORM(use-spreadoprator)==============================================================================
// import { useState } from "react";
// const App=()=>{
//   const[input,setInput]=useState({});
//   const handleInput=(e)=>{
//     let name=e.target.name;
//     let value=e.target.value;

//      setInput(values=>({...values,[name]:value}))
//      console.log(input);
// }
//   return(
//     <>
//       <h2>Application form</h2>
//         Rollno:<input type="text"  name="rollno" onChange={handleInput}/><br/><br/>
//       Name:<input type="text"  name="name" onChange={handleInput}/><br/><br/>
//        City:<input type="text"  name="city" onChange={handleInput}/><br/><br/>
//       Fees:<input type="text"  name="fees" onChange={handleInput}/><br/><br/>
//       <button onClick={handleInput}>Submit</button>

//     </>
//   )
  
// }
// export default App; 

//================================================WORK-IN-HOME(08-04-2025(NIGHT)USESTATE)==========================================================================================
// import { useState } from "react";
// const App=()=>{
//   const[count,setCount]=useState(0);
//   const Dec=()=>{
//     if(count<=0)
//     {
//       alert("count less than 0.");
//     }
//     else{
//       setCount(count-1);
//     }
//   }

//   return(
//     <>
//       <h2>My Counter:{count}</h2>
//       <button onClick={()=>{setCount(count+1)}}>Increment</button>
//       <button onClick={Dec}>Decrement</button>
//       <button onClick={()=>{setCount(0)}}>Reset</button>

//     </>
//   )
// }
// export default App;
//=================================================(USESTATE-USEEFFECT(1))============================================================================================


// import { useEffect, useState } from "react";
// const App=()=>{
//   const[count,setCount]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(count+1);
//     },3000  )
    
//   })
//   return(
//     <>
//     <h2>My Count:{count}</h2>
//     </>
//   )
// }
// export default App;

//===================================================(USESTATE-USEEFFECT(2-an empty array))==================================================================================
// import { useEffect, useState } from "react";
// const App=()=>{
//   const[count,setCount]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(count+1);
//     },3000  )
    
//   },[])
//   return(
//     <>
//     <h2>My Count:{count}</h2>
//     </>
//   )
// }
// export default App;

//=================================================(useeffect(3)first me change ho tbhhi second me chnage ho)=======================================================================================

// import { useEffect, useState } from "react";

// const App=()=>{
//   const[count,setCount]=useState(0);
//   const[multi,setMulti]=useState(0);

//   useEffect(()=>{
//     setMulti(count*2)
//   },[count])

//   return(
//     <>
//      <h2>My count:{count}</h2>
//      <h3>Multiplication:{multi}</h3>
//      <button onClick={()=>{setCount(count+1)}}>Click</button>
     
//     </>
//   )
// }
// export default App;
//===========================================(09-04-2025)======================================================================================

import { useState } from "react";
import axios from "axios";
const App=()=>{
  const[input,setInput]=useState({});
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

     setInput(values=>({...values,[name]:value}))
     console.log(input);
}

const handleSubmit=async()=>{
      let api="http://localhost:3000/data";
      const response=await axios.post(api,input);
      alert("Data successfully save!!!");
}
  return(
    <>
      <h2>Application form</h2>
      Enter  Rollno:<input type="text"  name="rollno"
       onChange={handleInput}/><br/><br/>
      Enter  Name:<input type="text"  name="name" 
      onChange={handleInput}/><br/><br/>
      Enter  City:<input type="text"  name="city" 
      onChange={handleInput}/><br/><br/>
      Enter  Fees:<input type="text"  name="fees" 
      onChange={handleInput}/><br/><br/>
      <button onClick={handleSubmit}>Save!!!</button>

    </>
  )
}
export default App;