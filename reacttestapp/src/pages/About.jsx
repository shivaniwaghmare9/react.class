import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer,toast } from "react-toastify";



const About=()=>{
    const[input,setInput]=useState("");
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input);
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api="http://localhost:3000/info";
        const response=await axios.post(api,input);
        console.log(response.data);
        toast.success("Data successfully saved!!!")
        setInput({
          name:"",
          designation:"",
          department:"",
          salary:""     
        })
    }

    return(
        <>
            <Form id="myform">
      <Form.Group className="mb-3" >
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput}/>
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Enter Desigantion</Form.Label>
        <Form.Control type="text" name="designation" onChange={handleInput}/>
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Enter Department</Form.Label>
        <Form.Control type="text" name="department" onChange={handleInput}/>
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Enter Salary</Form.Label>
        <Form.Control type="text" name="salary" onChange={handleInput}/>
        </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    <ToastContainer/>
        </>
    )
}
export default About;