import React,{useEffect,useState,useRef,useCallback} from 'react';
import './typeproduct.css';
import {useDispatch, useSelector} from "react-redux";
import {UpdateTypeProduct} from "../../../../redux/action/action";

const TypeProduct = (props) => {
    const state = useSelector(state => state.typeProduct);
    return (
        <div className='panel-type'>
            <TypeProductItem item={state} getId={props.getId}/>
        </div>
    );
};

const TypeProductItem = (props)=>{
    const [id,setID] = useState();
    useEffect(()=>{

    })
    const idItem = (id)=>{
        setID(id);
    }
    return (
        props.item.map(i=>
            <li  key={i.count} >
            <Btn  name={i.name} id={i.count}
                  status={i.status} getId={props.getId}
                  idItem={idItem}

            />
           </li>)
    )
}

const Btn =(props)=>{
    const dispatch = useDispatch();

    useEffect(()=>{

    },[props.status])

    const idGetting = ()=>{
        props.getId(props.id);
        props.idItem(props.id)
    };
    return (
        <label className="checkbox-btn">
            <input type="checkbox" checked={props.status}  onChange={(e)=>dispatch(UpdateTypeProduct(props.id))} onClick={()=>idGetting()}/>
                <span>{props.name } </span>
        </label>
        )
}

export default TypeProduct;