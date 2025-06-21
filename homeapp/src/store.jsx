// import { configureStore } from "@reduxjs/toolkit";
// import myReducer from "./colorSlice"
// const store=configureStore({
//     reducer:{
//         mycolor:myReducer
//     }
// })
// export default store;




import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./todoSlice"
const store=configureStore({
    reducer:{
        todo:myReducer
    }
})
export default store;