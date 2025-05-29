import { createSlice } from "@reduxjs/toolkit"
const todoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            console.log(actions);
            state.task.push(actions.payload)
        },
        Deletetask:(state,actions)=>{
             console.log(actions.payload)
            state.task=state.task.filter(item=>item.id!=actions.payload.id);
        }
    }
})
export const{addTask,Deletetask}=todoSlice.actions;
export default todoSlice.reducer;