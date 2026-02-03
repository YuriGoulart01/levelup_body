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
