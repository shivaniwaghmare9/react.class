
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useState } from "react";
const Search=()=>{
    const[name,setName]=useState("");
    const[mydata,setMydata]=useState([])
    const handleSearch=async()=>{
        let api=`http://localhost:3000/product/?productname=${name}`;
        const response=await axios.get(api);
        setMydata(response.data);
    }
    let sno=0;
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.productno}</td>
                <td>{key.productname}</td>
                <td>{key.qty}</td>
                <td>{key.price}</td>
            </tr>
            </>
        )
    })

    return(
        <>
         <h1>Search product</h1>
         Enter Product Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
         <button onClick={handleSearch}>Search</button><br/><br/>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Customber Name</th>
          <th>Product NO</th>
          <th>Product Name</th>
          <th>Product Qty</th>
          <th>Net Price</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>

        </>
    )
}
export default Search;