import { ADMIN_USER } from "./constants";

export function authenticate(username: string, password: string): boolean {
  return username === ADMIN_USER.USERNAME && password === ADMIN_USER.PASSWORD;
}
