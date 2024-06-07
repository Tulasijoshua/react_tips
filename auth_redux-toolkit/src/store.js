import { configureStore } from "@reduxjs/toolkit";
import {authSlice} from 

const store = configureStore({
    reducer: {
        user: authSlice
    }
})

export default store;