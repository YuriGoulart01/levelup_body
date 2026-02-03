import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import capivara from "../assets/capivara-planodefundo5.png";
import { api } from "../service/api";

export function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");


  useEffect(() => {
    if (!window.google) return;

    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleGoogleResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleButton"),
      {
        theme: "outline",
        size: "large",
        width: 320,
      }
    );
  }, []);

  function handleGoogleResponse(response: any) {
    api
      .post("/auth/google", {
        idToken: response.credential,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      })
      .catch(() => {
        setErro("Erro ao autenticar com Google");
      });
  }


 
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (senha !== confirmarSenha) {
    setErro("As senhas não conferem");
    return;
  }

  setErro("");

  try {
    await api.post("/usuarios/cadastrar", {
      nome,
      usuario: email,
      senha,
    });

    navigate("/login");
  } catch (error: any) {
    setErro(
      error.response?.data?.message || "Erro ao realizar cadastro"
    );
  }
};

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${capivara})` }}
    >
     
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
    
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-xl text-white">
            <h1 className="text-5xl mb-2 font-medium">Crie sua Conta</h1>
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
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className="w-full px-4 py-3 rounded bg-black/50 border border-gray-600 focus:outline-none focus:border-orange-500"
                required
              />

              {erro && (
                <p className="text-red-500 text-sm text-center">{erro}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-orange-600 hover:bg-orange-700 rounded font-semibold"
              >
                CADASTRAR
              </button>

           
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-gray-600" />
                <span className="text-sm text-gray-400">ou</span>
                <div className="flex-1 h-px bg-gray-600" />
              </div>

              <div className="flex justify-center">
                <div id="googleButton" />
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
