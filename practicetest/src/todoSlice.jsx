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
            state.task.splice(actions.payload.id,1)
            console.log(actions.payload.id)
        },
        RemoveTask:(state,actions)=>{
            state.task=state.task.filter(key=>key.id!=actions.payload.id)
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
            for(var i=0; i<state.task.length;i++)
            {
                if(state.task[i].id==actions.payload.id)
                {
                    state.task[i].work=actions.payload.work;
                }
            }
        }

    }
})
export const{addTask,Remove,RemoveTask,taskComplete,taskInComplete,myEdit}=todoSlice.actions;
export default todoSlice.reducer;