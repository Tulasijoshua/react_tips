import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

const reducers = combineReducers({
    user: UserSlice,
})

export default reducers;