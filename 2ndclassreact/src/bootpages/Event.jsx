

//====================================================(Events [02/06/2025])==============================================================================
//===================================function===========================================================
const Event=()=>{
  const show=()=>{
    alert("This Is our Event App")
  }
  return(
    <>
     <h3>Welcome To Events App!!!</h3>
     <button onClick={show}>Click here</button>
    </>
  )
}
export default Event;
//=======================================event with parameter(single parameter)=============================================================================================================

// const Event=()=>{
//   const show=(nm)=>{
//     alert(`my name is ${nm} This Is our Event App`)
//   }
//   return(
//     <>
//      <h3>Welcome To Events App!!!</h3>
//      <button onClick={()=>{show("Shivani")}}>Click here</button>
//     </>
//   )
// }
// export default Event;
// =================================double parameter======================================================================

// const Event=()=>{
//   const show=(nm,srn,frm)=>{
//     alert(`my name is ${nm} ${srn} i am from ${frm} This Is our Event App`)
//   }
//   return(
//     <>
//      <h3>Welcome To Events App!!!</h3>
//      <button onClick={()=>{show("Shivani","waghmare", "Bhopal")}}>Click here</button>
//     </>
//   )
// }
// export default Event;

//===============================================================================================================================================

// const Event=()=>{
//   const display=(nm)=>{
//     alert("Welcome" + nm + " to event App")
//   }
//   return(
//     <>
//      <h3>Welcome!!!</h3>
//      <button onClick={()=>{display("shivani")}}>Click here</button>
//     </>
//   )
// }
// export default Event;
//=============================================================================================================================

// const Event=()=>{
//   const show=(e)=>{
//     console.log(e.type)
//   }
//   return(
//     <>
//       <h3>Event App!!!</h3>
//       <button onClick={show}>Click here</button>
//     </>
//   )
// }
// export default Event;

//======================================================================================================================

// const Event=()=>{
//   const show=(nm,e)=>{
//     alert(`welcome ${nm} Type:${e.type}`)
//   }
//   return(
//     <>
//       <h3>Event App!!!</h3>
//       <button onClick={(e)=>{show("shivani",e)}}>Click here</button>
//     </>
//   )
// }
// export default Event;

//==============================================================================================================================

// const Event=()=>{
//   const show=(e)=>{
//     let nam=e.target.name;
//     let val=e.target.value;
//     alert(`Name: ${nam} Value: ${val} Type:${e.type}`)
//   }
//   return(
//     <>
//       <h3>Event App!!!</h3>
//       <button name="mybtn" value="Btnval" onClick={show}>Click here</button>
//     </>
//   )
// }
// export default Event;

//=======================================================================================================================

// const Event=()=>{
//   const handleInput=(e)=>{
//     let nam=e.target.name;
//     let val=e.target.value;
//     // alert(`Name: ${nam} Value:${val}`)
//     console.log(nam,val)
//   }
//   return(
//     <>
//      <h1> Welcome Events App!!1</h1>
//      Enter city: <input type="text" name="city" value="Pune" onChange={handleInput}/>
//     </>
//   )
// }
// export default Event;

//=======================================================================================================================

// const Event=()=>{
//   const handleInput=(e)=>{
//     let name=e.target.name;
//     let value=e.target.value;
//     console.log({name:value})
//   }
//   return(
//     <>
//      <h1>Welcome Event App!!!</h1>
//      Enter City: <input type="text" name="city" value="Banglore" onChange={handleInput}/>
//     </>
//   )
// }
// export default Event;

//=========================================================================================================================

// const Event=()=>{
//   const handleInput=(e)=>{
//     let name=e.target.name;
//     let value=e.target.value;
//     console.log({[name]:value})
//   }
//   return(
//     <>
//      <h1>Welcome Event App!!!</h1>
//      Enter City: <input type="text" name="city" value="Banglore" onChange={handleInput}/>
//     </>
//   )
// }
// export default Event;
