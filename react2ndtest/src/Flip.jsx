
//import { useState } from "react";
import img1 from "./coin.jpg"
import { change } from "./todoSlice";
import { useSelector,useDispatch } from "react-redux";

const Flip=()=> {
    const data=useSelector(state=>state.mycoin.coin);
    const dispatch=useDispatch();
    // const[flip,setFlip]=useState(false);
     return(
    <>
       <div className="box">
         <img src={img1} id="img"/>
       </div>
     <button id="btn" onClick={()=>{dispatch(change(data))}}>Flip Me!!</button>
     </>
    )
}
export default Flip;
    