import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { api } from "../service/api";

/* =======================
   TYPES
======================= */

export type Usuario = {
  id: number;
  nome: string;
  email?: string;
  foto?: string;
};

type AuthContextData = {
  usuario: Usuario | null;
  token: string | null;
  isAuthenticated: boolean;
  signIn: (usuario: string, senha: string) => Promise<void>;
  signInWithGoogle: (idToken: string) => Promise<void>;
  signOut: () => void;
};

/* =======================
   CONTEXT
======================= */

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

/* =======================
   PROVIDER
======================= */

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const isAuthenticated = !!token;

  /* 🔁 Carrega sessão salva ao iniciar */
  useEffect(() => {
    const tokenSalvo = localStorage.getItem("token");
    const usuarioSalvo = localStorage.getItem("usuario");

    if (tokenSalvo && usuarioSalvo) {
      setToken(tokenSalvo);
      setUsuario(JSON.parse(usuarioSalvo));
    }
  }, []);

  /* =======================
     LOGIN TRADICIONAL
  ======================= */
  async function signIn(login: string, senha: string) {
    const response = await api.post("/auth/logar", {
      usuario: login,
      senha,
    });

    /**
     * ⚠️ O backend PRECISA retornar:
     * {
     *   token: string,
     *   usuario: { id, nome, email?, foto? }
     * }
     */
    const { token, usuario } = response.data;

    setToken(token);
    setUsuario(usuario);

    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }

  /* =======================
     LOGIN COM GOOGLE
  ======================= */
  async function signInWithGoogle(idToken: string) {
    const response = await api.post("/auth/google", {
      idToken,
    });

    const { token, usuario } = response.data;

    setToken(token);
    setUsuario(usuario);

    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }

  /* =======================
     LOGOUT
  ======================= */
  function signOut() {
    setUsuario(null);
    setToken(null);

    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
  }

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated, signIn, signInWithGoogle, signOut }}
      value={{
        usuario,
        token,
        signIn,
        signInWithGoogle,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/* =======================
   HOOK
======================= */

export function useAuth() {
  return useContext(AuthContext);
}
