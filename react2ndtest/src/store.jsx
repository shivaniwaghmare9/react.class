import { configureStore } from "@reduxjs/toolkit";
import coinReducer from"./todoSlice";
const store=configureStore({
    reducer:{
     mycoin:coinReducer
    }
})
export default store;