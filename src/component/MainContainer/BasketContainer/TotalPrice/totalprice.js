import React from 'react';
import './totalprice.css';
const TotalPrice = (props) => {
    return (
        <div className='total-price'>
            {props.price} UAN
        </div>
    );
};

export default TotalPrice;