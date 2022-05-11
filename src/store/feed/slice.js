import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts: [],
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    postFetched: (state, action) => {
      console.log("postsFetched action", action);
      state.posts = [...state.posts, ...action.payload];
      state.loading = false;
    },
  },
});

export const { startLoading, postFetched } = feedSlice.actions;
export default feedSlice.reducer;
