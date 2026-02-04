import { useState } from "react";
import { DadosService } from "../../../service/dados.api";

interface Props {
  usuarioId: number;
  onSucesso: () => void;
}

export default function PerfilFormularioDados({ usuarioId, onSucesso }: Props) {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      await DadosService.criar({
        peso: Number(peso),
        altura: Number(altura),
        objetivo,
        usuario: { id: usuarioId },
      });

      onSucesso();
      setPeso("");
      setAltura("");
      setObjetivo("");
    } catch (error) {
      console.error("Erro ao salvar dados", error);
      alert("Erro ao salvar dados");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900/80 border border-white/10 rounded-2xl p-6 space-y-4"
    >
      <h3 className="text-lg font-semibold text-orange-400">
        Atualizar meus dados
      </h3>

      <input
        type="number"
        step="0.1"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        className="w-full rounded-lg bg-black/60 border border-white/10 p-3 text-white"
        required
      />

      <input
        type="number"
        step="0.01"
        placeholder="Altura (m)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        className="w-full rounded-lg bg-black/60 border border-white/10 p-3 text-white"
        required
      />

      <input
        type="text"
        placeholder="Objetivo (ex: Ganhar massa)"
        value={objetivo}
        onChange={(e) => setObjetivo(e.target.value)}
        className="w-full rounded-lg bg-black/60 border border-white/10 p-3 text-white"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 hover:bg-orange-600 transition rounded-lg p-3 font-semibold"
      >
        {loading ? "Salvando..." : "Salvar progresso"}
      </button>
    </form>
  );
}
