
import axios from "axios";
import { useState,useEffect } from "react";
const Home=()=>{
    const[mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:3000/attendence";
        const response=await axios.get(api);
        setMydata(response.data);
        console(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])
    let sno=0;
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
             <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.designation}</td>
                <td>{key.department}</td>
                <td>{key.salary}</td>
             </tr>
            </>
        )
    })
    return(
        <>
       <h3>Display data!!</h3>
         <table border="1" width="500px" cellPadding="10px" cellSpacing="15px">
            <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Designation</th>
                <th>DepartMent</th>
                <th>Salary</th>
            </tr>
            {ans}
         </table>
        </>
    )
}
export default Home;