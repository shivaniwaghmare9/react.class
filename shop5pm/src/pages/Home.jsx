import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/img1.webp";
import img2 from "../images/hero-bg.jpg";
import img3 from "../images/myimg.avif";

const Home=()=>{
    return(
        <>
            <Carousel fade>
      <Carousel.Item>
       <img src={img1}  width="100%" height="450px"/>
        <Carousel.Caption id="caption">
          <h3 className="descrip">Smart Shopping
            <br/>Trusted by Millions
          </h3>
          <button className="btn1">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="web" width="100%" height="450px"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="web" width="100%" height="450px"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    
        </>
    )
}
export default Home;