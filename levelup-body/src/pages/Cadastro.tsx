import { useState } from "react";
import { useNavigate } from "react-router-dom";
import capivara from "../assets/capivara-planodefundo.png";

export function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setErro("As senhas não conferem");
      return;
    }

    setErro("");

    console.log({
      nome,
      email,
      senha,
    });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${capivara})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* conteúdo */}
      <div className="relative z-10 min-h-screen flex items-center ">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          
          {/* CARD */}
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-xl text-white">

            <h1 className="text-5xl mb-2 font-medium">
              Crie sua conta
            </h1>
            <p className="text-gray-300 text-2xl mb-6 font-medium">
              Cadastre-se e comece sua jornada
            </p>

            {/* FORMULÁRIO */}
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
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className="w-full px-4 py-3 rounded bg-black/50 border border-gray-600 focus:outline-none focus:border-orange-500"
                required
              />

              {erro && (
                <p className="text-red-500 text-sm">
                  {erro}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-orange-600 hover:bg-orange-700 rounded font-semibold"
              >
                CADASTRAR
              </button>

              {/* INTERAÇÃO PARA LOGIN */}
              <p className="text-sm text-gray-300 text-center mt-4">
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
