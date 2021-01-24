import React from 'react';
import Basket from "./BasketContainer/Basket/basket";
import TotalPrice from "./BasketContainer/TotalPrice/totalprice";
import './MainContainer.css';
import ProductView from "./ProductView/product-view";
import Slider from "./Slider/slider";
import Contact from "./Сontact/contact";
import BasketContainer from "./BasketContainer/BasketContainer";

const MainContainer = () => {
    return (
        <>
        <div className='total-price-container product'>
            <div className='total-price-basket'>
               <BasketContainer />
            </div>
            <ProductView />
        </div>
    <Slider />
    <Contact />
        </>
    );
};

export default MainContainer;