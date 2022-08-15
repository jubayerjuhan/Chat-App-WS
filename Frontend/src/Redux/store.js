import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducer.js";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [logger],
});
