import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { falconeSlice } from "./falcone.reducers";

export const store = configureStore({
  reducer: falconeSlice.reducer
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
