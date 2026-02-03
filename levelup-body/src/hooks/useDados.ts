import { useEffect, useState } from "react";
import { DadosService } from "../service/dados.api";
import type { Dados } from "../service/dados.api";

export function useDados(usuarioId: number) {
  const [dados, setDados] = useState<Dados[]>([]);
  const [loading, setLoading] = useState(true);

  async function carregarDados() {
    try {
      setLoading(true);
      const response = await DadosService.buscarPorUsuario(usuarioId);
      setDados(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarDados();
  }, [usuarioId]);

  const ultimoDado = dados.length > 0 ? dados[0] : null;

  return {
    dados,
    ultimoDado,
    loading,
    recarregar: carregarDados,
  };
}
