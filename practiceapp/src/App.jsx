
//========================================BASIC====================================================================================
// const App=()=>{
//   return(
//     
//     <h1>Welcome to our practie time !!!!</h1>
//     
//   )
// }
// export default App;

//=========================================FRAGMENT(<></>)================================================================================
// const App=()=>{
//   return(
//     <>
//     <h1>Welcome to our practie time !!!!</h1>
//     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam consectetur facere cupiditate doloremque illum facilis repudiandae voluptatem rem aspernatur. </p>
//     </>
//   )
// }
// export default App;
//======================================EXPRESSION===================================================================================
// const App=()=>{
//   const name="shivani"
//   const age=11
//   const salary=45000
//   return(
//     <>
//     <h1>Hello my name is {name} and my age is {age*2} and salary is {salary*2}!!!!</h1>
//     </>
//   )
// }
// export default App;
              //=========================================================================================================================
// const App=()=>{

//   const sub=<ul>
//     <li>Java</li>
//     <li>Mern</li>
//     <li>Python</li>
//     <li>PHp</li>
//   </ul>
//   return(
//     <>
//     <h1>My subject is :{sub}</h1>
//     </>
//   )
// }
// export default App;

//===========================================COMPONENTS===========================================================================================================

// import Bhopal from "./pages/Bhopal";
// import Cybrom from "./pages/Cybrom";
// import Student from "./pages/Student";
// const App=()=>{
//   return(
//     <>
//     <h1>Welcome to our practie time !!!!</h1>
//     <Cybrom/>
//     <Bhopal/>
//     <Student/>
//     </>
//   )
// }
// export default App;

//===============================================PROPS=====================================================================================
// import Student from "./pages/Student";
// import Cybrom from "./pages/Cybrom";
// import Bhopal from "./pages/Bhopal";

// const name="Bhopal"
// const institute="Cybrom"
// const fees=45000

// const record={
//    college:"Bhopal",
//    course:"Java",
//    fee:48000

// }


// const App=()=>{
//   return(
//     <>
//     <h1>Welcome to our practie time !!!!</h1>
//     <hr />
//     <Cybrom nm={name} ins={institute}fee={fees}/>
//     <hr/>
//     <Bhopal nm={record.college} crs={record.course} fee={record.fee}  />
//     <hr />
//     <Student nm="shivani" ct="Indore" ins="Cybrom"/>
//     </>
//   )
// }
// export default App;

//============================================ARRAY.MAP-METHODS=====================================================================================================
// const data=["PHp","Java","Python","Mern"]
// const show=data.map((key)=>{
//   return(
//     <>
//        {/* <h1>{key}</h1> */}
//       {/* <option>{key}</option> */}
//       <li>{key}</li>
//     </>

//   )
      
// })
// const App=()=>{
//   return(
//     <>
//     <h1>Welcome to Map method info!!!</h1>
//     {/* {show}
//     <select>{show}</select> */}
//     <ul>{show}</ul>
     
//     </>
//   )
// }
// export default App;

//==========================================TABLE FROM MAP METHODS(OBJECT)=================================================================================================
// const App=()=>{
  
// const record=[
//   {
//     name:"Shivani",
//     age:22,
//     city:"Bhopal",
//     number:1234567
//   },
//   {
//     name:"Prinshu",
//     age:21,
//     city:"Vidisha",
//     number:1234567
//   },
//   {
//     name:"Preeti",
//     age:23,
//     city:"Riva",
//     number:1234567
//   },
//   {
//     name:"Ram",
//     age:24,
//     city:"Indore",
//     number:1234567
//   }
// ]
// const Data=record.map((key)=>{
//   return(
//     <>
//      <tr>
//       <td>{key.name}</td>
//       <td>{key.age}</td>
//       <td>{key.city}</td>
//       <td>{key.number}</td>
//      </tr>
//     </>
//   )
// })

// return(
//   <>
//   <h1>Welcome to Students Record!!!</h1>
//   <hr />
//    <table border="1" width="500px"> 
//     <tr>
//       <th>Name</th>
//       <th>Age</th>
//       <th>City</th>
//       <th>Number</th>
//     </tr>
//     {Data}
//    </table>
//   </>
// )
// }
// export default App;
//========================================TABLE WITH USE COMPONENT FILE==================================================================================
// import Data from "./EmpData";
// import Design from "./EmpDesign";
// const App=()=>{
//   const info=Data.map((key)=> <Design 
//   nm={key.name}  
//   no={key.Empno} 
//   pt={key.Post} 
//   sal={key.Salary}/>)
//   return(
//     <>
//      <h1 align="center">Welcome To Employeeee Records!!!!</h1>
//      <hr />
//      <table border="1" width="500px">
//       <tr>
//         <th>Name</th>
//         <th>EmpNo</th>
//         <th>Post</th>
//         <th>Salary</th>
//       </tr>
//       {info}
//      </table>
//     </>
//   )
// }
// export default App;

