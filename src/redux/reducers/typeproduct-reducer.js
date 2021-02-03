import {LOAD_TYPE_PRODUCT, UPDATE_TYPE_PRODUCT} from "../action/action";

const initialState = [
    {count:1,name:'Pizza',status:true},
    {count:2,name:'Sushi',status:false},
    {count:3,name:'Salad',status:false},
    {count:4,name:'Dessert',status:false},
    {count:5,name:'Drinks',status:false},
]
 export function TypeProductReducer (state=initialState,action){
    switch (action.type){
        case LOAD_TYPE_PRODUCT: return {
            ...state
        }
        case UPDATE_TYPE_PRODUCT:
            let objDefault =  state.map(product => {
                return   {...product, status: product.status = false};
            });
            let objActive =  objDefault.map(product => {
                let obj = {};
                if (product.count === action.id) {
                    obj=  {...product, status: product.status = true}
                };
              return {...product,...obj}
            });
          return objActive;
        default: return state
    }
}