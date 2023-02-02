import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    //state=bugs
    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },
    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.lastFetch = Date.now();
      bugs.loading = false;
    },

    // addBug (command) -- bugAdded (event)
    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload);
    },

    // assignBugToUser -- bugAssignedToUser
    bugAssignedToUser: (bugs, action) => {
      const bugIndex = bugs.list.findIndex(
        (bug) => bug.id === action.payload.id
      );
      bugs.list[bugIndex].userId = action.payload.userId;
    },

    // resolveBug -- bugResolved
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },

    bugRemoved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list.splice(index, 1);
    },
  },
});

const {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugsReceived,
  bugsRequested,
  bugAssignedToUser,
  bugsRequestFailed,
} = slice.actions;
export default slice.reducer;

const url = "/bugs";

// Action Creators
export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;

  dispatch(
    apiCallBegan({
      url,
      method: "GET",
      data: {},
      onStart: bugsRequested.type,
      onSuccess: bugsReceived.type,
      onError: bugsRequestFailed.type,
    })
  );
};

export const addBug = (bug) =>
  apiCallBegan({
    url,
    data: bug,
    method: "POST",
    onError: bugsRequestFailed.type,
    onSuccess: bugAdded.type,
  });

export const resolveBug = ({ id }) =>
  apiCallBegan({
    url: `${url}/${id}`,
    data: {
      resolved: true,
    },
    method: "PATCH",
    onError: bugsRequestFailed.type,
    onSuccess: bugResolved.type,
  });

export const assignBugToUser = ({ userId, bugId }) =>
  apiCallBegan({
    url: `${url}/${bugId}`,
    data: {
      userId,
    },
    method: "PATCH",
    onError: bugsRequestFailed.type,
    onSuccess: bugAssignedToUser.type,
  });

// -- MEMOIZATION

// time consuming (expensive) approach
/*
export function getUnresolvedBugs(state) {
  return state.entities.bugs.list.filter((bug) => !bug.resolved);
}
*/

import { createSelector } from "reselect";

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.list.filter((bug) => !bug.resolved)
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
    (bugs) => bugs.list.filter((bug) => bug.userId === userId)
  );
