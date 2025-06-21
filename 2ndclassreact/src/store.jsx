import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./TodoSlices/counterSlice"
const store=configureStore({
    reducer:{
        mycounter:myReducer
    }
})
export default store;