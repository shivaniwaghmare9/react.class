//==============================================(29-04-2025)============================================================================================================================================
import { createSlice } from "@reduxjs/toolkit"
const nameSlice=createSlice({
    name:"myname",
    initialState:{
        user:"riyaa"
    },
    reducers:{
        changename:(state)=>{
            state.user="Shivani";
        }
    }
})
export const {changename}=nameSlice.actions;
export default nameSlice.reducer;