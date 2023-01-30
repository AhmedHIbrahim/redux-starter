import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    //state=bugs
    bugAssignedToUser: (bugs, action) => {
      const bugIndex = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[bugIndex].userId = action.payload.userId;
    },
    bugAdded: (state, action) => {
      state.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state[index].resolved = true;
    },
    bugRemoved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved, bugAssignedToUser } =
  slice.actions;
export default slice.reducer;

// -- MEMOIZATION

// time consuming (expensive) approach
/*
export function getUnresolvedBugs(state) {
  return state.entities.bugs.filter((bug) => !bug.resolved);
}
*/

import { createSelector } from "reselect";

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

// you can add multiable selectors
/*
const getUnfinishedProjects = createSelector(
  (state) => state.entities.projects,
  (state) => state.entities.bugs,
  (projects, bugs)=> (...filter_logic_goes_here)
)
*/

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
