import {DELETE_ALL_ORDER_BASKET, DELETE_ORDER_BASKET, GET_BASKET, LOAD_BASKET} from "../action/action";

const initState = {
    count:0,
    price:0,
    data:[]
}

export function BackReducer (state=initState,action){
    switch (action.type){
        case GET_BASKET: return state
        case LOAD_BASKET:
            console.log(state.data)
            return {
                count: state.count+1,price:state.price+action.data.price, data:[...state.data,action.data]
            }
        case DELETE_ORDER_BASKET:
            let objActive = {...state.data.filter(i=>i.id === action.id)};
            return {
              count: state.count-1,price: state.price - objActive[0].price, data: [...state.data.filter(i=>i.id !== objActive[0].id)]
            }
        case DELETE_ALL_ORDER_BASKET:
            return {
                count: 0,price:0, data: []
            }

        default: return state
    }
}