import React,{useEffect,useState,} from 'react';
import './productview.css';
import TypeProduct from "./TypeProduct/TypeProduct";
import CardProduct from "./CardProduct/cardproduct";
import {useDispatch, useSelector} from 'react-redux';
import {FetchPizzaThunk} from "../../../redux/action/action";


const ProductView = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
  useEffect(()=>{
     dispatch(FetchPizzaThunk());
  },[])

    return (
        <div className='product-container'>
            <p className='product-container-title'> Popular dishes</p>
            <TypeProduct />
            {
                state.length === 0 ? <Dsa /> :<CardProduct data={state}/>
            }

        </div>
    );
};

const Dsa = ()=>{
    return <h2>SADASD</h2>
}
export default ProductView;