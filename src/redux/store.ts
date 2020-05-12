import { createStore, Store, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { userReducer, User } from "./reducers/user";

export interface RootState {
  user?: User;
}

export function configureStore(initialState: RootState): Store<RootState> {
  return createStore(userReducer, initialState, applyMiddleware(thunk, logger));
}
