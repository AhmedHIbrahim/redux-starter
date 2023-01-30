import configureStore from "./store/configureStore";

import { projectAdded } from "./store/projects";
import {
  // actions
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
  // selectors
  getUnresolvedBugs,
  getBugsByUser,
} from "./store/bugs";
import { userAdded } from "./store/users";

const store = configureStore();

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Store changed: ", store.getState());
});

// USERS
store.dispatch(
  userAdded({
    name: "omar",
  })
);
store.dispatch(
  userAdded({
    name: "Ali",
  })
);

// PROJECTS
store.dispatch(
  projectAdded({
    name: "E-commerace App",
  })
);

store.dispatch(
  projectAdded({
    name: "ERP App",
  })
);

// BUGS
store.dispatch(
  bugAdded({
    description: "screen is not responsive",
    developerId: 1,
  })
);

store.dispatch(
  bugAdded({
    description: "screen is not rotated",
  })
);

store.dispatch(
  bugAdded({
    description: "screen is not appealing",
  })
);
store.dispatch(
  bugResolved({
    id: 1,
  })
);

store.dispatch(
  bugAssignedToUser({
    id: 1,
    userId: 1,
  })
);

const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());

// Memoization beneifts in saving memory
console.log(x === y);

const bugs = getBugsByUser(1)(store.getState());
console.log("user 1 bugs ? ", bugs);

unsubscribe();
