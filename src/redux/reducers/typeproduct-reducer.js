import {LOAD_TYPE_PRODUCT, UPDATE_TYPE_PRODUCT} from "../action/action";

const initialState = [
    {count:1,name:'Pizza',status:false},
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
            let obj =  state.map(product => {
                let objActive = {};
                let objAll = {};
                if (product.count === action.id-1) {
                    objActive= {...product, status: product.status = true}
                };
                    objAll= {...product, status: product.status = false}

                return {...objActive,objAll};
            });

            console.log(obj)

        default: return state
    }
}