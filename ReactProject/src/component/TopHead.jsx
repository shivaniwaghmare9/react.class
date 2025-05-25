
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

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
            <Nav.Link as={Link} to="smartphones" id="nav">Smartphones</Nav.Link>
            <Nav.Link as={Link} to="smartwatches" id="nav">Smartwatches</Nav.Link>
            <Nav.Link as={Link} to="mycart" id="nav">Cart</Nav.Link>
            <Nav.Link as={Link} to="search" id="nav">Search</Nav.Link>
           
             
          </Nav>
         </Container>
         {/* <input type="checkbox" id="inp" />  */}
        <label  id="bar"><FaBarsStaggered /></label>
          
         <div id="navdiv">
         <h5><FaRegUserCircle /> <br/>profile</h5>

          <h5> {cartLength}
          <FaShoppingCart  onClick={()=>{navigate("/mycart")}}  style={{cursor:"pointer"}}/><br/>
          </h5> 
          </div>
      </Navbar>
      
        </>
    )
}
export default TopHead;