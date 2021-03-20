import { gql } from "@apollo/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../utils";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    status: 'idle',
    error: null
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
      state.status = 'loaded'
    },
  },
});

export const { addTodo, setTodos } = todoSlice.actions;

export default todoSlice.reducer;

