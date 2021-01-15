import React from 'react';
import pizza from '../../../assets/image/piza_image.png';
import './main.css'

const Main = () => {
    return (
        <div className='main-block'>
            <div className='pizza-img'>
                <img className='image-pizza-main' src={pizza} alt=""/>
            </div>
        </div>
    );
};

export default Main;