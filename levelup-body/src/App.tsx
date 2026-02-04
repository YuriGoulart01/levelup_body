import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/login/Login";
import { Cadastro } from "./pages/cadastro/Cadastro";
import { PrivateRoute } from "./routes/PrivateRoute";
import Home from "./pages/home/Home";


export default function App() {
  return (
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
  );
}
