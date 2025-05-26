import { createSlice, current } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: { todo: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    completeTodo: (state, action) => {
      const todo = state.todo.find((todo) => todo.id === action.payload);
      todo.completed = true;
    },
    deleteTodo: (state, action) => {
      const index = state.todo.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
