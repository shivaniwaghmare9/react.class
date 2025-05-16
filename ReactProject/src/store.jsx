// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
const store=configureStore({
    reducer:{
        //your reducer gose hare
        mycart:cartReducer
    }
})
export default store;

// export const persistor = persistStore(store);