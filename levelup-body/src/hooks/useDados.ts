import { useEffect, useState } from "react";
import { DadosService } from "../service/dados.api";
import type { Dados } from "../service/dados.api";
import { useAuth } from "../context/AuthContext";

export function useDados() {
  const { usuario } = useAuth();

  const [dados, setDados] = useState<Dados[]>([]);
  const [loading, setLoading] = useState(true);

  async function carregarDados() {
    if (!usuario?.id) return;

    try {
      setLoading(true);
      const response = await DadosService.buscarPorUsuario(usuario.id);
      setDados(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (usuario?.id) {
      carregarDados();
    }
  }, [usuario?.id]);

  const ultimoDado = dados.length > 0 ? dados[0] : null;

  return {
    dados,
    ultimoDado,
    loading,
    recarregar: carregarDados,
  };
}