import { useSelector,useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
const MyCart=()=>{
    const cartData=useSelector(state=>state.mycart.cart);
    //const dispatch=useDispatch();
    const ans=cartData.map((key)=>{
        return(
            <>
             <tr>
                <td>{key.image}</td>
                <td>{key.Name}</td>
                <td>{key.KurtaFabric}</td>
                <td>{key.BottomwearFabric}</td>
                <td>{key.price}</td>
             </tr>
            </>
        )
    })
    return(
        <>
            <h1>mY Cart product</h1>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Category</th>
          <th> Quantity</th>
          <th>Price</th>
          <th> Total Price</th>
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