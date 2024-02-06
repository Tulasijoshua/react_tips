import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: ""
}

export const signUpUser = createAsyncThunk('signupuser', async(body) => {
    const res = await fetch("http://104.215.249.5:5000/api/login", {
        method: "post",
        headers: {
            'Content-Type': "application/json",
           
        },
        body: JSON.stringify(body)
    })
    return await  res.json();
})

export const signInUser = createAsyncThunk('signinuser', async(body) => {
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
        addToken: (state, action) => {
            state.token = localStorage.getItem("token")
        }
    },
    extraReducers: {
        //*****************login */
        [signInUser.pending]: (state, action) => {
            state.loading = true
        },
        [signInUser.fulfilled]: (state, {payload: {error, msg}}) => {
            state.loading = false;
            if (error) {
                state.error = error
            } else {
                state.msg = msg
            }
        },
        [signInUser.rejected]: (state, action) => {
            state.loading = true
        },
        // ******************88 */
        [signUpUser.pending]: (state, action) => {
            state.loading = true
        },
        [signUpUser.fulfilled]: (state, {payload: {error, msg}}) => {
            state.loading = false;
            if (error) {
                state.error = error
            } else {
                state.msg = msg
            }
        },
        [signUpUser.rejected]: (state, action) => {
            state.loading = true
        }
    }
})

export default authSlice.reducer