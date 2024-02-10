import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import PostSlice from "./postSlice";

const reducers = combineReducers({
    user: UserSlice,
    post: PostSlice,
})

export default reducers;