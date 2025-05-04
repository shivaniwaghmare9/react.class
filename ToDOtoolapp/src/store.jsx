// ====================================COUNTERSTORE==================================================================================================
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
// import { configureStore } from "@reduxjs/toolkit"
// import colorReducer from "./colorSlice"
// const store=configureStore({
//     reducer:{
//         // your reducers gose here
//        mycolor:colorReducer
//     }
// })
// export default store;
// =====================================NAMESTORE=========================================================================================

// import { configureStore } from "@reduxjs/toolkit";
// import nameReducer from "./nameSlice"
// const store=configureStore({
//     reducer:{
//         //your reducers gose here
//         myname:nameReducer
//     }
// })
// export default store;

//==============================================(TODO-APP)=====================================================================================================================

// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./todoSlice"
// const store=configureStore({
//     reducer:{
//         //your reducers gose here
//         todo:todoReducer

//     }
// })
// export default store;

//==========================================(TODO-APP-DELETE FUNCTIONALITY)==========================================================================================================

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"
const store=configureStore({
    reducer:{
        //Your reducers gose here
        todo:todoReducer

    }
})
export default store;