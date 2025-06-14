// import { configureStore } from "@reduxjs/toolkit";
// import ColorReducer from "./ColorSlice"
// const store=configureStore({
//     reducer:{
//          mycolor:ColorReducer
//     }
// })
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import ColorReducer from "./ColorSlice"
const store=configureStore({
    reducer:{
         mycolor:ColorReducer
    }
})
export default store;