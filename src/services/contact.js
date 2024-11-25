import http from "./http";

export const sendContact = async (data) => {
    const response = await http.post("/contact/create", data);
    return response.data;
  };

export const getContactDetails = async () => {
    const response = await http.get("/contact/all");
    return response.data;
  };