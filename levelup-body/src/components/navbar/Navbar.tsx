import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    signOut();
    navigate("/login");
  }

  function handlePerfilClick() {
    if (user) {
      navigate("/perfil");
    } else {
      navigate("/login", {
        state: { origem: "perfil" },
      });
    }
  }

  return (
    <div className="w-full bg-gradient-to-b from-black to-zinc-900 text-white flex justify-center py-4 shadow-lg shadow-black/50">
      <div className="container flex justify-between text-lg items-center px-4">
        {/* Logo */}
        <Link
          to="/home"
          className="group transition-all duration-300 hover:scale-105"
        >
          <img
            src="/assets/img/logo.png"
            alt="LevelUp Body"
            className="h-22 w-auto object-contain
                       group-hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.6)]
                       transition-all duration-300"
          />
        </Link>

        {/* Links */}
        <div className="flex gap-8 items-center font-medium">
          <Link
            to="/home"
            className="hover:text-orange-500 transition-all duration-300 hover:-translate-y-1"
          >
            Home
          </Link>

          <button
            onClick={handlePerfilClick}
            className="hover:text-orange-500 transition-all duration-300 hover:-translate-y-1"
          >
            Perfil
          </button>

          <div className="h-6 w-[1px] bg-gray-700 mx-2 hidden sm:block opacity-50" />

          {user ? (
            <>
              <span className="text-orange-400 font-semibold">{user.nome}</span>

              <button
                onClick={handleLogout}
                className="px-6 py-2 rounded-md font-bold text-white transition-all duration-300 bg-gradient-to-r from-orange-700 to-orange-500 hover:from-orange-600 hover:to-orange-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(234,88,12,0.6)]"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-orange-500 transition-all duration-300 hover:-translate-y-1"
              >
                Login
              </Link>

              <Link
                to="/cadastro"
                className="px-6 py-2 rounded-md font-bold text-white transition-all duration-300 bg-gradient-to-r from-orange-700 to-orange-500 hover:from-orange-600 hover:to-orange-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(234,88,12,0.6)]"
              >
                Cadastrar
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
