import { configureStore } from "@reduxjs/toolkit";

import feedReducer from "./feed/slice";

import postPageSliceReducer from "./postpage/slice";
const store = configureStore({
  reducer: {
    feed: feedReducer,
    postPage: postPageSliceReducer,
  },
});

export default store;
