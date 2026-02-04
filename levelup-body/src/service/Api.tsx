import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const login = async (usuario: string, senha: string) => {
  const response = await api.post("/auth/logar", {
    usuario,
    senha,
  });

  return response.data;
};

export default api;
