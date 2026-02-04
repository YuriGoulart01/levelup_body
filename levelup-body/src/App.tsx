import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Perfil from "./pages/perfil/Perfil";

function App() {
  return (
    <BrowserRouter>
      <Perfil />

      {/* Toast global do app */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
