import {LOAD_DATA} from "../action/action";

const initialsState = {
    data: []
};


export function PizzaReducer (state=initialsState,action){
    switch (action.type){
        case LOAD_DATA:
            return {
                ...state,
                data:[...action.data]
            }
        default:return state
    }
}