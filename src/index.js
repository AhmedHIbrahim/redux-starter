import configureStore from "./store/configureStore";

import { loadBugs, addBug, resolveBug, assignBugToUser } from "./store/bugs";

const store = configureStore();

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Store changed: ", store.getState());
});

console.log("-- -- -- -- -- -- -- -- -- -- -- --");
store.dispatch(loadBugs());
setTimeout(() => store.dispatch(loadBugs()), 2000);
console.log("-- -- -- -- -- -- -- -- -- -- -- --");
store.dispatch(
  addBug({
    description: "a",
  })
);
console.log("-- -- -- -- -- -- -- -- -- -- -- --");
store.dispatch(
  resolveBug({
    id: 1675369730697,
  })
);
console.log("-- -- -- -- -- -- -- -- -- -- -- --");
store.dispatch(
  assignBugToUser({
    userId: 14,
    bugId: 3,
  })
);

unsubscribe();
