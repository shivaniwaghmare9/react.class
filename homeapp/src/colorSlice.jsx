import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"red"
    },
    reducers:{
        bgClrChange:(state,actions)=>{
            console.log(actions.payload)
            state.color=(actions.payload)
        }
    }
})
export const{bgClrChange}=colorSlice.actions;
export default colorSlice.reducer;