import { Routes, Route} from "react-router-dom";

import Login from "./pages/login/Login";
import { Cadastro } from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Perfil from "./pages/perfil/Perfil";


export default function App() {
  return (
   <>
      <Navbar />
      <ScrollToTop/>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={ <Home/>}/>
        <Route path="/home" element={ <Home/>}/>
        <Route path="/perfil" element={ <Perfil/>}/>



      </Routes>

      <Footer />
 
   </>

  );
}