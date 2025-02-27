import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../counterSlice';  // Fix import path

export const Store = configureStore({
    reducer: {
        counter: counterReducer  // Assign it to a key
    }
});
