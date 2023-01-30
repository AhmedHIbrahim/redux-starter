import configureStore from "./store/configureStore";
//import store from "./customStore";
import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";

const store = configureStore()

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("STORE CHANGED: ", store.getState());
});

store.dispatch(bugAdded("404 not applicable"));
store.dispatch(bugRemoved(1));
store.dispatch(bugAdded("403 not resolved"));
store.dispatch(bugResolved(2));
store.dispatch(bugRemoved(2));

unsubscribe();
