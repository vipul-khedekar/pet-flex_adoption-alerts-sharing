import { createStore, combineReducers } from "redux";

import allUsers from "./reducers/allUsers";
import currentUser from "./reducers/currentUser";
import isUserActive from "./reducers/isUserActive";

const combinedReducer = combineReducers({
  allUsers,
  currentUser,
  isUserActive,
});

export const store = createStore(combinedReducer);
