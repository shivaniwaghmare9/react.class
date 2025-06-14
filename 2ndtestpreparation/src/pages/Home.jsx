
// import Table from 'react-bootstrap/Table';
// import axios from "axios";
// import { useState,useEffect } from "react";
// const Home=()=>{
//     const[mydata,setMydata]=useState([]);
//     const loadData=async()=>{
//         let api="http://localhost:3000/attendence";
//         const response=await axios.get(api);
//         setMydata(response.data);
//         console(response.data);
//     }
//     useEffect(()=>{
//         loadData();
//     },[])
//     let sno=0;
//     const ans=mydata.map((key)=>{
//         sno++;
//         return(
//             <>
//              <tr>
//                 <td>{sno}</td>
//                 <td>{key.name}</td>
//                 <td>{key.designation}</td>
//                 <td>{key.department}</td>
//                 <td>{key.salary}</td>
//              </tr>
//             </>
//         )
//     })
//     return(
//         <>
//        <h3>Display data!!</h3>
//          <Table striped bordered hover variant="dark">
//       <thead>
//         <tr>
//           <th>Sno</th>
//           <th>Name</th>
//           <th>Desigation</th>
//           <th>Department</th>
//           <th>Salary</th>
//         </tr>
//       </thead>
//       <tbody>
//         {ans}
//     </tbody>
//     </Table>
//         </>
//     )
// }
// export default Home;


import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useState,useEffect } from "react";
const Home=()=>{
    const[mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:3000/attendence";
        const response=await axios.get(api);
        setMydata(response.data);
        console(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])
    let sno=0;
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
             <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.designation}</td>
                <td>{key.department}</td>
                <td>{key.salary}</td>
             </tr>
            </>
        )
    })
    return(
        <>
       <h3>Display data!!</h3>
         <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Desigation</th>
          <th>Department</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {ans}
    </tbody>
    </Table>
        </>
    )
}
export default Home;