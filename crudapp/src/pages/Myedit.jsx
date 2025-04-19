
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
const Edit=()=>{
    const {id}=useParams();
    const [myData,setMydata]=useState([]);
    const loadData=async()=>{
        let api=`http://localhost:3000/Info/${id}`
        const response=await axios.get(api);
        setMydata(response.data);
        console.log(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values,[name]:value}))
    console.log(myData);
  }
  const handleSubmit=async()=>{
   let api=`http://localhost:3000/Info/${id}`;
   const response=await axios.get(api,myData);
   toast.info("data successfully updated");

  }
    
    return(
        <>
         
         Edit name: <input type="text" name="name" value={myData.name} 
         onChange={handleInput}/><br/><br/>
         Edit name: <input type="text" name="name" value={myData.rollno} 
         onChange={handleInput}/><br/><br/>
         Edit name: <input type="text" name="name" value={myData.subject} 
         onChange={handleInput}/><br/><br/>
         Edit name: <input type="text" name="name" value={myData.university} 
         onChange={handleInput}/><br/><br/>
         <button onClick={handleSubmit}>Update</button>
         <ToastContainer/>
        </>
    )
}
export default Edit;