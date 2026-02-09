import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import type { CredentialResponse } from "@react-oauth/google";

import { api } from "../../service/api";
import { useAuth } from "../../context/AuthContext";

export function Cadastro() {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState("");

  // 🔐 Cadastro tradicional
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setErro("As senhas não conferem");
      return;
    }

    setErro("");
    setLoading(true);

    try {
      await api.post("/usuarios/cadastrar", {
        nome,
        usuario: email,
        senha,
      });

      setSucesso("Usuário cadastrado com sucesso! Redirecionando para a página de login... ");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
      
    } catch (error: any) {
      setErro(
        error.response?.data?.message || "Erro ao realizar cadastro"
      );
    } finally {
      setLoading(false);
    }
  };

  // 🔐 Cadastro / Login com Google
  const handleGoogleSuccess = async (
    credentialResponse: CredentialResponse
  ) => {
    try {
      const idToken = credentialResponse.credential;

      if (!idToken) {
        throw new Error("Token do Google não recebido");
      }

      await signInWithGoogle(idToken);
      navigate("/");
    } catch (error) {
      console.error(error);
      setErro("Erro ao autenticar com Google");
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/img/capivara-planodefundo.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-xl text-white">
            <h1 className="text-5xl mb-2 font-medium">
              Crie sua Conta
            </h1>

            <p className="text-gray-300 text-2xl mb-6 font-medium">
              Cadastre-se e comece sua jornada
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-4 py-3 rounded bg-black/50 border border-gray-600 focus:outline-none focus:border-orange-500"
                required
              />

              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded bg-black/50 border border-gray-600 focus:outline-none focus:border-orange-500"
                required
              />

              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full px-4 py-3 rounded bg-black/50 border border-gray-600 focus:outline-none focus:border-orange-500"
                required
              />

              <input
                type="password"
                placeholder="Confirmar senha"
                value={confirmarSenha}
                onChange={(e) =>
                  setConfirmarSenha(e.target.value)
                }
                className="w-full px-4 py-3 rounded bg-black/50 border border-gray-600 focus:outline-none focus:border-orange-500"
                required
              />

              {erro && (
                <p className="text-red-500 text-sm text-center">
                  {erro}
                </p>
              )}

              {sucesso && (
                <p className="text-orange-500 text-sm text-center">
                  {sucesso}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-orange-600 hover:bg-orange-700 rounded font-semibold disabled:opacity-60"
              >
                {loading ? "Cadastrando..." : "Cadastrar"}
              </button>

              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-gray-600" />
                <span className="text-sm text-gray-400">
                  ou
                </span>
                <div className="flex-1 h-px bg-gray-600" />
              </div>

              {/* Google Login */}
              <div className="flex justify-center">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={() =>
                    setErro("Erro ao autenticar com Google")
                  }
                />
              </div>

              <p className="text-sm text-gray-300 text-center mt-6">
                Já tem uma conta?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="text-orange-400 hover:text-orange-500 font-semibold"
                >
                  Entrar
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
