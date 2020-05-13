import { ACTION_TYPES } from "../../utils/constants";
import { NewsItem } from "../reducers/news-item";

export interface StoreNewsItemAction {
  type: typeof ACTION_TYPES.STORE_NEWS_ITEM;
  payload: NewsItem;
}

export interface DeleteNewsItem {
  type: typeof ACTION_TYPES.DELETE_NEWS_ITEM;
  payload: NewsItem;
}

export interface UpdateNewsItem {
  type: typeof ACTION_TYPES.UPDATE_NEWS_ITEM;
  payload: NewsItem;
}

export type NewsItemActionTypes =
  | StoreNewsItemAction
  | DeleteNewsItem
  | UpdateNewsItem;

export function storeNewsItem(newsItem: NewsItem): NewsItemActionTypes {
  return {
    type: ACTION_TYPES.STORE_NEWS_ITEM,
    payload: newsItem,
  };
}

export function deleteNewsItem(newsItem: NewsItem): NewsItemActionTypes {
  return { type: ACTION_TYPES.DELETE_NEWS_ITEM, payload: newsItem };
}

export function updateNewsItem(newsItem: NewsItem): NewsItemActionTypes {
  return {
    type: ACTION_TYPES.UPDATE_NEWS_ITEM,
    payload: newsItem,
  };
}
