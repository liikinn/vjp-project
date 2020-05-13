import { createStore, Store, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { userReducer, UserState } from "./reducers/user";
import { NewsItemListState, newsItemReducer } from "./reducers/news-item";

export interface RootState {
  user?: UserState;
  newsItems: NewsItemListState;
}

const rootReducer = combineReducers({
  user: userReducer,
  newsItems: newsItemReducer,
});

export function configureStore(initialState: RootState): Store<RootState> {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
}
