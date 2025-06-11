
import axios from "axios";
import { useState} from "react";
const Search=()=>{
    const[val,setVal]=useState("");
    const[mydata,setMydata]=useState([])
    const handleSubmit=async()=>{
        let api=`http://localhost:3000/students/?rollno=${val}`
        const response=await axios.get(api);
      setMydata(response.data);
      console.log(response.data);
    }
    let sno=0;
    const show=mydata.map((key)=>{
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
        <h1>Serach data!!</h1>
        Enter Rollno: <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/><br/><br/>
        <button onClick={handleSubmit}>Search</button>
        <hr />
        <table border="1" width="500px">
            <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Rollno</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {show}
        </table>


        </>
    )
}
export default Search;