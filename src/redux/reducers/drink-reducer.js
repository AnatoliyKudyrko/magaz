import {LOAD_DATA_DRINK} from "../action/action";


const initialsState = {
    data: []
};

export function DrinkReducer(state=initialsState,action){
    switch (action.type){
        case LOAD_DATA_DRINK:
            return {
                ...state,
                data:[...action.data]
            }
        default:return state
    }
}