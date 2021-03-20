import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    done: false
  },
  reducers: {
    setFilter: (state, action) => {
      state.done = action.payload
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;

