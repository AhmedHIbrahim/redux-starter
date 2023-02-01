//SNA
// store or ({getState, dispatch})
const logger = (store) => (next) => (action) => {
    //console.log('store', store)
    //console.log('next', next)
    //console.log('action', action)
    console.log('new-log-before-calling: ', action.type)
    next(action) // to-pass-to-next middle (reducer)
};

export default logger