


// const App=()=>{
//   const myname=(nm)=>{              //parameter
//     alert("Hello i am "+ nm + " From Bhopal")
//   }
//   // function Display(){
//   //   alert("Welcome to react Events!!")
//   // }
//   return(
//     <>
//      <h1>Welcome To Event App</h1>
//      {/* <button onClick={Display}>Click Here</button> */}
//      <button onClick={()=>{myname("Shivani")}}>Click Here</button>
//     </>
//   )
// }
// export default App;

//===============================================PARAMETER================================================================================================

// const App=()=>{
//   const myname=(nm)=>{              //parameter
//     alert("Hello i am "+ nm + " From Bhopal")
//   }
  
//   return(
//     <>
//      <h1>Welcome To Event App</h1>

//      <button onClick={()=>{myname("Shivani")}}>Click Here</button>
//     </>
//   )
// }
// export default App;
//==============================================(double parameter)=======================================================================================

// const App=()=>{
//   const MyName=(nm,frm)=>{              //parameter
//     alert(`Welcome ${frm} ${nm} we are from bhopal`)
//   }
  
//   return(
//     <>
//      <h1>Welcome To Event App</h1>

//      <button onClick={()=>{MyName("Shivani","Waghmare")}}>Click Here</button>
//     </>
//   )
// }
// export default App;

//=====================================================================================================================================================

// const App=()=>{
//  const Display=()=>{
//   // alert(`Welcome`)
//   console.log(e.type)
//  }
  
//   return(
//     <>
//      <h3>Welcome To Event App</h3>

//      <button onClick={Display}>Click Here</button>
//     </>
//   )
// }
// export default App;
//=============================================================================================================================

// const App=()=>{
//  const MyName=(nm,e)=>{
//   alert(`Myname:  ${nm} Type: ${e.type}`)
//  }
  
//   return(
//     <>
//      <h3>Welcome To Event App</h3>

//      <button onClick={(e)=>{MyName("Shivani",e)}}>Click Here</button>
//     </>
//   )
// }
// export default App;

//=====================================================================================================================

// const App=()=>{
//  const display=(e)=>{
//   let nm=e.target.name;
//   let val=e.target.value;
//   alert(`Name: ${nm} Value: ${val}`);
//  }
  
//   return(
//     <>
//      <h3>Welcome To Event App</h3>

//      <button name="Mybtn1" value="BTNval" onClick={display}>Click Here</button>
//     </>
//   )
// }
// export default App;
//====================================================================================================================================================================

// const App=()=>{
//  const handleInput=(e)=>{
//   let name=e.target.name;
//   let value=e.target.value;
//   console.log(name,value)
  
//  }
  
//   return(
//     <>
//      <h3>Welcome To Event App!!!</h3>
//      Enter City: <input type="text"  name="myCity" value="Bhopal" onChange={handleInput}/>
//     </>
//   )
// }
// export default App;
//================================================================================================================================

const App=()=>{
 const handleInput=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  console.log({[name]:value})
  
 }
  
  return(
    <>
     <h3>Welcome To Event App!!!</h3>
     Enter City: <input type="text"  name="city" value="Indore" onChange={handleInput}/>
    </>
  )
}
export default App;