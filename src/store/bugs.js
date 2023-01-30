// -- ACTION TYPES --
export const ADD_BUG = "ADD_BUG";
export const REMOVE_BUG = "REMOVE_BUG";
export const RESOLVE_BUG = "RESOLVE_BUG";

// -- ACTION CREATORS --

export const bugAdded = (description) => ({
  type: ADD_BUG,
  payload: {
    description,
  },
});

export const bugRemoved = (id) => ({
  type: REMOVE_BUG,
  payload: {
    id,
  },
});

export const bugResolved = (id) => ({
  type: RESOLVE_BUG,
  payload: { id },
});

// -- REDUCER ---

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_BUG:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case REMOVE_BUG:
      return state.filter((bug) => bug.id !== action.payload.id);

    case RESOLVE_BUG:
      return state.map((bug) => {
        if (bug.id === action.payload.id) {
          return { ...bug, resolved: true };
        } else {
          bug;
        }
      });
    default:
      return state;
  }
}
