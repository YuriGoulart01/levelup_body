import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/login/Login";
import { Cadastro } from "./pages/cadastro/Cadastro";
import { PrivateRoute } from "./routes/PrivateRoute";

// 👉 Exemplo de página protegida
function Home() {
  return <h1>Home protegida</h1>;
}

export default function App() {
  return (
    <Routes>
      {/* 🔓 Rotas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />

      {/* 🔐 Rotas privadas */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      {/* 🚫 Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
