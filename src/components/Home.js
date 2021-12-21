import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';


import 'pure-react-carousel/dist/react-carousel.es.css';
import bg from '../img/bg.webp';


const Home = () => {
    return (
        <>
          <div className="home_section">
             <div className="home_first">
               <h2>Coding Is The Best</h2>
               <p>We Are Proffesional coder <br /> and proffession developer</p>
             </div>
          </div>

          {/* <div className="cras">

          <CarouselProvider
        naturalSlideWidth={500}
        naturalSlideHeight={500}
        totalSlides={3}
        className="target"
      >
        <Slider className="sond">
          <Slide index={0}>
              <img style={{width:'500px'}}  src={bg} alt="yes" />
          </Slide>
          <Slide index={1}>
              <img style={{width:'500px'}} src={bg} alt="" />
          </Slide>
          <Slide index={2}>
              <img style={{width:'500px'}} src={bg} alt="" />
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
      </div> */}
        </>
    )
}

export default Home
