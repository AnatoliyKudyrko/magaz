import React,{useEffect,useState} from 'react';
import './cardproduct.css';
import pizza from '../../../../assets/image/pizza-card.png';
import buy from '../../../../assets/image/buy.png';
import refresh from '../../../../assets/image/refresh.png';
const CardProduct = ({data}) => {
    const [dataPizza, setDataPizza] = useState()
   useEffect(()=>{
       console.log(data.pizza.data)
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
    return (
        <div className='card-body'>
            <img src={pizza} alt="pizza"/>
            <div className='pizza-diameter'>
                <span>24cm</span>
                <span>32cm</span>
                <span>48cm</span>
            </div>
            <p className='card-title'>{data.name}</p>
            <p className='card-desc'>{data.topping.map(i=>(<span key={i} style={{marginLeft:'10px'}}>{i}</span>))}</p>
            <p className='card-price'>{data.price} UAN</p>
            <div className="product-buy-container">
                <div className="product-buy">
                    <div className="bg-icon-buy">
                        <img src={buy} alt=""/>
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