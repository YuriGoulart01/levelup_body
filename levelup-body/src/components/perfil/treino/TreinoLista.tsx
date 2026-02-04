import { treinosMock } from "../../../mocks/treino.mock";
import { Timer } from "@phosphor-icons/react";

export default function TreinoLista() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {treinosMock.map((treino) => (
        <div
          key={treino.id}
          className="bg-zinc-900/70 rounded-xl p-5 border border-white/10 hover:border-orange-400 transition"
        >
          <h3 className="text-lg font-semibold mb-2">{treino.nome}</h3>

          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Timer size={14} />
            {treino.duracaoMin} min • {treino.nivel}
          </div>
        </div>
      ))}
    </div>
  );
}
