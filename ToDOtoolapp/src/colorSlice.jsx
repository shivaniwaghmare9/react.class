 //===========================================(COLOR-payload)============================================================================================================================  
import { createSlice } from "@reduxjs/toolkit";
const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"red"
    },
    reducers:{
        changeColor:(state,actions)=>{
            console.log(actions.payload);
            state.color=actions.payload;
        }
    }
})
export const {changeColor}=colorSlice.actions;
export default colorSlice.reducer;