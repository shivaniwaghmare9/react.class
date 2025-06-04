//===========================================================TODOAPP======================================================================
// import { configureStore } from "@reduxjs/toolkit"
// import todoReducer from "./TodoSlice"
// const store=configureStore({
//     reducer:{
//       todo:todoReducer
//     }
// })
// export default store;

//=======================================================COUNTERAPP================================================================================
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./CounterSlice"
const store=configureStore({
    reducer:{
      mycounter:counterReducer
    }
})
export default store;