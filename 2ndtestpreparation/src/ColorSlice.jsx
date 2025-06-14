
import { createSlice } from "@reduxjs/toolkit"
const ColorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"blue"
    },
    reducers:{
        ChangeColor:(state,actions)=>{
            console.log(actions.payload)
            state.color=(actions.payload)
        }
    }
})
export const{ChangeColor}=ColorSlice.actions;
export default ColorSlice.reducer;