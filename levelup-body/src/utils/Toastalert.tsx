import { toast } from "react-toastify";

export function ToastSucesso(mensagem: string) {
  toast.success(mensagem, {
    position: "top-right",
    autoClose: 3000,
    theme: "dark",
  });
}

export function ToastErro(mensagem: string) {
  toast.error(mensagem, {
    position: "top-right",
    autoClose: 3000,
    theme: "dark",
  });
}

export function ToastInfo(mensagem: string) {
  toast.info(mensagem, {
    position: "top-right",
    autoClose: 3000,
    theme: "dark",
  });
}
