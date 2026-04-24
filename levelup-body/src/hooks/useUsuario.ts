import { useEffect, useState } from "react";
import type { Usuario } from "../service/usuario.api";
import { UsuarioService } from "../service/usuario.api";
import { useAuth } from "../context/AuthContext";

export function useUsuario() {
  const { usuario: usuarioAuth } = useAuth();

  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);

  async function carregarUsuario() {
    if (!usuarioAuth?.id) return;

    try {
      setLoading(true);
      const response = await UsuarioService.buscarPorId(usuarioAuth.id);
      setUsuario(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuário", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (usuarioAuth?.id) {
      carregarUsuario();
    }
  }, [usuarioAuth?.id]);

  return { usuario, loading };
}