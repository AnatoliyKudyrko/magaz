import React from 'react';
import './typeproduct.css';
const obj = [
    {count:1,name:'Pizza'},
    {count:2,name:'Sushi'},
    {count:3,name:'Salad'},
    {count:4,name:'Dessert'},
    {count:5,name:'Drinks'},

]
const TypeProduct = () => {
    return (
        <div className='panel-type'>
            <TypeProductItem item={obj}/>
        </div>
    );
};

const TypeProductItem = (props)=>{
    return (
        props.item.map(i=><li key={i.count} ><button className='button-type'>{i.name}</button></li>)
    )
}

export default TypeProduct;