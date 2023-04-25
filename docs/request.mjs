// @ts-check

/**
 * @returns {Promise<{ data: { id: string, name: string }[] }>}
 */
export function request_api_users_$get() {
  return fetch("/data_users.json").then((res) => res.json());
  return fetch("/api/users").then((res) => res.json());
}

/**
 * @returns {Promise<{ data: { id: string, startdate: string, name: string, participate: string[] }[] }>}
 */
export function request_api_events_$get() {
  return fetch("/data_events.json").then((res) => res.json());
  return fetch("/api/events").then((res) => res.json());
}
