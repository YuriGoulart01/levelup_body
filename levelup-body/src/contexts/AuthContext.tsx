import { createContext, useContext, useEffect, useState } from "react";

type Usuario = {
  id: number;
  nome: string;
  foto?: string;
};

type AuthContextType = {
  usuario: Usuario | null;
  token: string | null;
  login: (data: { usuario: Usuario; token: string }) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // carrega sessão salva
  useEffect(() => {
    const tokenSalvo = localStorage.getItem("token");
    const usuarioSalvo = localStorage.getItem("usuario");

    if (tokenSalvo && usuarioSalvo) {
      setToken(tokenSalvo);
      setUsuario(JSON.parse(usuarioSalvo));
    }
  }, []);

  function login(data: { usuario: Usuario; token: string }) {
    setUsuario(data.usuario);
    setToken(data.token);

    localStorage.setItem("token", data.token);
    localStorage.setItem("usuario", JSON.stringify(data.usuario));
  }

  function logout() {
    setUsuario(null);
    setToken(null);

    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
  }

  return (
    <AuthContext.Provider value={{ usuario, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
