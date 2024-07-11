import http from "./http";

export const getDestinations = async () => {
  const response = await http.get("/destination/all");
  return response.data;
};

export const getDestination = async (query) => {
  const response = await http.get(`/destination/get${query}`);
  return response.data;
};

export const createDestination = async (data) => {
  const response = await http.post("/destination/create", data);
  return response.data;
};

export const updateDestination = async (id, data) => {
  const response = await http.put(`/destination/update/${id}`, data);
  return response.data;
};

export const deleteDestination = async (id) => {
  const response = await http.delete(`/destination/delete/${id}`);
  return response.data;
};
