
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
// import { configureStore } from "@reduxjs/toolkit"
// import myReducer from "./nameSlice";
// const store=configureStore({
//   reducer:{
//       myname:myReducer
//   }
// })
// export default store;

// //=================================================(30-04-2025(payload))==============================================================================

import { configureStore } from "@reduxjs/toolkit"
import colorReducer from "./colorSlice";
const store=configureStore({
  reducer:{
      mycolor:colorReducer
  }
})
export default store;

//=================================================(30-04-2025(payload)[todo-list])==============================================================================

// import { configureStore } from "@reduxjs/toolkit"
// import todoReducer from "./todoSlice";
// const store=configureStore({
//   reducer:{
//       todo:todoReducer
//   }
// })
// export default store;

//===============================================(01-05-2025(todo App))============================================================================================

// import { configureStore } from "@reduxjs/toolkit"
// import todoReducer from "./todoSlice";
// const store=configureStore({
//   reducer:{
//       todo:todoReducer
//   }
// })
// export default store;

//==============================================(02-05-2025(todo))=============================================================================================================

// import { configureStore } from "@reduxjs/toolkit"
// import todoReducer from "./todoSlice";
// const store=configureStore({
//   reducer:{
//     //your reducers gose here
//       todo:todoReducer
//   }
// })
// export default store;