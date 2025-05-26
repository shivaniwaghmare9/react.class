
import { createSlice } from "@reduxjs/toolkit"

const todoSlice=createSlice({
    name:"mycoin",
    initialState:{
      coin:"teal"
    },
    reducers:{
        change:(state)=>{
            state.coin="head";
        }
    }

})
export const {change}=todoSlice.actions;
export default todoSlice.reducer;