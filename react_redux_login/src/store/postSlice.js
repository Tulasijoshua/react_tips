import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchPosts = createAsyncThunk('post/fetchPosts', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.data)
})

const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            state.error = ''
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.posts = [];
            state.error = action.error.message;
        })
    }
})

export default postSlice.reducer;