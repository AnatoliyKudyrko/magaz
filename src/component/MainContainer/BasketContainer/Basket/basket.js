import React,{useState,useEffect} from 'react';
import './basket.css';
import  basket from '../../../../assets/image/market_shop.svg'

const Basket = (props) => {
     const [style,setStyle] = useState('bascket-hover');
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
    const styleHover = ()=>{
        setStyle('bascket-hover visible');
    }


    return (
            <div className='basket' onClick={()=>styleHover()}>
                <div className="price">
                    <div className="circle-basket">
                        <img src={basket} alt=""/>
                        {Count(props.count)}
                    </div>

                </div>
                <div className={style} >
                    {
                        props.state.count === 0 ? <h4>нет заказов</h4>:
                            props.state.data.length !==0 ? props.state.data.map(i=>
                                <li key={i.id}>
                                <ProductItemOrder item={i} getID={props.getID}/>
                            </li>): null
                    }
                    <button onClick={props.DeleteAllOrder}>Очистить</button>
                </div>

            </div>

    );
};

const ProductItemOrder =({item,getID})=>{
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
                <div onClick={()=>getID(item.id)}>
                    <img src="https://api.icons8.com/download/1a63ee8a70a9212b47fced5d9870b4daa7fa53f7/windows10/PNG/512/User_Interface/delete_sign-512.png" alt=""/>
                </div>
            </div>
            <hr/>

        </div>

    )
}

export default Basket;