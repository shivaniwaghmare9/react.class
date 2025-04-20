
import axios from "axios";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
const Search=()=>{
    const[name,setName]=useState("");
    const[myData,setMydata]=useState([]);
    const handleSubmit=async()=>{
        let api=`http://localhost:3000/record/?name=${name}`;
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    }
    let sno=0;
    const Record=myData.map((key)=>{
        sno++;
        return(
            <>
             <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.age}</td>
                <td>{key.city}</td>
                <td>{key.course}</td>
             </tr>
            </>
        )
    })
    return(
        <>
          <h1>Search Page!!!</h1>
          Enter Name: <input type="text" value={name}  
          onChange={(e)=>{setName(e.target.value)}}/>
          <button onClick={handleSubmit}>Search</button>
          <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        {Record}
      </tbody>
      </Table>
        </>
    )
}
export default Search;