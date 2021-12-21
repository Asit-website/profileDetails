import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bg from '../img/bg.webp';
const Login = () => {
    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return <button onClick={() => onClick()} />;
      };
      <Carousel customRightArrow={<CustomRightArrow />} />;
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <>
        <div className='img' style={{position:"relative"}}>
         <Carousel className="sang" responsive={responsive}>
  <div>
      <img className="head_img" style={{width:'300px'}} src={bg} alt="" />
  </div>
  <div>
  <img  className="head_img"style={{width:'300px'}} src={bg} alt="" />
  </div>
  <div>
  <img className="head_img" style={{width:'300px'}} src={bg} alt="" />
  </div>
  <div>
  <img  className="head_img"style={{width:'300px'}} src={bg} alt="" />
  </div>
  <div>
  <img className="head_img" style={{width:'300px'}} src={bg} alt="" />
  </div>

  
</Carousel>; 
</div>
        </>
    )
}

export default Login
