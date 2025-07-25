
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Topnav=()=>{
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="todo">Todo App</Nav.Link>
            <Nav.Link as={Link} to="counter">CounterApp</Nav.Link>
            <Nav.Link as={Link} to="countertodo">CounterTodoApp</Nav.Link>
            <Nav.Link as={Link} to="weather">Weather App</Nav.Link>
            <Nav.Link as={Link} to="shopping">Shopping Cart</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default Topnav;