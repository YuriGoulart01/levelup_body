import { createContext, useContext, useState, useEffect } from "react";
import api from "../service/Api";
import type { ReactNode } from "react";

type AuthContextType = {
  token: string | null;
  signIn: (usuario: string, senha: string) => Promise<void>;
  signInWithGoogle: (idToken: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  async function signIn(usuario: string, senha: string) {
    try {
      const response = await api.post("/auth/logar", {
        usuario,
        senha,
      });

      const { token } = response.data;

      localStorage.setItem("token", token);
      setToken(token);
    } catch (error) {
      console.error("Erro no login tradicional", error);
      throw error;
    }
  }

  async function signInWithGoogle(idToken: string) {
    try {
      const response = await api.post("/auth/google", {
        idToken,
      });

      const { token } = response.data;

      localStorage.setItem("token", token);
      setToken(token);
    } catch (error) {
      console.error("Erro no login com Google", error);
      throw error;
    }
  }

  function signOut() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
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

export function useAuth() {
  return useContext(AuthContext);
}
