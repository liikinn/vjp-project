import { UserActionTypes } from "../actions/user";
import { ACTION_TYPES } from "../../utils/constants";

export interface UserState {
  user?: User;
}

export interface User {
  name: string;
}

const _initialState = {};

export const userReducer = (
  state = _initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case ACTION_TYPES.STORE_USER:
      return {
        ...state,
        /* TSLint complained here that ClearStoredUser does not contain payload */
        //eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        //@ts-ignore
        user: action.payload,
      };
    case ACTION_TYPES.CLEAR_STORED_USER:
      return _initialState;
    default:
      return state;
  }
};
