import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "Theme",
    initialState: {
        mode: "light",
    },
    reducers: {
        toggleTheme: (state) => {
            if (state.mode === "light") {
                state.mode = "dark";
            } else {
                state.mode = "light";
            }
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;