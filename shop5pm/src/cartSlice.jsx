//import { ToastContainer, toast } from 'react-toastify';
import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"mycart",
    initialState:{
       cart:[]
    },
    reducers:{
        addCart:(state,actions)=>{
          const mydata= state.cart.filter(key=>key.id==actions.payload.id);
            if (mydata.length>=1)
            {
                alert("This Product Aleready Added!");
            }
            else 
            {
                state.cart.push(actions.payload);
            } 
           
        },
    qntyIncr:(state,actions)=>{
        for(var i=0; i<state.cart.length; i++)
        {
            if(state.cart[i].id==actions.payload.id)
            {
                state.cart[i].qnty++;
            }
        }
    },
    qntyDecr:(state,actions)=>{
        for(var i=0; i<state.cart.length; i++)
        {
            if(state.cart[i].id==actions.payload.id)
            {
                if(state.cart[i].qnty<=1)
                {
                    alert("Quantity not less than 1")
                }
                else
                {
                    state.cart[i].qnty--;
                }
            }
            
        }
    },
    remove:(state,actions)=>{
      state.cart=state.cart.filter(key=>key.id!=actions.payload.id)
    }

    
    }
    
    

})


export const{addCart,qntyDecr,qntyIncr,remove}=cartSlice.actions;
export default cartSlice.reducer;