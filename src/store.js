import { configureStore } from "@reduxjs/toolkit";
import reactReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    user: reactReducer,
  },
});

export default store;
