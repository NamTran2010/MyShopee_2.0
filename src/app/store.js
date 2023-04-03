import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
