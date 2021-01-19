import {LOAD_DATA} from "../action/action";

const initialsState = [];


export function PizzaReducer (state=initialsState,action){
    switch (action.type){
        case LOAD_DATA:
            return {
            ...state, ...action.data
        }
        default:return state
    }
}