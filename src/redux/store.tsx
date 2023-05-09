import { configureStore, combineReducers } from "@reduxjs/toolkit"
import userReducer from "./userSlice"

const reducers = combineReducers({
    user: userReducer
})

export const store = configureStore({
    reducer: reducers
})