
import { useContext } from "react";
import { MyContext } from "./Logincontext";
import Auth from "./Auth";
import Unauth from "./UnAuth";

const App=()=>{
    const{user}=useContext(MyContext)
    return(
        <>
        <h1>Login system!!</h1>
        {user.auth ? <Auth/>: <Unauth/>}
        </>
    )
}
export default App;