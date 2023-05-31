import { createSlice } from "@reduxjs/toolkit";

// todo createSlice
export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, { type, payload }) => {
      state.todos.push(payload);
    },
    removeTodo: (state, { type, payload }) => {
      state.todos = state.todos.filter((t) => t !== payload);
    },
  },
});

export const { addTodo, removeTodo } = TodoSlice.actions;

// export todo reducer
export default TodoSlice.reducer;
