import React,{useState,useEffect,useRef} from 'react';
import './basket.css';
import  basket from '../../../../assets/image/market_shop.svg'
import {useDispatch} from "react-redux";
import {DeleteOrderBasket} from "../../../../redux/action/action";



const Basket = (props) => {
    let [style,setStyle] = useState('bascket-hover un-visible');
    let [value, setValue] = useState(false);
    const Count = (count)=>{
        if (count !== 0){
            return (
                <div className="price-basket">
                    <span>{count}</span>
                </div>
            )
        }
      return null;
    }

   const UpdateValue =()=>{
        setValue(prev=>!prev);
        if(value === true) {
            setStyle('bascket-hover visible');
        }
       if(value === false) {
           setStyle('bascket-hover un-visible');
       }
   }

    const deleteOrders = ()=>{
        props.DeleteAllOrder()

    }

    return (
            <div className='basket' onClick={()=>UpdateValue()} >
                <div className="price">
                    <div className="circle-basket">
                        <img src={basket} alt=""/>
                        {Count(props.count)}
                    </div>

                </div>
                <div>
                </div>
                <div className={style === '' ? 'bascket-hover unvisible':style}>
                    {
                        props.state.count  === 0 ? <h1>нет заказов</h1> :  <button className='btn-all' onClick={()=>deleteOrders()}>Очистить все </button>
                    }
                    {
                        props.state.count  === 0  ? null :
                            props.state.data.length !==0 ? props.state.data.map(i=>
                                <li key={i.id}>
                                    <ProductItemOrder item={i} />
                                </li>): null
                    }
                    <div className='btn-buy-container'>
                        <button className='btn-all btn-buy'>Оформить заказ </button>
                    </div>


                </div>

            </div>

    );
};

const ProductItemOrder =({item})=>{
    const dispatch = useDispatch();
    const getID =(id)=>{
        dispatch(DeleteOrderBasket(id))
    }
    useEffect(()=>{

    },[item])
    return (
        <div >


            <div className='product-order-item'>

           <div>
               <p><span>Имя:</span>{item.name}</p>
               <p><span>Размер:</span>{item.size}</p>
               <p><span>Цена:</span>{item.price}</p>
           </div>
                <div>
                    <img onClick={()=>getID(item.id)} src="https://api.icons8.com/download/1a63ee8a70a9212b47fced5d9870b4daa7fa53f7/windows10/PNG/512/User_Interface/delete_sign-512.png" alt=""/>
                </div>
            </div>
            <hr/>

        </div>

    )
}

export default Basket;