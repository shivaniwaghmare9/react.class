
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

const TopHead=()=>{
    return(
        <>
        <Navbar bg="light" data-bs-theme="light" id="top">
         <Container>
          <Navbar.Brand href="#home" id="title">MINISTORE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" id="nav1">Home</Nav.Link>
            <Nav.Link href="#features" id="nav">Features</Nav.Link>
            <Nav.Link href="#pricing" id="nav">Pricing</Nav.Link>
          </Nav>
         </Container>
         <div id="navdiv">
         <h4><FaRegUserCircle /> <br/>profile</h4>
          <h4><FaShoppingCart /><br/>cart</h4> 
          </div>
      </Navbar>
      
        </>
    )
}
export default TopHead;