import { Fire, Timer } from "@phosphor-icons/react";
import { treinoHojeMock } from "../../../mocks/treino.mock";

export default function TreinoHoje() {
  const treino = treinoHojeMock;

  return (
    <div className="bg-zinc-900/80 rounded-2xl p-6 border border-white/10">
      <div className="flex items-center gap-2 text-orange-400 mb-2">
        <Fire size={20} />
        <p className="text-sm">Treino de hoje</p>
      </div>

      <h2 className="text-2xl font-bold mb-2">{treino.nome}</h2>

      <div className="flex items-center gap-4 text-white/70 text-sm mb-4">
        <span className="flex items-center gap-1">
          <Timer size={14} /> {treino.duracaoMin} min
        </span>
        <span>Nível {treino.nivel}</span>
      </div>

      <button className="bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded-lg font-medium">
        Iniciar treino
      </button>
    </div>
  );
}
