import http from "./http";

export const sendContact = async (data) => {
    const response = await http.post("/contact/create", data);
    return response.data;
  };

