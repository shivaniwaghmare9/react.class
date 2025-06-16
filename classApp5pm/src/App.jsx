

import UnAuth from "./UnAuth";
import { useContext } from "react";
import { MyContext } from "./Logincontext";
import Auth from "./Auth";
const App=()=>{
    const{name}=useContext(MyContext)
    return(
        <>
        <h1>App!!</h1>
        {name.auth ? <Auth/>:<UnAuth/> }
        </>
    )
}
export default App;