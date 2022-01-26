import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  ADD_POSTING,
  EDIT_POSTING,
  DELETE_POSTING,
} from "./types";


export function loginUser(dataToSubmit) {
  const request = axios
    .post("/api/users/login", dataToSubmit)
    .then((res) => res.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post("/api/users/register", dataToSubmit)
    .then((res) => res.data);

	return {
		type: REGISTER_USER,
		payload: request,
	}
}


export function auth() {
  const request = axios
    .get("/api/users/auth")
    .then((res) => res.data);

	return {
		type: AUTH_USER,
		payload: request,
	}
}

let nextId = 2;
export const addPosting = (title, description) => {
  return {
      type: ADD_POSTING,
      post: {
          id: nextId++,
          title,
          description
      }
  };
}

export const editPosting = (id) => {
  return {
      type: EDIT_POSTING,
      id
  }
}

export const deletePosting = (id) => {
  return {
      type: DELETE_POSTING,
      id
  }
}