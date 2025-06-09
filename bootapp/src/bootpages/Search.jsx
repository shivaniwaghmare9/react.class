
import axios from "axios";
import { useState } from "react";
const Search=()=>{
    const[eno,setEno]=useState("");
    const [mydata,setMydata]=useState([]);
    const handleSubmit=async()=>{
        let api=`http://localhost:3000/employee/?empno=${eno}`;
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    let sno=0;
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
             <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.empno}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
             </tr>
            </>
        )
    })
    return(
        <>
        
         <h3>Search Data!!!</h3>
         Enter Empno: <input type="text" value={eno} onChange={(e)=>{setEno(e.target.value)}}/><br/><br/>
         <button onClick={handleSubmit}>Search</button><br/><br/>
        
         <div className="search">
         <table border="1" width="500px">
            <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Empno</th>
                <th>Designation</th>
                <th>Salary</th>
            </tr>
            {ans}
         </table>
         </div>

        </>
    )
}
export default Search;