
import { configureStore } from "@reduxjs/toolkit"
import myReducer from "./ThemeSlice"
const store=configureStore({
    reducer:{
      mycolor:myReducer
    }
})
export default store;