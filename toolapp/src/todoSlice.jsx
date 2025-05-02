//===============================================(30-04-2025(payload)[todo-list])===============================================================================================================================================
//  import { createSlice } from "@reduxjs/toolkit"
// const todoSlice=createSlice({
//      name:"todo",
//      initialState:{
//         task:[]
//      },
//      reducers:{
//         addTask:(state,actions)=>{
//             console.log(actions);
//             state.task.push(actions.payload);
//         }
//      }

// })
// export const {addTask}=todoSlice.actions;
// export default todoSlice.reducer;


//===============================================(01-05-2025(payload)[todo-App])===============================================================================================================================================
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
        },
         // removeTask:(state,actions)=>{
         //    //console.log(actions.payload);
         //    state.task=state.task.filter(item=>item.id!=actions.payload.id)
         // },
         removeTask:(state,actions)=>{
            console.log(actions.payload.id);
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
         remByIndex:(state,actions)=>{
          state.task.splice(actions.payload.id,1)
            console.log(actions.payload.id);
         }
     }

})
export const {addTask,removeTask,remByIndex}=todoSlice.actions;
export default todoSlice.reducer;

