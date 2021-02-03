import {PizzaReducer} from "./pizza-reducer";
import {combineReducers} from "redux";
import {TypeProductReducer} from "./typeproduct-reducer";
import {BackReducer} from "./basket-reducer";
import {SushiReducer} from "./sushi-reducer";
import {SaladReducer} from "./salad-reducer";
import {DessertReducer} from "./dessert-reducer";
import {DrinkReducer} from "./drink-reducer";


export default combineReducers({
    pizza:PizzaReducer,
    typeProduct:TypeProductReducer,
    basket:BackReducer,
    sushi:SushiReducer,
    salad:SaladReducer,
    dessert:DessertReducer,
    drink:DrinkReducer
})
