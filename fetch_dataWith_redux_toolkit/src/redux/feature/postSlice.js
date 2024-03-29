import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((res) => 
        res.json()
    );
});

const postSlice = createSlice(({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPosts.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        })
        .addCase(getPosts.rejected, (state, action) => {
            state.loading = false;
        })
    }
}))

export default postSlice.reducer;