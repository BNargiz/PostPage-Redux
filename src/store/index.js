import { configureStore } from "@reduxjs/toolkit";

import feedReducer from "./feed/slice";

import postPageSliceReducer from "./postpage/slice";

import authReducer from "./auth/slice";
const store = configureStore({
  reducer: {
    feed: feedReducer,
    postPage: postPageSliceReducer,
    login: authReducer,
  },
});

export default store;
