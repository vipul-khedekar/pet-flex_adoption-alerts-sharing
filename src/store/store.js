import { createStore, combineReducers } from "redux";

import allUsers from "./reducers/allUsers";

const combinedReducer = combineReducers({ allUsers });

export const store = createStore(combinedReducer);
