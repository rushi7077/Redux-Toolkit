import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:10
    },
    reducers:{
        increment: (state)=>{
            state.value += 1
        },
        decrement:(state)=>{
            state.value -= 1
        },
        incrementBy:(state,action)=>{
            state.value += action.payload
        },
        decrementBy:(state,action)=>{
            state.value -= action.payload
        }
    }
})

export const {increment,decrement,incrementBy,decrementBy} = counterSlice.actions

export default counterSlice.reducer