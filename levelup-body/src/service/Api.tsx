import axios from "axios";

const api = axios.create({
  baseURL: "https://levelupbody-api-1-o76k.onrender.com",
});

export const login = async (usuario: string, senha: string) => {
  const response = await api.post("/auth/logar", {
    usuario,
    senha,
  });

  return response.data;
};

export default api;
