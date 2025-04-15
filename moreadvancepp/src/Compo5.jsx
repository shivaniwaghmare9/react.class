


// const Compo5=({user})=>{
//     return(
//         <>
//          <h1>Component-5</h1>
//          <h1>Welcome {user}</h1>
//         </>
//     )
// }
// export default Compo5;

import { useContext } from "react";
import {myContext} from "./App";


const Compo5=()=>{
    const{user,setUser}=useContext(myContext);
    return(
        <>
         <h1>Component-5</h1>
         <h1>Welcome {user}</h1>
         <button onClick={()=>{setUser("ram")}}>Click Here</button>
        </>
    )
}
export default Compo5;