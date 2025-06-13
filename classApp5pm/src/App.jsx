
import { useContext } from "react";
import Auth from "./Auth";
import Unauth from "./Unauth";
import { MyContext } from "./LoginContext";
const App=()=>{
    const{user}=useContext(MyContext)
    return(
        <>
        <h1>Login App!!</h1>
         {user.auth ? <Auth/>:<Unauth/>}
        </>
    )
}
export default App;
