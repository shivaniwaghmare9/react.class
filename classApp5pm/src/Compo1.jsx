
import Compo2 from "./Compo2";
const Compo1=({user})=>{
    return(
        <>
        <h1>Componente-1</h1>
        <Compo2 user={user}/>
        </>
    )
}
export default Compo1;