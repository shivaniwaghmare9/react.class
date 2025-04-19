
import axios from "axios";
import { useState,useEffect } from "react";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

const Update=()=>{
    const[myData,setMydata]=useState([]);
    const navigate=useNavigate();
    const loadData=async()=>{
        let api="http://localhost:3000/Info";
        const response=await axios.get(api);
        setMydata(response.data);
        console.log(response.data);
    }

    useEffect(()=>{
        loadData();
    },[])

    const myDelete=async(id)=>{
        let api=`http://localhost:3000/Info/${id}`;
        const response=await axios.delete(api,myData);
        toast.error("Data successfully deleted");
        console.log(response.data);
        loadData();

    }
    const myEdit=(id)=>{
        navigate(`/myedit/${id}`);
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
                <td> 
                <RiDeleteBin3Fill  onClick={()=>{myDelete(key.id)}} />
                </td>
                <td>
                <FaUserEdit  onClick={()=>{myEdit(key.id)}}/>
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
         <h1>Update Page!!</h1>
         
            <Table striped bordered hover >
                <thead>
                  <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>Rollno</th>
                    <th>Subject</th>
                    <th>University</th>
                    <th>Delete</th>
                    <th>Update</th>
                  </tr>
                </thead>
                <tbody>
                {Record}
                </tbody>
            </Table>     
            <ToastContainer/>

        </>
    )
}
export default Update;