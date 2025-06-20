import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"red"
    },
    reducers:{
        bgClrChange:(state)=>{
            state.color="green"
        }
    }
})
export const{bgClrChange}=colorSlice.actions;
export default colorSlice.reducer;