
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
const Insert=()=>{
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(Values=>({...Values,[name]:value}))
        console.log(input)
    }
    const handleSubmit=async()=>{
        let api="http://localhost:3000/product";
        const response=await axios.post(api,input);
        console.log(response.data);
        setInput(response.data)
        toast.success("data succesfully inserted!")
        setInput({
          name:"",
          productno:"",
          productname:"",
          qty:"",
          price:""
        })
        
    }
    return(
        <>
        <h1>Insert Data!!</h1>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Customber name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Product no</Form.Label>
        <Form.Control type="text" name="productno" onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Product name</Form.Label>
        <Form.Control type="text" name="productname" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Product QTY</Form.Label>
        <Form.Control type="text" name="qty"onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="text" name="price" onChange={handleInput}/>
      </Form.Group>
      
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
     <ToastContainer/>
        </>
    )
}
export  default Insert;