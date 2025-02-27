import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    isLoggedIn: false,
}

const authSlice = createSlice({ 
    name: "isLoggedIn",
    initialState,     
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    },      
});

export const { setIsLoggedIn } = authSlice.actions;
export default authSlice.reducer;