import * as Request from "request";

const endpoint = "http://localhost:3000/account";

export function login(userName, password) {
  Request(
    `${endpoint}?email=${userName}&password=${password}`,
    (error, response, body) => {
      if (response.statusCode === 200) {
        // return ok from response
      } else {
        // return an erro that must be treated
      }
    }
  );
}
export function logoff() {}
