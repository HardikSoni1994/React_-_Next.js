import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        counterReducer,
    },
});

// Action
export type RootState = ReturnType<typeof store.getState>