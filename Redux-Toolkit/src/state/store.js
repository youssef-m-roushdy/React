import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

// This is the Redux store configuration.
// It uses the configureStore function from Redux Toolkit to create a store.
// The store is configured with a single reducer, which is the counterReducer.
const store = configureStore({
  reducer: {
    counter: counterReducer
  },
}); 

export default store;