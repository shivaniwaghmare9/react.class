
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Topnav=()=>{
    return(
        <>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" id="bar">CodeCraft</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" id="nav1">Home</Nav.Link>
            <Nav.Link as={Link} to="insert" id="nav">Insert</Nav.Link>
            <Nav.Link as={Link} to="display" id="nav">Display</Nav.Link>
            <Nav.Link as={Link} to="search" id="nav">Search</Nav.Link>
            <Nav.Link as={Link} to="update" id="nav">Update</Nav.Link>
            <Nav.Link as={Link} to="contact" id="nav">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default Topnav;