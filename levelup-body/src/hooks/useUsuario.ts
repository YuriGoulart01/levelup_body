import { useEffect, useState } from "react";
import type { Usuario } from "../service/usuario.api";
import { UsuarioService } from "../service/usuario.api";

export function useUsuario(usuarioId: number) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);

  async function carregarUsuario() {
    try {
      setLoading(true);
      const response = await UsuarioService.buscarPorId(usuarioId);
      setUsuario(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuário", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (usuarioId) {
      carregarUsuario();
    }
  }, [usuarioId]);

  return { usuario, loading };
}
