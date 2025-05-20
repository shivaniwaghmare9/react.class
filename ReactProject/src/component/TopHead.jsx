
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";


import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TopHead=()=>{
  const cartData = useSelector(state=>state.mycart.cart);
const cartLength= cartData.length;
const navigate= useNavigate();
    return(
        <>
        <Navbar bg="light" data-bs-theme="light" id="top">
         <Container>
          <Navbar.Brand href="#home" id="title">MINISTORE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" id="nav1">Home</Nav.Link>
            <Nav.Link as={Link} to="mycart">Cart</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
          </Nav>
         </Container>
         <div id="navdiv">
         <h4><FaRegUserCircle /> <br/>profile</h4>

          <h4> {cartLength}
          <FaShoppingCart  onClick={()=>{navigate("/mycart")}}  style={{cursor:"pointer"}}/><br/>cart</h4> 
          </div>
      </Navbar>
      
        </>
    )
}
export default TopHead;