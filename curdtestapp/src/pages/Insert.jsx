
import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer,toast } from "react-toastify";

const Insert=()=>{
    const[input,setInput]=useState("");
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input);
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api="http://localhost:3000/record";
        const response=await axios.post(api,input);
        toast.success("Data successfully Saved!!!")
        console.log(response.data);
    }
    return(
        <>
          <h1 id="compo">Insert Page!!!</h1>
          <Form className="form">
      <Form.Group className="mb-3" >
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Enter Age</Form.Label>
        <Form.Control type="text" name="age"   onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text"  name="city" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Enter Course</Form.Label>
        <Form.Control type="text" name="course" onChange={handleInput}  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
     <ToastContainer/>
        </>
    )
}
export default Insert;