import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    addCounter: (state) => state + 1,
    reduceCounter: (state) => state - 1,
    resetCounter: () => 0,
  },
});
export const { addCounter, reduceCounter, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;
