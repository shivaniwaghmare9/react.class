//=================================================(TODO-APP)======================================================================================================================
// import { createSlice } from "@reduxjs/toolkit";
// const todoSlice=createSlice({
//     name:"todo",
//     initialState:{
//         task:[]
//     },
//     reducers:{
//         addTask:(state,actions)=>{
//             console.log(actions);
//             state.task.push(actions.payload);
//         },
                       
//     }
// })
// export const{addTask}=todoSlice.actions;
// export default todoSlice.reducer;

//========================================================(TODO-DELETE FUNCTIONALITY)===============================================================================================================

// import { createSlice } from "@reduxjs/toolkit";
// const todoSlice=createSlice({
//     name:"todo",
//     initialState:{
//         task:[]
//     },
//     reducers:{
//         addTask:(state,actions)=>{
//             console.log(actions);
//             state.task.push(actions.payload);
//         },
//         removeTask:(state,actions)=>{
//             console.log(actions.payload);
//             state.task=state.task.filter(item=>item.id!=actions.payload.id);
//         },
        //removeTask:(state,actions)=>{
        //    console.log(actions.payload.id);
        //    state.task=state.task.filter(function(key){
        //     if(key.id==actions.payload.id)
        //     {
        //         return false;
        //     }
        //     else
        //     {
        //         return true;
        //     }
        //    })
        // },
//         remByIndex:(state,actions)=>{
//             state.task.splice(actions.payload.id,1);
//             console.log(actions.payload.id);
//         }
//     }
// })
// export const{addTask,removeTask,remByIndex}=todoSlice.actions;
// export default todoSlice.reducer;

//==============================================(TODO-ADDITIONAL-FUNCTIONALITY)====================================================================================================================

// import { createSlice } from "@reduxjs/toolkit";
// const todoSlice=createSlice({
//     name:"todo",
//     initialState:{
//         task:[]
//     },
//     reducers:{
//         addTask:(state,actions)=>{
//             console.log(actions);
//             state.task.push(actions.payload);
//         },
//         // RemoveTask:(state,actions)=>{
//         //     console.log(actions.payload);
//         //     state.task=state.task.filter(item=>item.id!=actions.payload.id)
//         // }
//         RemoveTask:(state,actions)=>{
//             console.log(actions.payload.id);
//             state.task=state.task.filter(function(key){
//                 if(key.id==actions.payload.id)
//                 {
//                     return false;
//                 }
//                 else{
//                     return true;
//                 }
//             })
//         },
//         removeBYIndex:(state,actions)=>{
//             state.task.splice(actions.payload.id,1)
//             console.log(actions.payload.id);
//         },
//         taskComplete:(state,actions)=>{
//             for(var i=0; i<state.task.length; i++)
//             {
//                 if(state.task[i].id==actions.payload.id)
//                 {
//                     state.task[i].taskStatus=true;
//                 }
//             }
//         },
//         taskInComplete:(state,actions)=>{
//             for(var i=0; i<state.task.length; i++)
//             {
//                 if(state.task[i].id==actions.payload.id)
//                 {
//                     state.task[i].taskStatus=false;
//                 }
//             }
//         },
//         myEditSave:(state,actions)=>{
//             for(var i=0; i<state.task.length; i++)
//             {
//                if (state.task[i].id==actions.payload.id)
//                {
//                 state.task[i].work=actions.payload.work;
//                }
//             }
//         }
//     }
// })
// export const{addTask,RemoveTask,removeBYIndex,taskComplete,taskInComplete,myEditSave}=todoSlice.actions;
// export default todoSlice.reducer;

//==================================================(WORK)==========================================================================================================================================
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
        }
    }
})
export const {addTask,RemoveTask}=todoSlice.actions;
export default todoSlice.reducer;