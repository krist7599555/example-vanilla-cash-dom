// @ts-check
import { base_path } from "./config.mjs";

/**
 * @returns {Promise<{ data: { id: string, name: string }[] }>}
 */
export function request_api_users_$get() {
  return fetch(`${base_path}/data_users.json`).then((res) => res.json());
  return fetch("/api/users").then((res) => res.json());
}

/**
 * @returns {Promise<{ data: { id: string, startdate: string, name: string, participate: string[] }[] }>}
 */
export function request_api_events_$get() {
  return fetch(`${base_path}/data_events.json`).then((res) => res.json());
  return fetch("/api/events").then((res) => res.json());
}
