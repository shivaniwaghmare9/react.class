
import { configureStore } from "@reduxjs/toolkit";
import MyReducer from "./todoSlice"
const store=configureStore({
    reducer:{
      todo:MyReducer
    }
})
export default store;