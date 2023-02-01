//SNA
// store or ({getState, dispatch})
// param is custom parameter to beneifit from currying concept
// param can be an object too, ({})
const logger =
  ({ distination }) =>
  (store) =>
  (next) =>
  (action) => {
    if (distination === "console") {
      //console.log('store', store)
      //console.log('next', next)
      //console.log('action', action)
      console.log("new-log-before-calling: ", action.type);
    }
    next(action); // to-pass-to-next middle (reducer)
  };

export default logger;
