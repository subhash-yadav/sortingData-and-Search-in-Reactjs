import axios from "axios"

export const getData = () =>{
   return axios.get("https://dummyjson.com/products");
}