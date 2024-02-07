import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { hostName } from "../config";

const initialState = {
    message: "",
    data: "",
    token: "",
    loading: false,
    error: ""
}

export const signUpUser = createAsyncThunk('signupuser', async(body) => {
    const res = await fetch("dddddddddddddddddd", {
        method: "post",
        headers: {
            'Content-Type': "application/json",
           
        },
        body: JSON.stringify(body)
    })
    return await  res.json();
})

export const signInUser = createAsyncThunk('signinuser', async(body) => {
    const res = await fetch(`${hostName}api/v1/auth/login/`, {
        method: "post",
        headers: {
            'Content-Type': "application/json",
           
        },
        body: JSON.stringify(body)
    })
    return await  res.json();
    // console.log(res.data)
})

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem("token")
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem("user")
        },
        logout: (state, action) => {
            state.token = null
            localStorage.clear();
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase (signInUser.pending, (state, action) => {
            state.loading = true
        })
        .addCase(signInUser.fulfilled,(state, {payload: {error, message, token, data}}) => {
            state.loading = false;
            if (error) {
                state.error = error;
            } else {
                state.message = message;
                state.token = token;
                state.data = data;

                localStorage.setItem('message', message)
                localStorage.setItem('user', JSON.stringify(data))
                localStorage.setItem('token', token)
            }
        })
        .addCase(signInUser.rejected, (state, action) => {
            state.loading = true
        })
        .addCase (signUpUser.pending, (state, action) => {
            state.loading = true
        })
        .addCase(signUpUser.fulfilled,(state, {payload: {error, message}}) => {
            state.loading = false;
            if (error) {
                state.error = error
            } else {
                state.message = message
            }
        })
        .addCase(signUpUser.rejected, (state, action) => {
            state.loading = true
        })
        
    }
})

//*****************login */

// [signInUser.fulfilled]: (state, {payload: {error, message, token, user}}) => {
//     state.loading = false;
//     if (error) {
//         state.error = error;
//     } else {
//         state.message = message;
//         state.token = token;
//         state.user = user;

//         localStorage.setItem('message', message)
//         localStorage.setItem('user', JSON.stringify(user))
//         localStorage.setItem('token', token)
//     }
// },
// [signInUser.rejected]: (state, action) => {
//     state.loading = true
// },
// // ******************88 */
// [signUpUser.pending]: (state, action) => {
//     state.loading = true
// },
// [signUpUser.fulfilled]: (state, {payload: {error, message}}) => {
//     state.loading = false;
//     if (error) {
//         state.error = error
//     } else {
//         state.message = message
//     }
// },
// [signUpUser.rejected]: (state, action) => {
//     state.loading = true
// }

export const {addToken, addUser, logout} = authSlice.actions;
export default authSlice.reducer