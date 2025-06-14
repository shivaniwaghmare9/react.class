
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
// const Tophead=()=>{
//     return(
//         <>

// <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="home">Home</Nav.Link>
//             <Nav.Link as={Link} to="about">About</Nav.Link>
//             <Nav.Link as={Link} to="services">Services</Nav.Link>
//             <Nav.Link as={Link} to="placement">Placement</Nav.Link>
//             <Nav.Link as={Link} to="gallery">Gallery</Nav.Link>
//             <Nav.Link as={Link} to="contact">Contact Us</Nav.Link>
            
//           </Nav>
//         </Container>
//       </Navbar>
//         </>
//     )
// }
// export default Tophead;


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Tophead=()=>{
    return(
        <>

<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="services">Services</Nav.Link>
            <Nav.Link as={Link} to="placement">Placement</Nav.Link>
            <Nav.Link as={Link} to="gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact Us</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default Tophead;