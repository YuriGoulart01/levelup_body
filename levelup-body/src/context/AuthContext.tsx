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
  email?: string;
  foto?: string;
};

type AuthContextData = {
  token: string | null;
  user: Usuario | null;
  isAuthenticated: boolean;

  signIn: (usuario: string, senha: string) => Promise<void>;
  signInWithGoogle: (idToken: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<Usuario | null>(null);

  // 🔁 carrega sessão ao abrir site
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken) setToken(storedToken);
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const isAuthenticated = !!token;

  // 🔐 LOGIN NORMAL
  async function signIn(usuarioLogin: string, senha: string) {
    const response = await api.post("/auth/logar", {
      usuario: usuarioLogin,
      senha,
    });

    const { token, usuario } = response.data;

    setToken(token);
    setUser(usuario);

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(usuario));
  }

  // 🔐 LOGIN GOOGLE
  async function signInWithGoogle(idToken: string) {
    const response = await api.post("/auth/google", {
      idToken,
    });

    const { token, usuario } = response.data;

    setToken(token);
    setUser(usuario);

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(usuario));
  }

  // 🚪 LOGOUT
  function signOut() {
    setToken(null);
    setUser(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
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

// hook global
export function useAuth() {
  return useContext(AuthContext);
}
