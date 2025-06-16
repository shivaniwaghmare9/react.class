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
       },
       taskComplete:(state,actions)=>{
        for(var i=0; i<state.task.length; i++)
        {
            if(state.task[i].id==actions.payload.id)
            {
                state.task[i].taskStatus=true;
            }
        }
       },
       taskInComplete:(state,actions)=>{
        for(var i=0; i<state.task.length; i++)
        {
            if(state.task[i].id==actions.payload.id)
            {
                state.task[i].taskStatus=false;
            }
        }
       },
       myEdit:(state,actions)=>{
        for(var i=0; i<state.task.length; i++)
        {
            if(state.task[i].id==actions.payload.id)
            {
                state.task[i].work=actions.payload.work;
            }
        }
       }
    }
})
export const{addTask,RemoveTask,ReByIndex,taskComplete,taskInComplete,myEdit}=todoSlice.actions;
export default todoSlice.reducer;