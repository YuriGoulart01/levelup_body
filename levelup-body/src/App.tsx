import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import "./App.css";
import { Cadastro } from "./pages/cadastro/Cadastro";

export default function App() {
  return (
    <Routes>
       <Route path="/" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>

  );
}
