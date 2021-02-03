import {LOAD_DATA_SALAD} from "../action/action";


const initialsState = {
    data: []
};

export function SaladReducer(state=initialsState,action){
    switch (action.type){
        case LOAD_DATA_SALAD:
            return {
                ...state,
                data:[...action.data]
            }
        default:return state
    }
}