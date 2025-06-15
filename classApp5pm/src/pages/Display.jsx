
import axios from "axios";
import { useState,useEffect } from "react";
const Display=()=>{
    const[mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:3000/record";
        const response=await axios.get(api);
        console.log(response.data)
        setMydata(response.data)
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
                <td>{key.rollno}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
             </tr>
            </>
        )
    })
    return(
        <>
        <h1>Display Data!!!</h1><br/><br/>
        <table  border="1" width="500px">
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
export default Display;