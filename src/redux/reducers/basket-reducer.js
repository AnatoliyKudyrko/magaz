import {DELETE_ORDER_BASKET, GET_BASKET, LOAD_BASKET} from "../action/action";

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
            let obj = state.data.filter(i=>i.id === action.id);
            console.log(obj)
            return {
              ...state
            }

        default: return state
    }
}