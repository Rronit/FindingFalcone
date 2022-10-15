import { configureStore } from "@reduxjs/toolkit";
import { falconeSlice } from "./falcone.reducers";

export const store = configureStore({
  reducer: falconeSlice.reducer
});
