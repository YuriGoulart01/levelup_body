import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/login/Login";
import { Cadastro } from "./pages/cadastro/Cadastro";
import { PrivateRoute } from "./routes/PrivateRoute";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      {/* 🔓 Rotas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />

      {/* 🔐 Rotas privadas */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      {/* 🔁 Redirecionamento padrão */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* 🚫 Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
    <Footer/>
    </>
  );
}
