import axios from "axios";
import { baseUrl } from "./Commons";
axios.defaults.baseURL = baseUrl;
export const getAllSalons = async () => {
  return await axios
    .get("user/getAllSalons")
    .then((response) => response.data)
    .catch((error) => error.response);
}
export const getAllServicesForSalon = async (id) => {
  return await axios
    .get("services/getAllServicesForSalon/"+id)
    .then((response) => response.data)
    .catch((error) => error.response);
}
export const createOrder = async (data) => {
  return await axios
    .post("orders/createOrder",data)
    .then((response) => response.data)
    .catch((error) => error.response);
}
export const getAllOrdersForSaloon = async (userId) => {
  return await axios
    .get("orders/getAllOrdersForSaloon/"+userId)
    .then((response) => response.data)
    .catch((error) => error.response);
}