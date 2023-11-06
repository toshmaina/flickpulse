"use client"

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
/* import carousel1 from "../../public/assets/imgs/carousel-1.jpg";
import carousel2 from "../../public/assets/imgs/carousel-2.jpg" */

const Hero = () => {
  
    return (
       
        <Carousel
            autoPlay
            infiniteLoop
            showIndicators
            showStatus
            showThumbs
            interval={2000}
            className="h-full ">
                <div>
                    <img src='https://via.placeholder.com/200'  width={200} height={200}/>
                    <p>This is the first legend</p>
              </div>
                <div>
                    <img src='https://via.placeholder.com/200' width={200} height={200} />
                    <p>This is the second legend</p>
              </div>
           </Carousel>
       
 );
};

export default Hero;
