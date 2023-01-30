import configureStore from "./store/configureStore";
//import store from "./customStore";
import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";

const store = configureStore();

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("STORE CHANGED: ", store.getState());
});

store.dispatch(
  bugAdded({
    description: "404 not applicable",
  })
);
store.dispatch(bugRemoved({ id: 1 }));
store.dispatch(bugAdded({ description: "403 not resolved" }));
store.dispatch(bugResolved({ id: 2 }));
store.dispatch(bugRemoved({ id: 2 }));

unsubscribe();
