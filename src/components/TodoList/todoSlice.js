import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todolist",
  initialState: { status: "idle", todo: [] },
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state, action) => {
      state.status = 'loading';
    }).addCase(fetchTodo.fulfilled, (state, action) => {
      state.todo = action.payload;
      state.status = 'idle';
    }).addCase(addNewTodo.fulfilled, (state, action) => {
      state.todo.push(action.todo);
      state.status = 'idle';
    }).addCase(updateTodo.fulfilled, (state, action) => {
      let currentTodo = state.todos.find((todo) => todo.id === action.payload);
      currentTodo = action.payload;
    });
  }
});

export const fetchTodo = createAsyncThunk("/todo/fetchTodo", async () => {
  const res = await fetch("/api/todo");
  const data = await res.json();
  return data.todo;
});

export const addNewTodo = createAsyncThunk("/todo/addNewTodo", async (newTodo) => {
  const res = await fetch("/api/todo", {
    method: 'POST',
    body: JSON.stringify(newTodo)
  })
  const data = await res.json();
  return data.todo;
});

export const updateTodo = createAsyncThunk("/todo/updateTodo", async (updateTodo) => {
  const res = await fetch('/api/updateTodo', {
    method: "POST",
    body: JSON.stringify(updateTodo)
  });
  const data = await res.json();
  return data.todo;
});

export default todoListSlice;
