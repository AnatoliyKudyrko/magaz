import React,{useEffect,useState,useRef} from 'react';
import './typeproduct.css';
import {useDispatch, useSelector} from "react-redux";
import {UpdateTypeProduct} from "../../../../redux/action/action";

const TypeProduct = () => {
    const state = useSelector(state => state.typeProduct);
    return (
        <div className='panel-type'>
            <TypeProductItem item={state} />
        </div>
    );
};

const TypeProductItem = (props)=>{

    return (
        props.item.map(i=><li  key={i.count} ><Btn  name={i.name} id={i.count} status={i.status}  /></li>)
    )
}

const Btn =(props)=>{
    const [value, setValue] = useState(props.status);
    const dispatch = useDispatch();
   const onChanges = (e)=>{
       setValue(e.target.checked);
       dispatch(UpdateTypeProduct(props.id))
   }
    return (
        <label className="checkbox-btn">
            <input type="checkbox" checked={value}  onChange={(e)=>onChanges(e)} />
                <span>{props.name } </span>
        </label>
        )
}

export default TypeProduct;