
// import { createSlice } from "@reduxjs/toolkit";
// const colorSlice=createSlice({
//     name:"mycolor",
//     initialState:{
//         color:"blue"
//     },
//     reducers:{
//         changeClr:(state)=>{
//             state.color="red"
//         }
//     }
// })
// export const {changeClr}=colorSlice.actions;
// export default colorSlice.reducer;


//==================================================THEMECHNAGE(COLOR)======================================================================

import { createSlice } from "@reduxjs/toolkit";
const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"blue"
    },
    reducers:{
        changeClr:(state,actions)=>{
            state.color=(actions.payload)
        }
    }
})
export const {changeClr}=colorSlice.actions;
export default colorSlice.reducer;