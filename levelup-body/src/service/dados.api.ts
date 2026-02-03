import { api } from "./api";

// =====================
// TYPES
// =====================

// 🔹 O que o FRONTEND ENVIA (POST)
// ❌ NÃO envia imc nem classificacao
export interface CriarDadosPayload {
  peso: number;
  altura: number;
  objetivo: string;
  usuario: {
    id: number;
  };
}

// 🔹 Atualização (PUT)
export interface AtualizarDadosPayload {
  id: number;
  peso: number;
  altura: number;
  objetivo: string;
}

// 🔹 O que o BACKEND RETORNA (GET)
export interface Dados {
  id: number;
  peso: number;
  altura: number;
  objetivo: string;
  imc: number;
  classificacao: string;
}

// =====================
// SERVICE
// =====================

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
