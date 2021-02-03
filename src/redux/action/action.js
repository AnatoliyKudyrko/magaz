import {getDessert, getDrink, getPizza, getSalad, getSushi} from "../../dal/api";

export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_DATA_SUSHI = 'LOAD_DATA_SUSHI';
export const LOAD_DATA_SALAD = 'LOAD_DATA_SALAD';
export const LOAD_DATA_Dessert = 'LOAD_DATA_Dessert';
export const LOAD_DATA_DRINK = 'LOAD_DATA_DRINK';
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

function FetchSushi(data){
    return {
        type:LOAD_DATA_SUSHI,
        data
    }

}

function FetchSalad(data){
    return {
        type:LOAD_DATA_SALAD,
        data
    }

}
function FetchDessert(data){
    return {
        type:LOAD_DATA_Dessert,
        data
    }

}
function FetchDrink(data){
    return {
        type:LOAD_DATA_DRINK,
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
export function FetchSushiThunk (){
    return function (dispatch){
        getSushi().then(response=>dispatch(FetchSushi(response)))
    }
}
export function FetchSaladThunk (){
    return function (dispatch){
        getSalad().then(response=>dispatch(FetchSalad(response)))
    }
}
export function FetchDessertThunk (){
    return function (dispatch){
        getDessert().then(response=>dispatch(FetchDessert(response)))
    }
}
export function FetchDrinkThunk (){
    return function (dispatch){
        getDrink().then(response=>dispatch(FetchDrink(response)))
    }
}