import {getPizza} from "../../dal/api";

export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_TYPE_PRODUCT = 'LOAD_TYPE_PRODUCT';
export const UPDATE_TYPE_PRODUCT = 'UPDATE_TYPE_PRODUCT';

function FetchPizza(data){
    return {
        type:LOAD_DATA,
        data
    }

}

function FetchTypeProduct(){
    return {
        type:LOAD_TYPE_PRODUCT
    }

}
export function UpdateTypeProduct(id){
    return {
        type:UPDATE_TYPE_PRODUCT,
        id
    }

}

export function FetchPizzaThunk (){
    return function (dispatch){
       getPizza().then(response=>dispatch(FetchPizza(response)))
    }
}