import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productSlice"; 
import registerReducer from "./registerSlice"; 
import userReducer from "./userSlice";

export const myStore = configureStore({
    reducer: {
        productSlice: productReducer, 
        registerSlice: registerReducer,
        user: userReducer,
    },
});