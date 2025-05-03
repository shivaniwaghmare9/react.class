// //====================================COUNTERSTORE==================================================================================================
// import { configureStore } from "@reduxjs/toolkit"
// import myReducer from "./counterSlice"
// const store=configureStore({
//     reducer:{
//         // your reducers gose here
//         mycounter:myReducer
//     }
// })
// export default store;

//====================================COLORSTORE(payload)==================================================================================================
import { configureStore } from "@reduxjs/toolkit"
import colorReducer from "./colorSlice"
const store=configureStore({
    reducer:{
        // your reducers gose here
       mycolor:colorReducer
    }
})
export default store;