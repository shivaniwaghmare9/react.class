
import {  toast } from 'react-toastify';
import { createSlice } from "@reduxjs/toolkit"
const cartslice=createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
       addCart:(state,actions)=>{
          const mydata= state.cart.filter(key=>key.id==actions.payload.id);
            if (mydata.length>=1)
            {
               toast.error("This Product Aleready Added!!");
            }
            
            else 
            {
                state.cart.push(actions.payload);
            }
    
    },
    

    
                    
    
        
        
}

})

export const {addCart}=cartslice.actions;
export default cartslice.reducer;
