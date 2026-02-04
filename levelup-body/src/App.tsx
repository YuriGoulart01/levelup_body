import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro";
import Login from "./pages/Login";


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  );
}
