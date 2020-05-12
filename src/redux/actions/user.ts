import { ACTION_TYPES } from "../../utils/constants";
import { User } from "../reducers/user";

export interface StoreUserAction {
  type: typeof ACTION_TYPES.STORE_USER;
  payload: User;
}

export interface ClearStoredUser {
  type: typeof ACTION_TYPES.CLEAR_STORED_USER;
}

export type UserActionTypes = StoreUserAction | ClearStoredUser;

export function storeUser(user: User): UserActionTypes {
  return {
    type: ACTION_TYPES.STORE_USER,
    payload: user,
  };
}

export function clearStoredUser(): UserActionTypes {
  return { type: ACTION_TYPES.CLEAR_STORED_USER };
}
