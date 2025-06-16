import EmpData from "./EmpData";
const App=()=>{
    const ans=EmpData.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.rollno}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            </>
        )
    })
    return(
        <>
         <h1>data!!</h1>
         <table>
            <tr>
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