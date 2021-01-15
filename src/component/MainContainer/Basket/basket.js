import React from 'react';
import './basket.css';
import  basket from '../../../assets/image/market_shop.svg'
const Basket = () => {
    return (
        <div className='basket'>
            <div className="price">
                <div className="circle-basket">
                    <img src={basket} alt=""/>
                    <div className="price-basket">
                     <span>2</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Basket;