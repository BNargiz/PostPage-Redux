import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: true,
  post: null,
  comments: [],
};

const postPageSlice = createSlice({
  name: "postpage",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },

    postFullyFetched: (state, action) => {
      console.log("postsFetched action", action);
      // action.payload = { post: {}, comments: [] }
      state.post = action.payload.post;
      state.comments = [...action.payload.comments];
      state.loading = false;
    },
  },
});

export const { startLoading, postFullyFetched } = postPageSlice.actions;
export default postPageSlice.reducer;
