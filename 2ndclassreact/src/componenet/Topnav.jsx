
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Topnav=()=>{
    return(
        <>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" id="head">DEMOS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="form">Form</Nav.Link>
            <Nav.Link as={Link} to="map">ArrayMap</Nav.Link>
            <Nav.Link as={Link} to="event">Events</Nav.Link>
            <Nav.Link as={Link} to="context">Context</Nav.Link>
            <Nav.Link as={Link} to="toolkit">ToolKit</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default Topnav;