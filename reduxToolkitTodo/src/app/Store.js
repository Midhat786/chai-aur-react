import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"; // Import the reducer correctly

export const store = configureStore({
  reducer: {
    todos: todoReducer, // Ensure the key 'todos' maps to the todoReducer
  },
});
