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
            //  console.log(actions.payload)
            // state.task=state.task.filter(item=>item.id!=actions.payload.id);
            state.task=state.task.filter(function(key){
                if(key.id==actions.payload.id)
                {
                    return false;
                }
                else{
                    return true;
                }
            })
        },
        DeleteByIndex:(state,actions)=>{
            state.task.splice(actions.payload.id,1);
            console.log(actions.payload.id)
        },
        Complete:(state,actions)=>{
            for(var i=0; i<state.task.length;i++)
            {
                if(state.task[i].id==actions.payload.id)
                {
                    state.task[i].taskStatus=true;
                }
            }
        },
        InComplete:(state,actions)=>{
            for(var i=0; i<state.task.length;i++)
            {
                if(state.task[i].id==actions.payload.id)
                {
                    state.task[i].taskStatus=false;
                }
            }
        }
    }
})
export const{addTask,Deletetask,DeleteByIndex,Complete,InComplete}=todoSlice.actions;
export default todoSlice.reducer;