import React,{useEffect}  from 'react';
import TotalPrice from "./TotalPrice/totalprice";
import Basket from "./Basket/basket";
import {useDispatch, useSelector} from "react-redux";
import {DeleteAllOrderBasket, DeleteOrderBasket} from "../../../redux/action/action";


const BasketContainer = () => {
    const state = useSelector(state=>state.basket);
    const dispatch = useDispatch();
    const DeleteAllOrder = ()=>{
        dispatch(DeleteAllOrderBasket())
    }
    useEffect(()=>
    {

    },[state])
    return (
        <div style={{display:'flex',alignItems:'center'}}>
            <TotalPrice price={state.price} />
            <Basket count={state.count} state={state}  DeleteAllOrder={DeleteAllOrder} />
        </div>
    );
};

export default BasketContainer;