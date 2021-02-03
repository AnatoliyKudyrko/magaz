import axios from "axios";


export const getPizza= ()=>{
   return axios.get("http://localhost:4000/pizza").then(response=>response.data);
}

export const getSushi= ()=>{
   return axios.get("http://localhost:4000/sushi").then(response=>response.data);
}
export const getSalad= ()=>{
   return axios.get("http://localhost:4000/salad").then(response=>response.data);
}
export const getDessert= ()=>{
   return axios.get("http://localhost:4000/dessert").then(response=>response.data);
}
export const getDrink= ()=>{
   return axios.get("http://localhost:4000/drink").then(response=>response.data);
}
