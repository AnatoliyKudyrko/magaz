import {getPizza} from "../../dal/api";

export const LOAD_DATA = 'LOAD_DATA';

function FetchPizza(data){
    return {
        type:LOAD_DATA,
        data
    }

}

export function FetchPizzaThunk (){
    return function (dispatch){
       getPizza().then(response=>dispatch(FetchPizza(response.data)))
    }
}