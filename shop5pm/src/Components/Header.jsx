import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
const Header=()=>{
    return(
        <>
         <div id="header">
            <h1>MEESHO</h1> 
             <input type="text"   id="inp"/>
             <h6 className="h6">Become a<br/> suplier</h6>
             <h6 className="h6">Investor<br/> Relations</h6>
              <CiSearch   id="Search"/>
             <h4><FaRegUserCircle /> <br/>profile</h4>
            <h4><FaShoppingCart /><br/>cart</h4> 
           </div>
        </>
    )
}
export default Header;