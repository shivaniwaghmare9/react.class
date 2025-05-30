import axios from "axios";
import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Update=()=>{
    const[myData,setMydata]=useState([]);
    const navigate=useNavigate();
    const loadData=async()=>{
        let api="http://localhost:3000/Employee";
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);

    }
    useEffect(()=>{
        loadData();
    },[]);
    
    const myDel=async(id)=>{
        let api=`http://localhost:3000/Employee/${id}`;
        const response=await axios.delete(api);
        toast.error("data succesfully saved!!");
        loadData();

    }
    const myEdit=(id)=>{
        navigate(`/myedit/${id}`)
       }
       
    let sno=0;
    const Record=myData.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.empno}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
                <td>
                    <MdDelete className="DelIcon" onClick={()=>{myDel(key.id)}}/>
                </td>
                <td>
                <MdEditSquare className="editIcon"
                onClick={()=>{myEdit(key.id)}} />
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1 id="head">Update Page!!!</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Empno</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {Record}
      </tbody>
      </Table>
         

        <ToastContainer />
        </>
    )
}
export default Update;