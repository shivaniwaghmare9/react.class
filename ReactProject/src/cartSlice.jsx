
import { createSlice } from "@reduxjs/toolkit"
const cartslice=createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addCart:(state, actions)=>{

        }
    }
})
export const {addCart}=cartslice.actions;
export default cartslice.reducer;