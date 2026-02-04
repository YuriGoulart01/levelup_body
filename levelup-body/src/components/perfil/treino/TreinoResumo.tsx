import { BarbellIcon, HeartIcon, FlameIcon } from "@phosphor-icons/react";

export default function TreinoResumo() {
  function scrollTo(id: string) {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-xl w-full">

      <span className="inline-block mb-3 text-sm bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
        Treinos
      </span>

      <h2 className="text-2xl font-bold mb-4">
        Qual exercício você quer fazer hoje?
      </h2>

     
      {/* BOTÕES */}
      <div className="flex flex-col gap-3">

        {/* FORÇA */}
        <button
          onClick={() => scrollTo("treino-forca")}
          className="flex flex-col items-center justify-center
                     w-full bg-zinc-900/80
                     hover:border-orange-400 border border-white/10
                     rounded-xl px-4 py-4 transition"
        >
          <BarbellIcon size={24} className="text-orange-400 mb-1" />
          <span className="text-base font-semibold">Força</span>
        </button>

        {/* CARDIO */}
        <button
          onClick={() => scrollTo("treino-cardio")}
          className="flex flex-col items-center justify-center
                     w-full bg-zinc-900/80
                     hover:border-red-400 border border-white/10
                     rounded-xl px-4 py-4 transition"
        >
          <HeartIcon size={24} className="text-red-400 mb-1" />
          <span className="text-base font-semibold">Cardio</span>
        </button>

        {/* ALONGAMENTO */}
        <button
          onClick={() => scrollTo("treino-alongamento")}
          className="flex flex-col items-center justify-center
                     w-full bg-zinc-900/80
                     hover:border-emerald-400 border border-white/10
                     rounded-xl px-4 py-4 transition"
        >
          <FlameIcon size={24} className="text-emerald-400 mb-1" />
          <span className="text-base font-semibold">Alongamento</span>
        </button>

      </div>
    </div>
  );
}
