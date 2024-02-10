import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const postSlice = createSlice({
    name: 'post',
    posts: [],
    error: '',
})

export const fetchPosts = createAsyncThunk('post/fetchPosts', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
})