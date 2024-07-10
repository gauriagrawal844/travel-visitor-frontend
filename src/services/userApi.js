import http from "./http";

export const signUp = async (data) => {
  const response = await http.post("/user/signup", data);
  return response.data;
};
