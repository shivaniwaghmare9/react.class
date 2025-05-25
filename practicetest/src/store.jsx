
// import { configureStore } from "@reduxjs/toolkit"
// import myReducer from "./ThemeSlice"
// const store=configureStore({
//     reducer:{
//       mycolor:myReducer
//     }
// })
// export default store;



//============================================================TODO=======================================================================
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"
const store=configureStore({
    reducer:{
      todo:todoReducer
    }
})
export default store;