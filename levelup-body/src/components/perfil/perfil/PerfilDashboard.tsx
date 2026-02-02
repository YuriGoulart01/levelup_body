import { Fire, Timer, Target, ChartLineUp } from "@phosphor-icons/react";
import { perfilDashboardMock } from "../../../mocks/perfil.mock";

export default function PerfilDashboard() {
  const {
    treinosSemana,
    proximoTreino,
    tempoMedioMin,
    streak,
  } = perfilDashboardMock;

  const progresso = Math.round(
    (treinosSemana.feitos / treinosSemana.meta) * 100
  );

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* CARD 1 – PROGRESSO SEMANAL */}
      <div className="bg-zinc-900/80 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-2 text-orange-400">
          <ChartLineUp size={20} />
          <p className="text-sm">Progresso semanal</p>
        </div>

        {/* PORCENTAGEM */}
        <p className="text-3xl font-bold mb-1">
          {progresso}%
        </p>

        <p className="text-sm text-white/60 mb-3">
          {treinosSemana.feitos} de {treinosSemana.meta} treinos concluídos
        </p>

        {/* BARRA */}
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-orange-400 rounded-full transition-all"
            style={{ width: `${progresso}%` }}
          />
        </div>
      </div>

      {/* CARD 2 – PRÓXIMO TREINO */}
      <div className="bg-zinc-900/80 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-2 text-orange-400">
          <Target size={20} />
          <p className="text-sm">Próximo treino</p>
        </div>

        <p className="text-xl font-semibold">
          {proximoTreino.tipo}
        </p>

        <span className="text-sm text-white/50 flex items-center gap-1 mt-1">
          <Timer size={14} />
          {proximoTreino.duracaoMin} minutos
        </span>
      </div>

      {/* CARD 3 – TEMPO MÉDIO */}
      <div className="bg-zinc-900/80 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-2 text-orange-400">
          <Timer size={20} />
          <p className="text-sm">Tempo médio</p>
        </div>

        <p className="text-2xl font-bold">
          {tempoMedioMin} min
        </p>

        <span className="text-sm text-white/50">
          por treino
        </span>
      </div>

      {/* CARD 4 – STREAK */}
      <div className="bg-zinc-900/80 rounded-2xl p-6">
        <div
          className={`flex items-center gap-2 mb-2 ${
            streak.ativa ? "text-emerald-400" : "text-red-400"
          }`}
        >
          <Fire size={20} />
          <p className="text-sm">Sequência</p>
        </div>

        <p
          className={`text-2xl font-bold ${
            streak.ativa ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {streak.dias} dias
        </p>

        <span className="text-sm text-white/50">
          {streak.ativa ? "Sequência ativa" : "Sequência quebrada"}
        </span>
      </div>

    </section>
  );
}
