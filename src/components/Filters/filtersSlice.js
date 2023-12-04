import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: 'filters',
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFiltersChange: (state, action) => {
      state.search = action.payload;
    },
    statusFiltersChange: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFiltersChange: (state, action) => {
      state.priorities = action.payload;
    }
  }
});
