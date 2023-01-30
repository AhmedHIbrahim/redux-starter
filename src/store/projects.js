import { createSlice } from "@reduxjs/toolkit";

let pid = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++pid,
        name: action.payload.name,
      });
    },
  },
});

export const { projectAdded } = slice.actions;

export default slice.reducer;
