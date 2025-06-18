

import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

const store=configureStore({
    reducer:{
        //your reducer gose hare
        mycart:cartReducer
    }
})
export default store;

