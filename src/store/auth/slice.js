import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  me: null, // the logged-in user
  accessToken: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    userData: (state, action) => {
      state.accessToken = action.payload.token;
      state.me = action.payload.user;
      state.loading = false;
    },
    logOut: (state) => {
      localStorage.removeItem("token");
      return { ...initialState };
    },
  },
});

export const { startLoading, userData, logOut } = authSlice.actions;
export default authSlice.reducer;
