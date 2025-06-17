import { createSlice } from "@reduxjs/toolkit";

const coinSlice=createSlice({
    name:"mycoin",
    initialState:{
        coin:"heads",
        count:0,
        headCount:0,
        tailCount:0
    },
    reducers:{
        flipCount:(state)=>{
            state.coin=Math.random()<0.5?"Heads":"Tails"
            state.coin += 1;
            if(state.coin === "Heads")
            {
                state.headCount += 1;
            }
            else
            {
                state.tailCount += 1;
            }
        }
    }
})
export const{flipCount}=coinSlice.actions;
export default coinSlice.reducer;
