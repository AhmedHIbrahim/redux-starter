import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import logger from "./middleware/logger";

export default function () {
  return configureStore({
    reducer,
    middleware: [logger],
  });
}

// -- if we are not using redux-toolkit (only REDUX)
//import {createStore, applyMiddleware} from "redux"
//const store = createStore(reducer, applyMiddleware(logger))