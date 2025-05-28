
import { createSlice } from "@reduxjs/toolkit"

const coinSlice=createSlice({
    name:"mycoin",
    initialState:{
      coin:"Heads",
      count:0,
      headscount:0,
      tailscount:0,

    },
    reducers:{
        flipcoin:(state)=>{
            state.coin=Math.random() < 0.5 ? "Heads" :" tails";
            state.count += 1;
            if(state.coin === "Heads")
            {
                state.headscount += 1;
            }
            else
            {
                state.tailscount += 1;
            }
        }
    }

})
export const {flipcoin}=coinSlice.actions;
export default coinSlice.reducer;