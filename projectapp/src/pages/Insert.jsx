
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { ToastContainer, toast } from 'react-toastify';



const Insert=()=>{
    return(
        <>
        
    <Form>
        <h1>Welcome to insert page !!!</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Empno</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Designation</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Salary</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  

    </>
    )
}
export default Insert;