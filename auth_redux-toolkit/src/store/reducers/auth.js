import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    currentUser: undefined,
    isLoading: false,
}; 

export const register = createAsyncThunk('auth/register', async(userData, thunkAPI) => {
    try {
        const response = await axios.post('https://api.realworld.io/api/users', {
            user: userData,
        })
        return response.data.user;
    } catch(err) {
        return thunkAPI.rejectWithValue(err.response.data.errors);
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(register.pending, state => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload;
            })
            .addCase(register.rejected, (state) => {
                state.isLoading = false;

            })

    }
})

export default authSlice.reducer;