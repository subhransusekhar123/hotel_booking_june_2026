import axios from "axios";

const API = "http://localhost:5000/api";

export const getHotels = async () => {
  const response = await axios.get(`${API}/hotels`);
  return response.data;
};