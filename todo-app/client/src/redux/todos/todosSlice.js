import { createSlice } from '@reduxjs/toolkit';
import {
  getTodoAsync,
  addTodoAsync,
  toggleTodoAsync,
  removeTodoAsync,
} from 'redux/services/services-todo';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    activeFilter: 'all',
    isLoading: false,
    error: null,
    addNewTodo: {
      isLoading: false,
      error: null,
    },
    toggleTodoError: null,
  },
  reducers: {
    activeFilterChange: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: {
    // GET TODOS
    [getTodoAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodoAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getTodoAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    // ADD TODO
    [addTodoAsync.pending]: (state, action) => {
      state.addNewTodo.isLoading = true;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.addNewTodo.isLoading = false;
      state.items.push(action.payload);
    },
    [addTodoAsync.rejected]: (state, action) => {
      state.addNewTodo.isLoading = false;
      state.addNewTodo.error = action.error.message;
    },
    // TOGGLE TODO
    [toggleTodoAsync.fulfilled]: (state, action) => {
      const { id, completed } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items[index].completed = completed;
    },
    // REMOVE TODO
    [removeTodoAsync.fulfilled]: (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items.splice(index, 1);
    },
  },
});

export const selectTodos = (state) => state.todos.items;

export const { activeFilterChange } = todosSlice.actions;
export default todosSlice.reducer;
