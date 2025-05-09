import { useSelector,useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
const MyCart=()=>{
    const cartData=useSelector(state=>state.mycart.cart);
    //const dispatch=useDispatch();
    const ans=cartData.map((key)=>{
        return(
            <>
             <tr>
                <td>
                  <img src={key.image} width="100" height="100" />
                </td>
                <td>{key.Name}</td>
                <td>{key.category}</td>
                <td>{key.price}</td>
             </tr>
            </>
        )
    })
    return(
        <>
            <h1 align="center">My Cart product</h1>
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