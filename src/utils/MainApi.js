import { mainApiURL } from '../constants/constants';

const handleOriginalResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
}

export const register = (userData) => {
  return fetch(`${mainApiURL}/signup`, {
    method: 'POST',
        credentials: "include",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
        })
        .then(handleOriginalResponse)
}

export const login = (userData) => {
  return fetch(`${mainApiURL}/signin`, {
    method: 'POST',
    credentials: "include",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(userData)
})
.then(handleOriginalResponse)
}

export const logout = () => {
  return fetch(`${mainApiURL}/signout`, {
      method: 'POST',
      credentials: "include"
  })
  .then(handleOriginalResponse)
}

export const getUserInfo = () => {
  return fetch(`${mainApiURL}/users/me`, {
      method: 'GET',
      credentials: "include"
  })
  .then(handleOriginalResponse)
}

export const editUserInfo = (userData) => {
  return fetch(`${mainApiURL}/users/me`, {
      method: 'PATCH',
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userData)
  })
  .then(handleOriginalResponse)
}

export const getMovies = () => {
  return fetch(`${mainApiURL}/movies`, {
    method: 'GET',
    credentials: "include"
  })
  .then(handleOriginalResponse)
}

export const saveMovie = (movie) => {
  return fetch(`${mainApiURL}/movies`, {
    method: 'POST',
    credentials: "include",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(movie)
  })
  .then(handleOriginalResponse)
}

export const deleteMovie = (id) => {
  return fetch(`${mainApiURL}/movies/${id}`, {
    method: 'DELETE',
    credentials: "include",
  })
  .then(handleOriginalResponse)
}
