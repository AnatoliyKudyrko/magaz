import {getPizza} from "../../dal/api";

export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_TYPE_PRODUCT = 'LOAD_TYPE_PRODUCT';
export const UPDATE_TYPE_PRODUCT = 'UPDATE_TYPE_PRODUCT';
export const GET_BASKET = 'GET_BASKET';
export const LOAD_BASKET = 'LOAD_BASKET';
export const DELETE_ORDER_BASKET = 'DELETE_ORDER_BASKET';
export const DELETE_ALL_ORDER_BASKET = 'DELETE_ALL_ORDER_BASKET';

function FetchPizza(data){
    return {
        type:LOAD_DATA,
        data
    }

}


export function DeleteOrderBasket(id){
    return {
        type:DELETE_ORDER_BASKET,
        id
    }
}
export function DeleteAllOrderBasket(){
    return {
        type:DELETE_ALL_ORDER_BASKET
    }
}
export function LoadBasket(data){
    return {
        type:LOAD_BASKET,
        data
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