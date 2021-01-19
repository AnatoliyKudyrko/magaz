import axios from "axios";


export const getPizza= ()=>{
    return axios.get('https://private-anon-1820e77425-pizzaapp.apiary-mock.com/restaurants/2/menu?category=Pizza')
        .then(response=>response.data.filter(i=>i.category==='Pizza'));
}
export const getDrink= ()=>{
    return axios.get('https://private-anon-1820e77425-pizzaapp.apiary-mock.com/restaurants/2/menu?category=Pizza')
        .then(response=>response.data.filter(i=>i.category==='Dryck'));
}