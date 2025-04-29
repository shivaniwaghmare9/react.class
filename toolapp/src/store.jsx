
// import { configureStore } from "@reduxjs/toolkit";
// import myReducer from "./counterSlice";
// const store=configureStore({
//   reducer:{
//     //your reducer gose here
//     mycounter:myReducer
//   }
// })
// export default store;



//==========================================(work)======================================================================================================================
// import { configureStore } from "@reduxjs/toolkit"
// import myReducer from "./counterSlice";
// const store= configureStore({
//     reducer:{
//       mycounter:myReducer

//     }
// })
// export default store;

//========================================(29-04-2025)================================================================================================
import { configureStore } from "@reduxjs/toolkit"
import myReducer from "./nameSlice";
const store=configureStore({
  reducer:{
      myname:myReducer
  }
})
export default store;