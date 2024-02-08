const { configureStore } = "@reduxjs/toolkit";
import todoReducer from './todoSlicer'

export const store = configureStore({
    todo: todoReducer
})