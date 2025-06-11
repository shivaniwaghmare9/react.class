
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
const Edit=()=>{
    const{id}=useParams();
    const[mydata,setMydata]=useState({});
    const loadData=async()=>{
        let api=`http://localhost:3000/students/${id}`;
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    }
    useEffect(()=>{
     loadData();
    },[])
   const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMydata(Values=>({...Values,[name]:value}))
   }
   const handleSubmit=async()=>{
      let api=`http://localhost:3000/students/${id}`;
      const response=await axios.put(api,mydata);
      alert("data successfully updated!!")
   }
    return(
        <>
         <h1>Edit page!!!</h1>
         Enter Name: <input type="text" name="name" value={mydata.name} onChange={handleInput}/><br/><br/>
         Enter Rollno: <input type="text" name="rollno" value={mydata.rollno} onChange={handleInput}/><br/><br/>
         Enter City: <input type="text" name="city" value={mydata.city} onChange={handleInput}/><br/><br/>
         Enter Fees: <input type="text" name="fees" value={mydata.fees }onChange={handleInput}/><br/><br/>
         <button onClick={handleSubmit}>Edit Save!!!</button>
        </>
    )
}
export default Edit;