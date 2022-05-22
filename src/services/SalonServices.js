import axios from "axios";
import { getCurrentUser, authHeader } from "./Commons";
axios.defaults.headers = authHeader();
export const getAllServicesForSalon = async () => {
  return await axios
    .get("services/getAllServicesForSalon/" + getCurrentUser().id)
    .then((response) => response.data)
    .catch((error) => error.response);
};

export const createService = async (
  serviceName,
  price,
  serviceDescription,
  serviceType,
  userId
) => {
  userId = getCurrentUser().id;
  return await axios
    .post("services/createServices", {  
        serviceName,
        price,
        serviceDescription,
        serviceType,
        userId})
    .then((response) => response.data)
    .catch((error) => error.response);
};
