
// //=======================================NAVBAR-BOOTSTRAP=======================================================================================
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar'

// //==========================================Carousels==================================================================================
// import Carousel from 'react-bootstrap/Carousel';
// import img1 from "./images/hero-bg.jpg";
// import img2 from "./images/myimg2.avif";
// import img3 from "./images/myimg.avif";

// //=============================================CARD==============================================================================================
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import img4 from "./images/my.jpg";
// import img5 from "./images/my2.jpg";
// import img6 from "./images/myimg3.webp";
// import img7 from "./images/myimg4.avif";
// //============================================ROW-COLUMN=========================================================================================
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const Task=()=>{
//   return(
//    <>
//     <h1 align="center">Welcome To Our React Task!!!!</h1>

//     <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home" id="bar">DEMOS</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home"id="nav1">Home</Nav.Link>
//             <Nav.Link href="#features" id="nav">About</Nav.Link>
//             <Nav.Link href="#pricing" id="nav">Product</Nav.Link>
//             <Nav.Link href="#home" id="nav">Services</Nav.Link>
//             <Nav.Link href="#features" id="nav">Blog</Nav.Link>
//             <Nav.Link href="#pricing" id="nav">Contact</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       {/*=======================================================Carousels================================================================================*/}
//       <Carousel fade className='sel'>
//       <Carousel.Item>
//       <img src={img1}  width="100%" height="500px"/>
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//       <img src={img2}  width="100%" height="500px"/>
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
      
//       <Carousel.Item>
//       <img src={img3}  width="100%" height="500px"/>
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>

//     {/*====================================================================================================================================*/}

//     {/* <Container id="row">
//       <Row>
//         <Col>
//             <Card style={{ width: '18rem' }}>
//               <Card.Img variant="top" src={img4} />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary" className="crd">Go somewhere</Button>
//               </Card.Body>
//             </Card>        
//         </Col>*/}

//         {/* <Col>
//             <Card style={{ width: '18rem' }}>
//               <Card.Img variant="top" src={img7} height="207px" />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary" className="crd">Go somewhere</Button>
//               </Card.Body>
//             </Card>        
//         </Col> */}

//         {/* <Col>
//             <Card style={{ width: '18rem' }}>
//               <Card.Img variant="top" src={img6} height="207px" />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary" className="crd">Go somewhere</Button>
//               </Card.Body>
//             </Card>        
//         </Col> */}

        
//       {/* </Row>
//     </Container> */}

//     {/*================================================================================================================================*/}
//     <div id='div2'>
//           <Card style={{ width: '18rem' }}>
//               <Card.Img variant="top" src={img7} height="206px" />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//           </Card>  

//           <Card style={{ width: '18rem' }}>
//               <Card.Img variant="top" src={img6} height="206px" />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//           </Card>    
//           <Card style={{ width: '18rem' }}>
//               <Card.Img variant="top" src={img5} height="206px" />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//           </Card>    
//           <Card style={{ width: '18rem' }}>
//               <Card.Img variant="top" src={img4} height="206px" />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//           </Card>      


//      </div>    


//    </>
//   )
// }
// export default Task;





// const Ctt=()=>{
//   const display=(e)=>{
//     // alert(e.type);    //click-Output
//     // alert(e);      //object object-Output
//     // console.log(e);
//     alert("Type:"+e.type+ "Name:"+e.target.name+ "Value:"+e.target.value);
//   }
//   return(
//     <>
//       {/* <h1>Welcome</h1> */}
//       <button name="btn" value="mybtn" onClick={display}>Click Here</button>
//     </>
//   )
// }
// export default Ctt;

// const App=()=>{
//   const myshow=(e)=>{


//   }
//   return(
//     <>
//     Enter Name<input />
//     </>
//   )
// }
// export default App;

const App=()=>{

  const display=(nm,e)=>{
    alert("Name: "+nm+ " BtnName: "+e.target.name+ " Value: "+e.target.value);
  }
  return(
    <>
      <button name="myBtn" value="btn0" onClick={(e)=>{display("shivani",e)}}>Click Here</button>
    </>
  )
}
export default App;