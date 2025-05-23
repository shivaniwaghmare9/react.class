import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductDisplay=()=>{
    const {id} = useParams();
    const [mydata, setMydata] = useState({});
    const loadData=async()=>{
        let api=`http://localhost:3000/products/${id}`;
         const response = await axios.get(api);
         console.log(response.data);
         setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    }, []);

    return(
        <>
        <h1 className="heading">My Product</h1>
        <div id="display">
         
         <h3>Product name : {mydata.productname} </h3>
         <h4>Name: {mydata.name}</h4>
         <h4>BatteryCapacity: {mydata.BatteryCapacity}</h4>
         <img src={mydata.image} width="300" height="300" />
          <h4> Price : {mydata.price}</h4>
         </div>
        </>
    )
}
export default ProductDisplay;