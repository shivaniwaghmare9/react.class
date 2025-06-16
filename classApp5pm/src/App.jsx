import EmpData from "./EmpData";
import Design from "./EmpDesign";
const App=()=>{
    const ans=EmpData.map((key)=>{
        return(
            <>
            <Design
        nm={key.name}
        roll={key.rollno}
        ct={key.city}
        fee={key.fees}/>
            </>
        )
    })
    return(
        <>
         <h1>data!!</h1>
         <table border="1" width="500px">
            <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Rollno</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
         </table>
        </>
    )}

export default App;