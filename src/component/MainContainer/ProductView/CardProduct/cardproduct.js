import React from 'react';
import './cardproduct.css';
import pizza from '../../../../assets/image/pizza-card.png';
import buy from '../../../../assets/image/buy.png';
import refresh from '../../../../assets/image/refresh.png';
const CardProduct = () => {
    return (
        <div>
            <div className='card-product-container container'>
                <CardProductItem />
                <CardProductItem />
                <CardProductItem />
                <CardProductItem />

            </div>
            <AddProductView />
        </div>

    );
};

const CardProductItem = ()=>{
    return (
        <div className='card-body'>
            <img src={pizza} alt="pizza"/>
            <div className='pizza-diameter'>
                <span>24cm</span>
                <span>32cm</span>
                <span>48cm</span>
            </div>
            <p className='card-title'>Quattro formaggi</p>
            <p className='card-desc'>Dough, Mozzarella, Cheddar, Blue, Parmesan</p>
            <p className='card-price'>119 UAH</p>
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