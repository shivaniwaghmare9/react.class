import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
const store=configureStore({
    reducer:{
        //your reduser gose here
        mycart:cartReducer
    }
})
export default store;