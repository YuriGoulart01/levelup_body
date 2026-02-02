import { BarbellIcon, HeartIcon, FlameIcon } from "@phosphor-icons/react";
import TreinoVideo from "./TreinoVideo";
import { treinosMock } from "../../../mocks/treino.mock";

export default function PerfilTreinos() {
  return (
    <div className="space-y-16">

      {/* ===== FORÇA ===== */}
      <section id="treino-forca" className="space-y-6">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <BarbellIcon className="text-orange-400" size={22} />
          Força
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treinosMock
            .filter((treino) => treino.tipo === "forca")
            .map((treino) => (
              <TreinoCard
                key={treino.id}
                nome={treino.nome}
                duracaoMin={treino.duracaoMin}
                nivel={treino.nivel}
                youtubeId={treino.youtubeId}
              />
            ))}
        </div>
      </section>

      {/* ===== CARDIO ===== */}
      <section id="treino-cardio" className="space-y-6">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <HeartIcon className="text-red-400" size={22} />
          Cardio
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treinosMock
            .filter((treino) => treino.tipo === "cardio")
            .map((treino) => (
              <TreinoCard
                key={treino.id}
                nome={treino.nome}
                duracaoMin={treino.duracaoMin}
                nivel={treino.nivel}
                youtubeId={treino.youtubeId}
              />
            ))}
        </div>
      </section>

      {/* ===== ALONGAMENTO ===== */}
      <section id="treino-alongamento" className="space-y-6">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <FlameIcon className="text-emerald-400" size={22} />
          Alongamento
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treinosMock
            .filter((treino) => treino.tipo === "alongamento")
            .map((treino) => (
              <TreinoCard
                key={treino.id}
                nome={treino.nome}
                duracaoMin={treino.duracaoMin}
                nivel={treino.nivel}
                youtubeId={treino.youtubeId}
              />
            ))}
        </div>
      </section>

    </div>
  );
}

/* ===== CARD DE TREINO ===== */

type TreinoCardProps = {
  nome: string;
  duracaoMin: number;
  nivel: string;
  youtubeId: string;
};

function TreinoCard({
  nome,
  duracaoMin,
  nivel,
  youtubeId,
}: TreinoCardProps) {
  return (
    <div className="bg-zinc-900/80 rounded-xl overflow-hidden border border-white/10 hover:border-orange-400 transition">

      {/* VÍDEO */}
      <TreinoVideo youtubeId={youtubeId} />

      {/* INFO */}
      <div className="p-4">
        <p className="font-medium">{nome}</p>
        <span className="text-sm text-white/60">
          {duracaoMin} min • {nivel}
        </span>
      </div>
    </div>
  );
}
