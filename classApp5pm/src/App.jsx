
// import { useState,createContext } from "react";
// import Cybrom from "./Cybrom";
// const MyContext=createContext();
// const App=()=>{
//     const[user,setUser]=useState("Shivani")
//     return(
//         <>
//         <h1>Welcome my app: {user}</h1>
//         <button onClick={()=>{setUser("ram")}}>Click Here</button>
//         <MyContext.Provider value={{user,setUser}}>
//            <Cybrom/>
//         </MyContext.Provider>
//         </>
//     )
// }
// export default App;
// export {MyContext};

//=======================================================================================================================
// import Cybrom from "./Cybrom";
// const App=()=>{
  
//     return(
//         <>
//         <h1>Welcome to my app:</h1>
//         <Cybrom>
//             <h2>We learn mern full stack course!!</h2>
//         </Cybrom>
        
//         </>
//     )
// }
// export default App;

//=======================================================================================================================

import Cybrom from "./Cybrom";
const App=()=>{
  
    return(
        <>
        <h1>Welcome to my app:</h1>
        <Cybrom/>
        
        </>
    )
}
export default App;

