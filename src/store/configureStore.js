import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducers";
import logger from "./middleware/logger";
import toastify from "./middleware/toast";
import api from "./middleware/api";

export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ distination: "console" }),
      toastify,
      api,
    ],
  });
}

// -- if we are not using redux-toolkit (only REDUX)
//import {createStore, applyMiddleware} from "redux"
//const store = createStore(reducer, applyMiddleware(logger('console')))
