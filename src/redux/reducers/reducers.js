import {PizzaReducer} from "./pizza-reducer";
import {combineReducers} from "redux";
import {TypeProductReducer} from "./typeproduct-reducer";


export default combineReducers({
    pizza:PizzaReducer,
    typeProduct:TypeProductReducer
})
