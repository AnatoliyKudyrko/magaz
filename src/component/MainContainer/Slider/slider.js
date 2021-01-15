import React from 'react';
import './slider.css';
import slider from '../../../assets/image/slider.jpg';
const Slider = () => {
    return (
        <div>
          <ul className="slider-container">
              <SliderItem/>
              <SliderItem/>
              <SliderItem/>
              <SliderItem/>

          </ul>
        </div>
    );
};
const SliderItem = ()=>{
    return (
        <li className="item-slider">
            <img src={slider} alt=""/>
        </li>
    )
}

export default Slider;