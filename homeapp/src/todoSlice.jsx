import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            state.task.push(actions.payload)
        },
        // taskDelete:(state,actions)=>{
        //     state.task=state.task.filter(item=>item.id!=actions.payload.id)
        // }
        taskDelete:(state,actions)=>{
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
        removeByIndex:(state,actions)=>{
              state.task.splice(actions.payload.id,1)
        }
    }
})
export const{addTask,taskDelete,removeByIndex}=todoSlice.actions;
export default todoSlice.reducer;