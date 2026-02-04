import { api } from "./api";

export interface CriarDadosPayload {
  peso: number;
  altura: number;
  objetivo: string;
  usuario: {
    id: number;
  };
}

export interface AtualizarDadosPayload {
  id: number;
  peso: number;
  altura: number;
  objetivo: string;
}

export interface Dados {
  id: number;
  peso: number;
  altura: number;
  objetivo: string;
  imc: number;
  classificacao: string;
}

export const DadosService = {
  async criar(dados: CriarDadosPayload) {
    const response = await api.post<Dados>("/dados", dados);
    return response.data;
  },

  async atualizar(dados: AtualizarDadosPayload) {
    const response = await api.put<Dados>("/dados", dados);
    return response.data;
  },

  async buscarPorUsuario(usuarioId: number): Promise<Dados[]> {
    const response = await api.get<Dados[]>(`/dados/usuario/${usuarioId}`);
    return response.data;
  },
};
