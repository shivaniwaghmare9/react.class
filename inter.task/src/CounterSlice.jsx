import { createSlice } from "@reduxjs/toolkit"
const CounterSlice=createSlice({
    name:"mycounter",
    initialState:{
        count:0
    },
    reducers:{
        Increment:(state)=>{
            state.count++;
        },
        Decrement:(state)=>{
            if(state.count==0){
                alert("not less then 0")
            }
            else{
             state.count--;
            }
           
        }
    }
})
export const{Increment,Decrement}=CounterSlice.actions;
export default CounterSlice.reducer;
     