import { createSlice } from "@reduxjs/toolkit";

// create counter slice
export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, { type, payload }) => {
      state.count = state.count + 1;
    },
    decrement: (state, { type, payload }) => {
      state.count = state.count - 1;
    },
    reset: (state, { type, payload }) => {
      state.count = payload;
    },
  },
});

// export counter actions
export const { increment, decrement, reset } = CounterSlice.actions;

// export counter reducer
export default CounterSlice.reducer;
