import { createSlice } from "@reduxjs/toolkit";

import { DummyData } from "../components/DummyData";

const initialState = DummyData;
export const TaskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { addTask } = TaskSlice.actions;
export const reducers = TaskSlice.reducer;
