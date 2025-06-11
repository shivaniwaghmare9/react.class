
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Update=()=>{
    const [mydata,setMydata]=useState([]);
    const navigate=useNavigate();
    const loadData=async()=>{
        let api="http://localhost:3000/students"
        const response=await axios.get(api);
        setMydata(response.data);
        console.log(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])
    const dataDelete=async(id)=>{
        let api=`http://localhost:3000/students/${id}`;
        const response=await axios.delete(api,mydata);
        alert("data successfully deleted")
        loadData();
    }
    const myEdit=(id)=>{
        navigate(`/edit/${id}`)
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
                <td>
                    <button onClick={()=>{myEdit(key.id)}}>edit</button>
                </td>
                <td>
                    <button onClick={()=>{dataDelete(key.id)}}>delete</button>
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
         <table border="1" width="500px">
            <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Rollno</th>
                <th>City</th>
                <th>Fees</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            {show}
         </table>
        </>
    )
}
export default Update;