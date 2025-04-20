

import axios from "axios";
import { useState,useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md";
import Table from 'react-bootstrap/Table';
import { ToastContainer,toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Update=()=>{
    const[myData,setMydata]=useState([]);
    const navigate=useNavigate();
    const loadData=async()=>{
        let api="http://localhost:3000/record";
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])

    const myDelete=async(id)=>{
        let api=`http://localhost:3000/record/${id}`;
        const response=await axios.delete(api);
        toast.error("Data successfully deleted!!!")
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
                <td>{key.age}</td>
                <td>{key.city}</td>
                <td>{key.course}</td>
                <td>
                <AiFillDelete  onClick={()=>{myDelete(key.id)}}/>
                </td>
                <td>
                  <MdEditSquare  onClick={()=>{myEdit(key.id)}}/>
                </td>
             </tr>
             
            </>
        )
    })
    return(
        <>
          <h1 id="compo">Update Page!!!</h1>
          <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Course</th>
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