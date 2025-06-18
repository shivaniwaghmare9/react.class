
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Edit=()=>{
    const{id}=useParams();
    const[mydata,setMydata]=useState({});
    const loadData=async()=>{
        let api=`http://localhost:3000/product/${id}`;
        const response=await axios.get(api);
        setMydata(response.data);
        console.log(response.data)
    }
    useEffect(()=>{
        loadData()
    },)

    return(
        <>
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
        </>
    )
}
export default Edit;