import Carousel from 'react-bootstrap/Carousel';
import img2 from "../images/blankbanner.jpg"
import img1 from "../images/banner-image.png"
const Home=()=>{
    return(
        <>
        {/* <div id="top">
         <div id="box">
           <img src={img1} alt="web" height="400px"/>
          
        </div>
        <div id="box2">
           <h1 className="btn1">YOUR PRODUCTSARE GREAT</h1>
           <button>SHOP PRODUCT</button>
        </div>
        </div> */}
         <Carousel fade>
      <Carousel.Item>
       <img src={img1}   height="450px"/>
        <Carousel.Caption id="caption1">
           <h1 className="descrip">YOUR PRODUCTSARE GREAT</h1>
          <button className="btn1">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="web" width="100%" height="450px"/>
        <Carousel.Caption id="caption">
        <h1 className="descrip1">YOUR PRODUCTSARE GREAT</h1>
          <button className="btn1">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel> 

        
        

        </>
    )
}
export default Home;