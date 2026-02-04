import { useEffect, useState } from "react";
import { DadosService } from "../service/dados.api";
import type { Dados } from "../service/dados.api";

export function useDados(usuarioId: number | null) {
  const [dados, setDados] = useState<Dados[]>([]);
  const [ultimoDado, setUltimoDado] = useState<Dados | null>(null);
  const [loading, setLoading] = useState(false);

  async function carregar() {
    if (!usuarioId) return;

    setLoading(true);
    try {
      const lista = await DadosService.buscarPorUsuario(usuarioId);

      setDados(lista);
      setUltimoDado(lista.at(-1) ?? null);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregar();
  }, [usuarioId]);

  return {
    dados,
    ultimoDado,
    loading,
    recarregar: carregar,
  };
}
