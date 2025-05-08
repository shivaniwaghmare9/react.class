import { IoTimer } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
const Footer=()=>{
    return(
        <>
        <footer id="delivery">
        <div class="inform">
            <div>
            <FaCheckCircle  id="icon"/><br/><br/>
                <p>100% Original
                    All Products are original and go <br/>through strict quality check.</p>
            </div>
            <div>
            <FaTruck id="icon"/><br/><br/>
                <p>Free Delivery<br/>
                    Shipping in India is free</p>
            </div>
            <div>
                <IoTimer   id="icon"/><br/><br/>
                <p>Dispatched within 24 Hrs</p>
            </div>
        </div>
     </footer>
        </>
    )
}
export default Footer;