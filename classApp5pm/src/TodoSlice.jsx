import { createSlice } from "@reduxjs/toolkit";

const TodoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            state.task
        }
    }
})