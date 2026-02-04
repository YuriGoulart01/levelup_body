import { Fire, Barbell, Heart, Calendar } from "@phosphor-icons/react";

type Props = {
  objetivo: string;
  setObjetivo: (o: any) => void;
  periodo: string;
  setPeriodo: (p: any) => void;
};

export default function ObjetivoResumo({
  objetivo,
  setObjetivo,
  periodo,
  setPeriodo,
}: Props) {
  return (
    <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-xl w-full">
      <span className="inline-block mb-3 text-sm bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
        Objetivos
      </span>

      <h2 className="text-2xl font-bold mb-4">Qual seu objetivo?</h2>

      <div className="flex flex-col gap-3 mb-6">
        <button
          onClick={() => setObjetivo("gordura")}
          className={`flex items-center justify-center gap-3 px-4 py-4 rounded-xl border font-semibold transition
      ${
        objetivo === "gordura"
          ? "border-orange-400 bg-orange-500/20 text-orange-400"
          : "border-white/10 bg-zinc-900/80 hover:border-orange-400"
      }`}
        >
          <Fire size={22} weight="fill" />
          Perder gordura
        </button>

        <button
          onClick={() => setObjetivo("massa")}
          className={`flex items-center justify-center gap-3 px-4 py-4 rounded-xl border font-semibold transition
      ${
        objetivo === "massa"
          ? "border-orange-400 bg-orange-500/20 text-orange-400"
          : "border-white/10 bg-zinc-900/80 hover:border-orange-400"
      }`}
        >
          <Barbell size={22} weight="fill" />
          Ganhar massa
        </button>

        <button
          onClick={() => setObjetivo("resistencia")}
          className={`flex items-center justify-center gap-3 px-4 py-4 rounded-xl border font-semibold transition
      ${
        objetivo === "resistencia"
          ? "border-orange-400 bg-orange-500/20 text-orange-400"
          : "border-white/10 bg-zinc-900/80 hover:border-orange-400"
      }`}
        >
          <Heart size={22} weight="fill" />
          Melhorar resistência
        </button>
      </div>

      <div className="flex gap-2">
        {["mensal", "trimestral", "semestral"].map((p) => (
          <button
            key={p}
            onClick={() => setPeriodo(p as any)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border font-medium transition
        ${
          periodo === p
            ? "border-orange-400 bg-orange-500/20 text-orange-400"
            : "border-white/10 bg-zinc-900/80 hover:border-orange-400"
        }`}
          >
            <Calendar size={18} />
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
