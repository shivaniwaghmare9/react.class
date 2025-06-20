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