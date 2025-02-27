import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 100 },  // Use an object to store state
    reducers: {
        increaseby1: (state) => {
            state.value += 1;  // Correct state mutation
        },
        increaseby5: (state) => {
            state.value += 5;  // Correct state mutation
        }
    }
});

export const { increaseby1, increaseby5 } = counterSlice.actions;

export default counterSlice.reducer;
