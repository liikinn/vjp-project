import { NewsItemActionTypes } from "../actions/news-item";
import { ACTION_TYPES } from "../../utils/constants";

export type NewsItemListState = NewsItem[];

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: Date;
}

const _initialState: NewsItemListState = [];

export const newsItemReducer = (
  state = _initialState,
  action: NewsItemActionTypes
): NewsItemListState => {
  switch (action.type) {
    case ACTION_TYPES.STORE_NEWS_ITEM:
      return [...state, action.payload];
    case ACTION_TYPES.DELETE_NEWS_ITEM: {
      const filteredNewsItems = state.filter(
        (item) => item.id !== action.payload.id
      );
      return [...filteredNewsItems];
    }
    case ACTION_TYPES.UPDATE_NEWS_ITEM: {
      const filteredNewsItems = state.filter(
        (item) => item.id !== action.payload.id
      );
      return [...filteredNewsItems, action.payload];
    }

    default:
      return state;
  }
};
