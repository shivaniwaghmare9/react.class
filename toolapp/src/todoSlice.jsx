

 
 //===============================================(30-04-2025(payload)[todo-list])===============================================================================================================================================
 import { createSlice } from "@reduxjs/toolkit"
const todoSlice=createSlice({
     name:"todo",
     initialState:{
        task:[]
     },
     reducers:{
        addTask:(state,actions)=>{
            console.log(actions);
            state.task.push(actions.payload);
        }
     }

})
export const {addTask}=todoSlice.actions;
export default todoSlice.reducer;