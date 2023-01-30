import { createAction, createReducer } from "@reduxjs/toolkit";

// -- ACTION CREATORS --
export const bugAdded = createAction("ADD_BUG");
export const bugRemoved = createAction("REMOVE_BUG");
export const bugResolved = createAction("RESOLVE_BUG");

// -- print the action-type
console.log(bugAdded.toString());
console.log(bugRemoved.type);

// -- REDUCER --
let lastId = 0;

// createReducer
// ([initialState], {action1: action1Handler, action2:...})

export default createReducer([], {
  [bugAdded.type]: (state, action) => {
    state.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  [bugResolved.type]: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state[index].resolved = true;
  },
  [bugRemoved.type]: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state.splice(index, 1);
  },
});