//==============================================NAVIGATION(react-router-dom)======================================================================================
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Product from "./pages/Product";
// import Contact from "./pages/Contact";
// import Layout from "./Layout";
// import Nofound from "./pages/Nofound";
// const App=()=>{
//   return(
//     <>
//     <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout/>}>
//             <Route index element={<Home/>}/>
//             <Route path="home" element={<Home/>}/>
//             <Route path="about" element={<About/>}/>
//             <Route path="product" element={<Product/>}/>
//             <Route path="contact" element={<Contact/>}/>
//             <Route path="*" element={<Nofound/>}/>
//           </Route>
//         </Routes>
//     </BrowserRouter>
//     </>
//   )
// }
// export default App;

//=================================================STYLING-CSS-CONNECTED================================================================================================
// import Bhopal from "./pages/Bhopal";
// import Cybrom from "./pages/Cybrom";
// import Student from "./pages/Student";


// const sty={
//   color:"red",
//   textDecoration:"underline",
//   fontSize:"40px"
// }

// const App=()=>{
//   return(
//     <>
//     <h1 style={{color:"red" }}>Welocome to react classes!!!!</h1> {/*inline---*/}
//     <h2 style={sty}>Welcome to bhopal city!!!</h2>  {/*inline-but-from-variable*/}
//     <Bhopal/>
//     <Cybrom/>
//     <Student/>

//     </>
//   )
// }
// export default App;


//============================================REACT-BOOTSTRAP======================================================================================
//=================================navbar===========================================

// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

//============================================clouser================================================================================
// import Carousel from 'react-bootstrap/Carousel';
// import img1 from "./images/img12.jpg";
// import img2 from "./images/img1.jpg";
// import img3 from "./images/img4.jpg";

//===========================================row-col========================================================================================
// import Container from 'react-bootstrap/Container';       


//==============================================card=========================================================================================

// import Card from 'react-bootstrap/Card';
// import img4 from "./images/img2.jpg";
// import img5 from "./images/img3.jpg";
// import img6 from "./images/img13.jpg";
// import img7 from "./images/bird1.jpg";


// const App=()=>{
//   return(
//     <>
//       <h1 align="center">welcome to react-bootsrap classes!!!!</h1>
//       {/*============================================navbar=================================================*/}
//       <Navbar className="bg-body-tertiary justify-content-between">
//       <Form inline>
//         <InputGroup>
//           <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
//           <Form.Control
//             placeholder="Username"
//             aria-label="Username"

//             aria-describedby="basic-addon1"
//           />
//         </InputGroup>

//       </Form>
//       <Form inline>
//         <Row>
//           <Col xs="auto">
//             <Form.Control
//               type="text"
//               placeholder="Search"
//               className=" mr-sm-2"
//             />
//           </Col>
//           <Col xs="auto">
//             <Button type="submit">Submit</Button>
//           </Col>
//         </Row>
//       </Form>
//     </Navbar>
//       <hr />
//       {/* ==========================================clouser===================================================================*/ }
//       <Carousel fade>
//       <Carousel.Item>
//         <img src={img1} width="100%" height="500px"/>
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

//     {/*===============================================card with div=========================================================================*/}
//       <div id="card">
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={img4}  height="200px"/>
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up the
//                           bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//             </Card>        
        

        
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={img5} height="200px"/>
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up the
//                           bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//             </Card>        
        

        
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={img6} height="200px"/>
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up the
//                           bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//             </Card>      


//             <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={img7}height="200px" />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up the
//                           bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//             </Card>        
          
//             </div>
// {/*=================================================row-col===============================================================================*/}
// <Container>
//       <Row>
//         <Col>
//             <Card style={{ width: '18rem' }}>
//              <Card.Img variant="top" src={img1} height="200px"/>
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                  Some quick example text to build on the card title and make up the
//                  bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//             </Card>
//         </Col>

//         <Col>
//             <Card style={{ width: '18rem' }}>
//              <Card.Img variant="top" src={img3} height="200px"/>
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                  Some quick example text to build on the card title and make up the
//                  bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//             </Card>
//         </Col>

//         <Col>
//             <Card style={{ width: '18rem' }}>
//              <Card.Img variant="top" src={img2}height="200px" />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                  Some quick example text to build on the card title and make up the
//                  bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//             </Card>
//         </Col>


//       </Row>
//     </Container>

//     </>
//   )
// }
// export default App;

//===========================================EVENTS================================================================================================
const App=()=>{
  // const show=()=>{
  //   alert("this is our react program!!!")
// }

// const show=(nm)=>{
//   alert(`My Name Is ${nm}!!!`)   //parameterized
// }

//const show=(e)=>{
 // alert(e.type);   //output=click
  //alert(e);        //output=[object object]
 // alert("Name:"+e.target.name+ " Value: "+e.target.value)

//}

const show=(nm,e)=>{
  alert("Name: "+nm+ " Btname: "+e.target.name+" Value: "+e.target.value)
}
  return(
    <>
        <h1 align="center">Welcome To Events Classes!!!</h1>
        {/* <button onClick={show}>Show me</button> */}
       {/* <button onClick={()=>{show("Shivani")}}>Show Me</button>  */}   {/*parameterized*/}

       {/* <button  name="btn" value="Mybtn "onClick={show}>Show me</button> */}

       <button name="btn" value="mybtn"onClick={(e)=>{show("shivani",e)}}>Click me</button>


    </>
  )
}
export default App;
