import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { api } from "../service/api";

type Usuario = {
  id: number;
  nome: string;
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

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const tokenSalvo = localStorage.getItem("token");
    const usuarioSalvo = localStorage.getItem("usuario");

    if (tokenSalvo && usuarioSalvo) {
      setToken(tokenSalvo);
      setUsuario(JSON.parse(usuarioSalvo));
    }
  }, []);

  const isAuthenticated = !!token;

  async function signIn(usuarioInput: string, senha: string) {
    const response = await api.post("/auth/logar", {
      usuario: usuarioInput,
      senha,
    });

    const { token, usuario } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));

    setToken(token);
    setUsuario(usuario);
  }

  async function signInWithGoogle(idToken: string) {
    const response = await api.post("/auth/google", {
      idToken,
    });

    const { token, usuario } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));

    setToken(token);
    setUsuario(usuario);
  }

  function signOut() {
    localStorage.clear();
    setToken(null);
    setUsuario(null);
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        token,
        isAuthenticated,
        signIn,
        signInWithGoogle,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}