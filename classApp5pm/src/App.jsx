

import UnAuth from "./UnAuth";
import { useContext } from "react";
import { MyContext } from "./Logincontext";
import Auth from "./Auth";
const App=()=>{
    const{user}=useContext(MyContext)
    return(
        <>
        <h1>App!!</h1>
        {user.auth ? <Auth/>:<UnAuth/> }
        </>
    )
}
export default App;