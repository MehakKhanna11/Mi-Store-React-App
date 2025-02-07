import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const Slider = ({ start }) => {
  return (<Carousel fade>
  {start.map((item)=>{            
            return <Carousel.Item><img className="d-block w-100" src={item} alt="First slide"/></Carousel.Item>})}
   </Carousel>)
};

export default Slider;
{/* <Carousel fade>
{start.map((item,index) => {
  return <Carousel.Item>
    <img src={item} key={index}  alt="img" className="d-block w-100" />
  </Carousel.Item>;
})}
</Carousel> */}