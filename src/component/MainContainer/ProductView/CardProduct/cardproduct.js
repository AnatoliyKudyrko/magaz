import React,{useEffect,useState,useCallback} from 'react';
import './cardproduct.css';
import pizza from '../../../../assets/image/pizza-card.png';
import buy from '../../../../assets/image/buy.png';
import refresh from '../../../../assets/image/refresh.png';
import { useDispatch } from 'react-redux';
import {LOAD_BASKET, LoadBasket} from "../../../../redux/action/action";

const CardProduct = ({data}) => {
    const [dataPizza, setDataPizza] = useState()

   useEffect(()=>{
       setDataPizza(data.pizza.data)
   },[data])

    return (
        <div>
            <div className='card-product-container container'>
                {
                   dataPizza === [] ? null:  data.pizza.data.map(i=><li key={i.id}><CardProductItem data={i} /></li>)
                }

            </div>
            <AddProductView />
        </div>

    );
};

const CardProductItem = ({data})=>{
    const [size,setSize] = useState(24);
    const dispatch = useDispatch();
    let price = 0;
    let styleSizeSmall = 'size';
    let styleSizeBig = 'size';

    const SetDiameter =(value)=>{
        setSize(value)
    }

    if(size === 24){
        styleSizeSmall = 'size active-size';
        styleSizeBig = 'size';

    } else {
        styleSizeBig = 'size active-size';
         styleSizeSmall = 'size';

    }



    return (
        <div className='card-body'>
            <img src={pizza} alt="pizza"/>
            <div className='pizza-diameter'>
                <span onClick={()=>SetDiameter(24)} className={styleSizeSmall}>24cm</span>
                <span onClick={()=>SetDiameter(32)} className={styleSizeBig}>32cm</span>
            </div>
            <p className='card-title'>{data.name}</p>
            <p className='card-desc'>{data.topping.map(i=>(<span key={i} style={{marginLeft:'10px'}}>{i}</span>))}</p>
            <p className='card-price'>{size === 24? price = data.price: price= Math.floor(data.price * 1.5)} UAN</p>
            <div className="product-buy-container">
                <div className="product-buy">
                    <div className="bg-icon-buy"onClick={() => dispatch(LoadBasket({id:Math.floor(Math.random()*100),name:data.name,size,price}))} >
                        <img src={buy} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}
const AddProductView = ()=>{
    return (
      <div className='btn-refresh'>
          <button>
              <img src={refresh} alt=""/>
          </button>
      </div>
    )
}
export default CardProduct;