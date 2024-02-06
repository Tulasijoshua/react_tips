import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: ""
}

const signUpUser = createAsyncThunk('signupuser', async(body) => {
    const res = await fetch("ddddddddddddd", {
        method: "post",
        headers: {
            'Content-Type': "application/json",
           
            
        },
        body: JSON.stringify(body)
    })
    return await  res.json();
})

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: {
        [signUpUser.pending]: (state, action) {
            state.loading = true
        }
    }
})

export default authSlice.reducer