import { useEffect, useState } from "react";
import { useDados } from "../../../hooks/useDados";
import { DadosService } from "../../../service/dados.api";

export default function DadosCorporaisForm() {
  // ⚠️ depois vem do AuthContext
  const usuarioId = 8;

  const { ultimoDado, recarregar } = useDados(usuarioId);

  const [peso, setPeso] = useState("");
  const [alturaCm, setAlturaCm] = useState(""); // 🔥 agora em centímetros
  const [objetivo, setObjetivo] = useState("");
  const [loading, setLoading] = useState(false);

  // sincroniza quando vier do backend (converte m → cm)
  useEffect(() => {
    if (ultimoDado) {
      setPeso(String(ultimoDado.peso));
      setAlturaCm(String(ultimoDado.altura * 100)); // 🔥 m → cm
      setObjetivo(ultimoDado.objetivo ?? "");
    }
  }, [ultimoDado]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const alturaEmMetros = Number(alturaCm) / 100; // 🔥 cm → m

      if (ultimoDado) {
        // PUT
        await DadosService.atualizar({
          id: ultimoDado.id,
          peso: Number(peso),
          altura: alturaEmMetros,
          objetivo,
        });
      } else {
        // POST
        await DadosService.criar({
          peso: Number(peso),
          altura: alturaEmMetros,
          objetivo,
          usuario: { id: usuarioId },
        });
      }

      await recarregar();
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar dados");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-zinc-900/80 rounded-2xl p-6 border border-white/10">
      <h2 className="text-lg font-semibold mb-4 text-orange-400">
        Dados corporais
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          className="w-full rounded-lg bg-black/60 p-3 outline-none"
          required
        />

        <input
          type="number"
          placeholder="Altura (cm)"
          value={alturaCm}
          onChange={(e) => setAlturaCm(e.target.value)}
          className="w-full rounded-lg bg-black/60 p-3 outline-none"
          required
        />

        <input
          type="text"
          placeholder="Objetivo (ex: Ganhar massa)"
          value={objetivo}
          onChange={(e) => setObjetivo(e.target.value)}
          className="w-full rounded-lg bg-black/60 p-3 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 transition rounded-lg py-3 font-semibold"
        >
          {loading ? "Salvando..." : "Salvar"}
        </button>
      </form>
    </div>
  );
}
