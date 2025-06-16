import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            console.log(actions)
            state.task.push(actions.payload)
        },
        RemoveTask:(state,actions)=>{
            console.log(actions.payload.id)
            state.task=state.task.filter(function(key){
                if(key.id==actions.payload.id)
                {
                    return false;
                }
                else
                {
                    return true;
                }
            })
        },
        // RemoveTask:(state,actions)=>{
        //     console.log(actions.payload)
        //     state.task=state.task.filter(items=>items.id!=actions.payload.id)
        // }
       ReByIndex:(state,actions)=>{
        state.task.splice(actions.payload.id,1);
        console.log(actions.payload.id)
       }
    }
})
export const{addTask,RemoveTask,ReByIndex}=todoSlice.actions;
export default todoSlice.reducer;