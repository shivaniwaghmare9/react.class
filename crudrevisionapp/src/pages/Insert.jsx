
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Insert=()=>{
   const[input,setInput]=useState("");
   const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
      setInput((values)=>({...values,[name]:value}))
      console.log(input);
    }
   const handleSubmit=async(e)=>{
    e.preventDefault();
    let api="http://localhost:3000/cruddata";
    const response=await axios.post(api,input);
    toast.success("data successfully saved!!");
    console.log(response);
    setInput({
        name:"",
        empno:"",
        designation:"",
        salary:""
    })
   }

    return(
        <>
            <h2>Welcome to Insert!!!</h2>

    <Form className='insertform'>
      <Form.Group className="mb-3" >
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name"  onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Enter Empno</Form.Label>
        <Form.Control type="text" name="empno"onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Enter Designation</Form.Label>
        <Form.Control type="text" name="designation" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Enter Salary</Form.Label>
        <Form.Control type="text" name="salary"onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    <ToastContainer />
        </>
    )
}
export default Insert;