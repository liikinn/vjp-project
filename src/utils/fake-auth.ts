import { ADMIN_USER } from "./constants";

/**
 * A fake authentication method that only works for a single hardcoded admin account.
 * @param username
 * @param password
 */
export function authenticate(username: string, password: string): boolean {
  return username === ADMIN_USER.USERNAME && password === ADMIN_USER.PASSWORD;
}
