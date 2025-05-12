// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit"
const store=configureStore({
    reducer:{
        //your reducer gose hare
    }
})
export default store;

// export const persistor = persistStore(store);