import React from 'react';
import './productview.css';
import TypeProduct from "./TypeProduct/TypeProduct";
import CardProduct from "./CardProduct/cardproduct";

const ProductView = () => {
    return (
        <div className='product-container'>
            <p className='product-container-title'> Popular dishes</p>
            <TypeProduct />
            <CardProduct />
        </div>
    );
};

export default ProductView;