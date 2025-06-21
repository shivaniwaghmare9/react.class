//=====================================================================COUNTERAPP==================================================================
// import { configureStore } from "@reduxjs/toolkit";
// import myReducer from "./TodoSlices/counterSlice"
// const store=configureStore({
//     reducer:{
//         mycounter:myReducer
//     }
// })
// export default store;

//==================================================================COLORSLICE========================================================

// import { configureStore } from "@reduxjs/toolkit";
// import myReducer from "./TodoSlices/colorSlice"
// const store=configureStore({
//     reducer:{
//         mycolor:myReducer
//     }
// })
// export default store;

//=================================================================TODOLIST================================================================================================================================================

import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./TodoSlices/todoSlice"
const store=configureStore({
    reducer:{
        todo:myReducer
    }
})
export default store;