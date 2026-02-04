import { api } from "./api";

export interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
}

export const UsuarioService = {
  buscarPorId(id: number) {
    return api.get<Usuario>(`/usuarios/${id}`);
  },
};
