import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Edit=()=>{
    const{id}=useParams();
    const loadData=async()=>{
        let api=`http://localhost:3000/employee/${id}`
        const response=await axios.get(api);
        console.log(response.data);
    }
    useEffect(()=>{
     loadData()
    },[])

    return(
        <>
        <h3>Edit Employee Record!!!</h3>
        Employee Name: <input type="text" value={}/><br/><br/>
        Employee Number: <input type="text" /><br/><br/>
        Employee Designation: <input type="text" /><br/><br/>
        Employee Salary: <input type="text" /><br/><br/>
        <button>Edit!!</button>
          
        </>
    )
}
export default Edit;