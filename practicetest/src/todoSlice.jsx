import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            console.log(actions.payload);
            state.task.push(actions.payload)
        },
        Remove:(state,actions)=>{
            state.task=state.task.filter(key=>key.id!=actions.payload.id)
        }
    }
})
export const{addTask,Remove}=todoSlice.actions;
export default todoSlice.reducer;