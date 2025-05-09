import { useSelector,useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { qntyDecr,qntyIncr,remove } from "../cartSlice";

const MyCart=()=>{
    const cartData=useSelector(state=>state.mycart.cart);
    const dispatch=useDispatch();

    let TotAmount=0;
    const ans=cartData.map((key)=>{
      TotAmount+=key.qnty*key.price;
        return(
            <>
             <tr>
                <td>
                  <img src={key.image} width="100" height="100" />
                </td>
                <td>{key.Name}</td>
                <td>{key.category}</td>
                <td style={{fontSize:"20px"}}> 
                <FaMinusCircle   onClick={()=>{dispatch(qntyDecr({id:key.id}))}} style={{cursor:"pointer"}} />   
                    {key.qnty}
                    <FaPlusCircle 
                onClick={()=>{dispatch(qntyIncr({id:key.id}))}} style={{cursor:"pointer"}} />
                </td>
                <td>
                  {key.qnty*key.price}
                  </td>
                  <td>
                     <button onClick={()=>{dispatch(remove({id:key.id}))}}>Remove</button>
                  </td>
             </tr>
            </>
        )
    })
    return(
        <>
            <h1 align="center">My Cart product</h1>
            <h2 align="center"><FaIndianRupeeSign />  : {TotAmount}</h2> 
           <hr />
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Product Name</th>
          <th>Category</th>
           <th>Quantity</th>
          <th>Price</th>
          <th>Total Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          {ans}
        </tbody>
        </Table>
       
        </>
    )
}
export default MyCart;