import React,{useEffect,useState,useRef,useCallback} from 'react';
import './typeproduct.css';
import {useDispatch, useSelector} from "react-redux";
import {UpdateTypeProduct} from "../../../../redux/action/action";

const TypeProduct = (props) => {
    const state = useSelector(state => state.typeProduct);
    return (
        <div className='panel-type'>
            <TypeProductItem item={state} getId={props.getId} getName={props.getName}/>
        </div>
    );
};

const TypeProductItem = (props)=>{

    return (
        props.item.map(i=>
            <li  key={i.count} >
            <Btn  name={i.name} id={i.count}
                  status={i.status} getName={props.getName}
            />
           </li>)
    )
}

const Btn =(props)=>{
    const dispatch = useDispatch();
    useEffect(()=>{
    },[props.status])

    return (
        <label className="checkbox-btn">
            <input type="checkbox" checked={props.status}
                   onChange={(e)=>dispatch(UpdateTypeProduct(props.id))}
                   onClick={()=>props.getName(props.name)}

            />
                <span>{props.name } </span>
        </label>
        )
}

export default TypeProduct;