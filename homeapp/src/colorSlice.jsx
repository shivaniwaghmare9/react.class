import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"blue"
    },
    reducers:{
        bglClrChange:(state)=>{
            state.color="darkred"
        }
    }
})
export const{bglClrChange}=colorSlice.actions;
export default colorSlice.reducer;