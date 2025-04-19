
import axios from "axios";
import { useState} from "react";
import Table from 'react-bootstrap/Table';


const Search=()=>{
    const [rollno,setRollno]=useState("");
    const [myData,setMydata]=useState([]);
    const handleSearch=async()=>{
        let api=`http://localhost:3000/Info/?rollno=${rollno}`
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
                <td>{key.rollno}</td>
                <td>{key.subject}</td>
                <td>{key.university}</td>
            </tr>
            </>
        )
    })


    return(
        <>
         <h1>Serach Page!!</h1>
         Enter Roll no: <input type="text" value={rollno}  
         onChange={(e)=>{setRollno(e.target.value)}}/>
         <button onClick={handleSearch}>Search</button>
         <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sno</th>
          <th>Name of student</th>
          <th>Rollno of student</th>
          <th>Subject of student</th>
          <th>University of student</th>
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