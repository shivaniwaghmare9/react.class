
import Compo2 from "./Compo2";

const Compo1=({user})=>{
    return(
        <>
         <h3>Components-1</h3>
         <Compo2 user={user}/>
        </>
    )
}
export default Compo1;