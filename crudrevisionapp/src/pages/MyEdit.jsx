
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Edit=()=>{
    const {id}=useParams();
    const[myData,setMydata]=useState([]);
    const loadData=async()=>{
        let api=`http://localhost:3000/cruddata/${id}`;
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setMydata(values=>({...values,[name]:value}))
        console.log(myData)
    }

    const handleSubmit=async()=>{      //(e)
        // e.prevenDefault();
        let api=`http://localhost:3000/cruddata/${id}`;
        const response=await axios.put(api,myData);
        toast.info("data succesfully updated",{
            position: "bottom-right"
         }
     );
    }
    return(
        <>
         <h1>Edited Employee Information!!!</h1>
         Edit Employee Name: <input type="text" name="name" value={myData.name} onChange={handleInput}/><br/><br/>
         Edit Employee Empno: <input type="text"  name="empno" value={myData.empno} onChange={handleInput}/><br/><br/>
         Edit Employee Designation: <input type="text"   name="designation" value={myData.designation} onChange={handleInput}/><br/><br/>
         Edit Employee Salary: <input type="text"  name="salary" value={myData.salary} onChange={handleInput}/><br/><br/>
         <button onClick={handleSubmit}>Submit</button>
        <ToastContainer/>
        </>
    )
}
export default Edit;