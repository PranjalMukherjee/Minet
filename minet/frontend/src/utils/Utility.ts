import { MONTH } from "./constant";
export function getDate(date: string) {
  return date?.split("-")[2];
}
export function getMonth(date: string) {
  return date?.split("-")[1] && MONTH[parseInt(date?.split("-")[1]) - 1];
}
export function capitalizeFirstLetter(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function setUserIdInSessionStorage(userId: string) {
  sessionStorage.setItem("userId", userId);
}

export function setTokenInSessionStorage(token: string) {
  sessionStorage.setItem("token", token);
}

export function getUserIdFromSessionStorage(userId: string) {
  return sessionStorage.getItem(userId);
}
export function getTokenFromSessionStorage(token: string) {
  return sessionStorage.getItem(token);
}
