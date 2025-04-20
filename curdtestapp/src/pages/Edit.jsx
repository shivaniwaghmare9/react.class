
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
const Edit=()=>{
    const {id}=useParams();
    const[myData,setMydata]=useState({});
    const loadData=async()=>{
        let api=`http://localhost:3000/record/${id}`;
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
        console.log(myData)

    }
    const handleSubmit=async()=>{
        let api=`http://localhost:3000/record/${id}`
        const response=await axios.put(api,myData);
        toast.info("Data successfully updated!!!" ,{
            position: "bottom-right"
        })
        console.log(response.data);
    }
    return(
        <>
         <h1 id="compo">Edit Information!!!</h1>
         <div id="box">
         Edit Name:<br/> <input type="text" name="name" value={myData.name} onChange={handleInput} className="inp"/><br/><br/>
         Edit Age:<br/> <input type="text" name="age" value={myData.age}  onChange={handleInput} className="inp"/><br/><br/>
         Edit City:<br/> <input type="text" name="city" value={myData.city} onChange={handleInput} className="inp"/><br/><br/>
         Edit Course:<br/> <input type="text" name="course" value={myData.course} onChange={handleInput}className="inp"/><br/><br/>
         <button onClick={handleSubmit}>Edit!!</button>
         </div>
         <ToastContainer/>
        </>
    )
}
export default Edit;