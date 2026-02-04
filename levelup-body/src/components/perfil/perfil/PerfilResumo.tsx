import {
  CalendarIcon,
  ChartLineIcon,
  ClockIcon,
  FireIcon,
} from "@phosphor-icons/react";

import PerfilGraficoSemanal from "./PerfilGraficoSemanal";
import { useDados } from "../../../hooks/useDados";
import { useUsuario } from "../../../hooks/useUsuario";

export default function PerfilResumo() {
  // ⚠️ depois isso vem do AuthContext
  const usuarioId = 8;

  const { usuario, loading: loadingUsuario } = useUsuario(usuarioId);
  const { ultimoDado, loading: loadingDados } = useDados(usuarioId);

  // 🔹 Loading único (não quebra layout)
  if (loadingUsuario || loadingDados) {
    return (
      <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-xl">
        <p className="text-white/60">Carregando resumo do perfil...</p>
      </div>
    );
  }

  return (
    <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-xl">

      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full border-2 border-orange-400 overflow-hidden bg-zinc-900">
          {usuario?.foto ? (
            <img
              src={usuario.foto}
              alt="Avatar do usuário"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/40 text-xs">
              Avatar
            </div>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            {usuario?.nome ?? "Usuário"}
          </h2>

          <span className="inline-block mt-1 text-sm bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
            Nível 2 • Em evolução
          </span>

          <p className="text-white/60 text-sm mt-1">
            Bem-vindo(a) de volta, vamos treinar hoje?
          </p>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-4 gap-4 mb-6">

        <div className="bg-zinc-900/80 rounded-xl p-4 text-center">
          <CalendarIcon size={22} className="mx-auto text-orange-400 mb-2" />
          <p className="text-lg font-bold">3 / 4</p>
          <span className="text-xs text-white/60">Treinos/semana</span>
        </div>

        <div className="bg-zinc-900/80 rounded-xl p-4 text-center">
          <ClockIcon size={22} className="mx-auto text-orange-400 mb-2" />
          <p className="text-lg font-bold">2h 40m</p>
          <span className="text-xs text-white/60">Tempo total</span>
        </div>

        <div className="bg-zinc-900/80 rounded-xl p-4 text-center">
          <FireIcon size={22} className="mx-auto text-orange-400 mb-2" />
          <p className="text-lg font-bold">7</p>
          <span className="text-xs text-white/60">Dias sequência</span>
        </div>

        {/* IMC – apenas número */}
        <div className="bg-zinc-900/80 rounded-xl p-4 text-center">
          <ChartLineIcon size={22} className="mx-auto text-orange-400 mb-2" />
          <p className="text-lg font-bold">
            {ultimoDado?.imc ?? "--"}
          </p>
          <span className="text-xs text-white/60">IMC atual</span>
        </div>

      </div>

      {/* ================= GRÁFICO SEMANAL ================= */}
      <PerfilGraficoSemanal />

    </div>
  );
}
