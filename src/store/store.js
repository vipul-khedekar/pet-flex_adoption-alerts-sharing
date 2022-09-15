import { createStore, combineReducers } from "redux";

import authentication from "./reducers/authentication";

const combinedReducer = combineReducers({ authentication });

export const store = createStore(combinedReducer);
