import React from 'react';
import Basket from "./Basket/basket";
import TotalPrice from "./TotalPrice/totalprice";
import './MainContainer.css';
import ProductView from "./ProductView/product-view";
import Slider from "./Slider/slider";
import Contact from "./Сontact/contact";

const MainContainer = () => {
    return (
        <>
        <div className='total-price-container product'>
            <div className='total-price-basket'>
                <TotalPrice />
                <Basket />
            </div>
            <ProductView />
        </div>
    <Slider />
    <Contact />
        </>
    );
};

export default MainContainer;