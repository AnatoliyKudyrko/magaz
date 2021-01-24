import React,{useEffect,useState,} from 'react';
import './productview.css';
import TypeProduct from "./TypeProduct/TypeProduct";
import CardProduct from "./CardProduct/cardproduct";
import {useDispatch, useSelector} from 'react-redux';
import {FetchPizzaThunk} from "../../../redux/action/action";



const ProductView = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const getID = (id)=>{
        console.log(id)
    }
  useEffect(()=>{
     dispatch(FetchPizzaThunk());
  },[])

    return (
        <div className='product-container'>
            <p className='product-container-title'> Popular dishes</p>
            <TypeProduct getId={getID} />
            {
                state.length === 0 ? <TitleNun /> :<CardProduct data={state}/>
            }

        </div>
    );
};

const TitleNun = ()=>{
    return <h2>Нет в наличии</h2>
}
export default ProductView;