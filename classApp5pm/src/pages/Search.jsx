
import axios from "axios";
import { useState } from "react";
const Search=()=>{
    const[name,setName]=useState("");
    const[mydata,setMydata]=useState([]);

    const handleSearch=async()=>{
        let api=`http://localhost:3000/record/?name=${name}`;
        const response=await axios.get(api);
    }
    let sno=0;
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
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
         <h1>Search Data!!!</h1>
         Enter Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
         <button onClick={handleSearch}>Search</button><br/><br/>
         <table>
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
    )
}
export default Search