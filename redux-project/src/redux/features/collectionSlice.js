import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('collection')) || []

const collectionSlice = createSlice({
    name:'collection',
    initialState,
    reducers:{
        addCollection:(state,action)=>{

        },
        removeCollection:(state,action)=>{

        },
        clearCollection:(state)=>{

        }
    }
})

export default collectionSlice.reducer;
export const {addCollection,removeCollection,clearCollection} = collectionSlice.actions;