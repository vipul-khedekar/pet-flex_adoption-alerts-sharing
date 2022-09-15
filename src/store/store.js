import { createStore, combineReducers } from "redux";

import allUsers from "./reducers/allUsers";
import currentUser from "./reducers/currentUser";

const combinedReducer = combineReducers({ allUsers, currentUser });

export const store = createStore(combinedReducer);
