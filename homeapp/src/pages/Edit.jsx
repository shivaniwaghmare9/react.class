
import { useState } from "react";
import { useParams } from "react-router-dom";
const Edit=()=>{
    const{id}=useParams();
    const[mydata,setMydata]=useState({});
    const loadData=()=>{
        let api=`http://localhost:3000/product`
    }
    return(
        <>
        </>
    )
}
export default Edit;