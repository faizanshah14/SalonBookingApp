import axios from 'axios';
import { baseUrl } from './Commons';
axios.defaults.baseURL = baseUrl;

export const login = async (username, password) => {
  return await axios.post(`/auth/login`, {email:username, password})
  .then((response) =>response.data)
  .catch((error) => error.response);
};

export const signup = async (username, password,firstName,lastName) => {
    return await axios.post(`/auth/signup`, {email:username, password,firstName,lastName})
    .then((response) =>response.data)
    .catch((error) => error.response);
};

export const emailVerification = async (tokken) => {
    return await axios.get(`/auth/confirm-email?token=${tokken}`)
    .then((response) =>response.data)
    .catch((error) => error.response);
};

