
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const TopMenu=()=>{
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" ></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="home">Beauty & Health</Nav.Link>
            <Nav.Link as={Link} to="home">Jewellery & Accessories</Nav.Link>
            <Nav.Link as={Link} to="home">Bags & Footwear</Nav.Link>
            <Nav.Link as={Link} to="home">Electronics</Nav.Link>
            <Nav.Link as={Link} to="home">Books</Nav.Link>
            <Nav.Link as={Link} to="home">Bags & Footwear </Nav.Link>
            <Nav.Link as={Link} to="home">Women Western</Nav.Link>
            
            
          </Nav>
        </Container>
      </Navbar>
          
        </>
    )
}
export default TopMenu;