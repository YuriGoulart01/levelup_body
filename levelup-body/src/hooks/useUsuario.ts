import { useEffect, useState } from "react";
import type { Usuario } from "../service/usuario.api";
import { UsuarioService } from "../service/usuario.api";

export function useUsuario(usuarioId: number | null) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(false);

  async function carregarUsuario() {
    if (!usuarioId) return;

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
    carregarUsuario();
  }, [usuarioId]);

  return { usuario, loading };
}
