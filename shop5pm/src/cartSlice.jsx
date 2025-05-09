
import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"mycart",
    initialState:{
       cart:[]
    },
    reducers:{
        addCart:(state,actions)=>{
        // state.cart=state.cart.filter(key=>key.id!=actions.payload.id)
        state.cart.push(actions.payload);
           
        }
    }
})
export const{addCart}=cartSlice.actions;
export default cartSlice.reducer;