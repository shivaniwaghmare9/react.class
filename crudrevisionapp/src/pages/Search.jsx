import axios from "axios";
import { useState } from "react"
import Table from 'react-bootstrap/Table';


const Search=()=>{
   const[empno,setEmpno]=useState("");
   const[myData,setMydata]=useState([]);
    const handleSearch=async()=>{
        let api=`http://localhost:3000/cruddata/?empno=${empno}`;
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);

    }
    let sno=0;
    const Record=myData.map((key)=>{
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
            <h2>Welcome to Search!!!</h2>
            Enter Employee Number: <input type="text" value={empno}  onChange={(e)=>{setEmpno(e.target.value)}}/>
            <button onClick={handleSearch}>Search</button><br/><br/>

            <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sno</th>
          <th>Employee Name is:</th>
          <th>Employee Number is:</th>
          <th>Employee Designation is:</th>
          <th>Employee Salary is:</th>
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