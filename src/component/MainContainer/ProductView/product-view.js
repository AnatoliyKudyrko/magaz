import React,{useEffect,useState,} from 'react';
import './productview.css';
import TypeProduct from "./TypeProduct/TypeProduct";
import CardProduct from "./CardProduct/cardproduct";
import {useDispatch, useSelector} from 'react-redux';
import {
    FetchDessertThunk,
    FetchDrinkThunk,
    FetchPizzaThunk,
    FetchSaladThunk,
    FetchSushiThunk
} from "../../../redux/action/action";



const ProductView = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const [name,setName]= useState('');
    const getName =(name)=>{
        setName(name);
    }

     const LoadDataProduct = ()=>{
         dispatch(FetchPizzaThunk());
         dispatch(FetchSushiThunk());
         dispatch(FetchSaladThunk());
         dispatch(FetchDessertThunk());
         dispatch(FetchDrinkThunk());
     }
  useEffect(()=>{
 LoadDataProduct();
  },[])

    return (
        <div className='product-container'>
            <p className='product-container-title'> Popular dishes</p>
            <TypeProduct getName={getName}/>
            {
                state.length === 0 ? <TitleNun /> :<CardProduct data={state} name={name}/>
            }

        </div>
    );
};

const TitleNun = ()=>{
    return <h2>Нет в наличии</h2>
}
export default ProductView;