

import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./counterSlice";
const store=configureStore({
  reducer:{
    //your reducer gose here
    mycounter:myReducer
  }
})
export default store;