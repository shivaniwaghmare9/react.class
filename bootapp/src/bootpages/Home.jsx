
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/img2.webp"
import img2 from "../images/img1.webp"
import img3 from "../images/img3.webp"
const Home=()=>{
    return(
        <>
        
           <Carousel fade>
      <Carousel.Item>
        <img src={img1} alt="web" width="100%" height="400px"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="web" width="100%" height="400px"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="web" width="100%" height="400px"/>
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