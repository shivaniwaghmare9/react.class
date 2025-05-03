//==========================================(NAMESLICE)========================================================================================im

import { createSlice } from "@reduxjs/toolkit";
const nameSlice=createSlice({
    name:"myname",
    initialState:{
        user:"Shivani"
    },
    reducers:{
        changeName:(state)=>{
            state.user="Riyaa"
        }
    }
})
export const{changeName}=nameSlice.actions;
export default nameSlice.reducer;