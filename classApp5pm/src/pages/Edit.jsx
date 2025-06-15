
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Edit=()=>{
    const{id}=useParams();
    const[mydata,setMydata]=useState({});
    const loadData=async()=>{
        let api=`http://localhost:3000/record/${id}`;
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    }
    useEffect(()=>{
        loadData();
    })
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setMydata(Values=>({...Values,[name]:value}))
    }
    const handleSubmit=async()=>{
        let api=`http://localhost:3000/record/${id}`;
        const response=await axios.put(api,mydata);
        alert("data successfully edited!!")
    }
     return(
        <>
         <h1>Edit Record!!</h1>
         Edit name: <input type="text" value={mydata.name} onChange={handleInput}/><br/><br/>
         Edit roll: <input type="text" value={mydata.rollno} onChange={handleInput}/><br/><br/>
         Edit city: <input type="text" value={mydata.city} onChange={handleInput}/><br/><br/>
         Edit fees: <input type="text" value={mydata.fees} onChange={handleInput}/><br/><br/>
         <button onClick={handleSubmit}>Edit Save!</button>
        </>
     )
}
export default Edit;