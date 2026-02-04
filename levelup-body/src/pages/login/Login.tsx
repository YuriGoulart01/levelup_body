import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { useAuth } from "../../context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";
import type { CredentialResponse } from "@react-oauth/google";

// 🖼️ Background
import bgLogin from "../../assets/bg-login.png";
// 🏷️ Logomarca
import logomarca from "../../assets/logomarca.png";

export default function Login() {
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔐 Login tradicional
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn(usuario, senha);
      navigate("/");
    } catch {
      alert("Usuário ou senha inválidos");
    } finally {
      setLoading(false);
    }
  };

  // 🔐 Login com Google
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
      alert("Erro ao autenticar com Google");
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* 🔥 Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgLogin})` }}
      />

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 📦 Conteúdo */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div
          className="
            w-full
            max-w-xl
            bg-black/50
            backdrop-blur-xl
            rounded-2xl
            p-10
            shadow-2xl
            border border-orange-500/30
          "
        >
          {/* 🏷️ Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={logomarca}
              alt="LevelUpBody"
              className="w-36 drop-shadow-2xl"
            />
          </div>

          {/* 🏷️ Título */}
          <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-2">
           
          </h1>

          <h2 className="text-center text-gray-300 mb-8 text-base">
            Evolua seu corpo. Suba de nível.
          </h2>

          {/* ✉️ Login tradicional */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[0.95rem] text-gray-300 mb-2">
                E-mail
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
                className="
                  w-full px-4 py-3
                  rounded-xl
                  bg-zinc-900/80
                  border border-zinc-700
                  text-white
                  text-[1.05rem]
                  leading-relaxed
                  focus:outline-none
                  focus:border-orange-500
                "
              />
            </div>

            <div>
              <label className="block text-[0.95rem] text-gray-300 mb-2">
                Senha
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                className="
                  w-full px-4 py-3
                  rounded-xl
                  bg-zinc-900/80
                  border border-zinc-700
                  text-white
                  text-[1.05rem]
                  leading-relaxed
                  focus:outline-none
                  focus:border-orange-500
                "
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-orange-500
                hover:bg-orange-600
                disabled:opacity-60
                text-black
                text-[1.05rem]
                font-bold
                py-3
                rounded-xl
                transition
              "
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          {/* ➖ Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-zinc-700" />
            <span className="text-zinc-400 text-sm">ou</span>
            <div className="flex-1 h-px bg-zinc-700" />
          </div>

          {/* 🔵 Login Google */}
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => {
                console.error("Erro ao autenticar com Google");
              }}
            />
          </div>

          {/* 🔗 Links */}
          <div className="flex justify-between mt-8 text-sm text-gray-400">
            <a href="/cadastro" className="hover:text-orange-400">
              Criar conta
            </a>
            <a href="#" className="hover:text-orange-400">
              Esqueci minha senha
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
