import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "Counter",
    initialState: {
        counter: 0,
    },
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            if(state.counter > 0) {
                state.counter -= 1;
            }
        },
        reset: (state) => {
            state.counter = 0;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.counter += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            if (state.counter - action.payload >= 0) {
                state.counter -= action.payload;
            }else {
                state.counter = 0;
            }
            
        }
    }
});

export const { increment, decrement, reset, incrementByAmount, decrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;