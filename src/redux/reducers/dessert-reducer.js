import {LOAD_DATA_Dessert} from "../action/action";


const initialsState = {
    data: []
};

export function DessertReducer(state=initialsState,action){
    switch (action.type){
        case LOAD_DATA_Dessert:
            return {
                ...state,
                data:[...action.data]
            }
        default:return state
    }
}