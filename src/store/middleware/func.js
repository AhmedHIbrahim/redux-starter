
// Thunk func
// automatically in redux-toolkit
// if not using redux-toolkit, (only redux)
// then `npm i redux-thunk`
// then add thunk as a middleware under redux createStore

// thunk works under the hood as following 
const func =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") action(dispatch, getState);
    else next(action);
  };

export default func;
