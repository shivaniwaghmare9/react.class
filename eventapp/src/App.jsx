
//================================================PARAMETER======================================================================
// const Ctt=()=>{
//   const display=(nm)=>{
//     alert(`my name is  ${nm}`);
//   }
//   return(
//     <>
//       <h1>Welcome</h1>
//       <button onClick={()=>{display("shivani")}}>Click Here</button>
//     </>
//   )
// }
// export default Ctt;

//===================================================WORK====================================================================
// const App=()=>{
//   const show=(nm)=>{
//         alert(`My Name is ${nm}!!!`);
//   }
//   return(
//     <>
//     <h1>WelCome</h1>
//      <button onClick={()=>show("shivani")}>Click Me </button>
//     </>
//   )
// }
// export default App;

//=================================================NON-PARAMETER[WORK]==================================================================================
// const App=()=>{
//   const show=()=>{
//         alert("This Is Our React Class!!!");
//   }
//   return(
//     <>
//     <h1>WelCome</h1>
//      <button onClick={show}>Click Me </button>
//     </>
//   )
// }
// export default App;
//=======================================================NON-PARAMETER=================================================

// const Ctt=()=>{
//   const display=()=>{
//     alert("this is our react class");
//   }
//   return(
//     <>
//       <h1>Welcome</h1>
//       <button onClick={display}>Click Here</button>
//     </>
//   )
// }
// export default Ctt;

//==============================================EVENT-HANDLER=============================================================================

// const Ctt=()=>{
//   const display=(e)=>{
//     // alert(e.type);    //click-Output
//     // alert(e);      //object object-Output
//     // console.log(e);
//     alert("Type:"+e.type+ "Name:"+e.target.name+ "Value:"+e.target.value);
//   }
//   return(
//     <>
//       {/* <h1>Welcome</h1> */}
//       <button name="btn" value="mybtn" onClick={display}>Click Here</button>
//     </>
//   )
// }
// export default Ctt;
//===========================================WORK-EVENT(HANDLER)======================================================================================
// const App=()=>{
//    const display=(e)=>{
//     // alert(e.type);
//     //alert(e);
//     alert("Type: "+e.type+ " Name: "+e.target.name+" Value: "+e.target.value)
// }
// return(
//     <>
//        <h1>Wlcome!!!</h1>
//        <button name="BTN" value="myBTN" onClick={display}>Click Me</button>
//     </>
//   )
// }
// export default App;
//==============================================================================================================================================
// const App=()=>{
//   const myshow=(e)=>{
  //console.log(e.name);
  //console.log(e.value);
  //console.log(e.type);


//   }
//   return(
//     <>
//     Enter Name<input  name="Btn" value="Mybtn" onClick={myshow}/>
//     </>
//   )
// }
// export default App;
//===========================================================================================================================
// const App=()=>{

//   const display=(nm,e)=>{
//     alert("Name: "+nm+ " BtnName: "+e.target.name+ " Value: "+e.target.value);
//   }
//   return(
//     <>
//       <button name="myBtn" value="btn0" onClick={(e)=>{display("shivani",e)}}>Click Here</button>
//     </>
//   )
// }
// export default App;
//=======================================[WORK]============================================================================================
// const App=()=>{
     
//        const display=(nm,e)=>{

//         alert("Name: "+nm+ " Btnname: "+e.target.name+" Value: "+e.target.value);
// }
//   return(
//     <>
//     <h1>WelCome</h1>
//     <button name="BTN1" value="Mybtn" onClick={(e)=>{display("shivani",e)}}>Click Me</button>
//     </>
//   )
// }
// export default App;

//==========================================work(-08-04-2025)=========================================================================================================

// const App=()=>{
//   const show=()=>{
//     alert("this our react class");
//   }

//   return(
//     <>
//       <h2>Welcome to our world </h2>
//       <button onClick={show}>Click me</button>
//     </>
//   )
// }
// export default App;

//===========================================================================================================================================

// const App=()=>{
//   const show=(nm)=>{
//     alert(`Hello I'M ${nm}`)
//   }
//   return(
//     <>
//     <h2>Welcome to event class</h2>
//     <button onClick={()=>{show("shivani")}}>Click</button>

//     </>
//   )
// }
// export default App;

//===============================================================================================================================================

// const App=()=>{
//   const show=(e)=>{
//     alert("Type: "+e.type+" Name: "+e.target.name+" Value: "+e.target.value)
//   }
//   return(
//     <>
//      <h1>Welcome to event</h1>
//      <button name="Btn" value="mybtn"onClick={show}>click</button>
//     </>
//   )
// }
// export default App;

//====================================================================================================================

const App=()=>{
  const show=(nm,e)=>{
    alert("Type: "+e.type+" Name: "+nm+ " BtnName: "+e.target.name+" Value: "+e.target.value)
  }
  return(
    <>
     <h1>Welcome to event</h1>
     <button name="Btn" value="mybtn"onClick={(e)=>{show("shivani",e)}}>click</button>
    </>
  )
}
export default App;