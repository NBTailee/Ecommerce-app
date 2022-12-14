import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    success: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.success = true;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
    },
  },
});
export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
