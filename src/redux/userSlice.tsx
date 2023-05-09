import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  currentUser: object | null;
  isFetching: boolean;
  error: boolean;
}

const initialState: initialStateType = {
  currentUser: {name: "anshul"},
  isFetching: false,
  error: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true
    },
    loginSuccess: (state, action) => {
      state.isFetching = false
      state.currentUser = action.payload
    },
    loginFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    logOut: (state) => {
      state.currentUser = null
    },
  },
})


export const { loginStart, loginSuccess, loginFailure, logOut } = userSlice.actions
export default userSlice.reducer