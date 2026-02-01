import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name:'theme',
    initialState:{
        value : 'light'
    },
    reducers:{
        changeTheme:(state)=>{
            state.value = state.value === 'light' ? 'dark' : 'light'}
    }
})

export default themeSlice.reducer;

export const {changeTheme} = themeSlice.actions;
