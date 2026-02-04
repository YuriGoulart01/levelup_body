import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Perfil from "./pages/perfil/Perfil";

function App() {
  return (
    <BrowserRouter>
      <Perfil />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
