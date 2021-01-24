import {PizzaReducer} from "./pizza-reducer";
import {combineReducers} from "redux";
import {TypeProductReducer} from "./typeproduct-reducer";
import {BackReducer} from "./basket-reducer";


export default combineReducers({
    pizza:PizzaReducer,
    typeProduct:TypeProductReducer,
    basket:BackReducer
})
