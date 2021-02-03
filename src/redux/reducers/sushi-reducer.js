import {LOAD_DATA, LOAD_DATA_SUSHI} from "../action/action";

const initialsState = {
    data: []
};

export function SushiReducer(state=initialsState,action){
    switch (action.type){
        case LOAD_DATA_SUSHI:
            return {
                ...state,
                data:[...action.data]
            }
        default:return state
    }
}