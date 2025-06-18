
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

    return(
        <>
         <h1>Search product</h1>
         Enter Product Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
         <button onClick={handleSearch}>Search</button>
        </>
    )
}
export default Search;