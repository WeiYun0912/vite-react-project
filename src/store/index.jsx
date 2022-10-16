import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./api/apiSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    userSlice,
  },
});

export default store;
