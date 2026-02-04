import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { api } from "../service/api";

type AuthContextData = {
  token: string | null;
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

  // 🔁 Carrega token ao iniciar a aplicação
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setToken(storedToken);
    }
  }, []);

  // ✅ Estado derivado (padrão profissional)
  const isAuthenticated = !!token;

  // 🔐 Login tradicional
  async function signIn(usuario: string, senha: string) {
    const response = await api.post("/auth/logar", {
      usuario,
      senha,
    });

    const { token } = response.data;

    localStorage.setItem("token", token);
    setToken(token);
  }

  // 🔐 Login com Google
  async function signInWithGoogle(idToken: string) {
    const response = await api.post("/auth/google", {
      idToken,
    });

    const { token } = response.data;

    localStorage.setItem("token", token);
    setToken(token);
  }

  // 🚪 Logout
  function signOut() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
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

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
