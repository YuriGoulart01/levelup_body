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
  criar(dados: CriarDadosPayload) {
    return api.post<Dados>("/dados", dados);
  },

  atualizar(dados: AtualizarDadosPayload) {
    return api.put<Dados>("/dados", dados);
  },

  buscarPorUsuario(usuarioId: number) {
    return api.get<Dados[]>(`/dados/usuario/${usuarioId}`);
  },
};
