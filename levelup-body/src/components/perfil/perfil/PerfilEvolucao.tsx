import PerfilGrafico from "./PerfilGrafico";
import { useDados } from "../../../hooks/useDados";

// ⚠️ temporário até integrar 100% com AuthContext
const usuarioId = 8;

export default function PerfilEvolucao() {
  const { dados, loading } = useDados(usuarioId);

  if (loading) {
    return (
      <section className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <p className="text-white/60">Carregando evolução...</p>
      </section>
    );
  }

  if (dados.length === 0) {
    return (
      <section className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <p className="text-white/60">
          Nenhum histórico disponível ainda.
        </p>
      </section>
    );
  }

  // 🔹 transforma dados do backend para o formato do gráfico
  const dadosGrafico = dados
    .slice() // cópia segura
    .reverse() // ordem cronológica
    .map((dado, index) => ({
      data: `#${index + 1}`, // depois pode virar data real
      peso: dado.peso,
      imc: dado.imc,
    }));

  return (
    <section className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/10">
      <h2 className="text-xl font-bold mb-6">Histórico e Evolução</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* GRÁFICO PESO */}
        <div>
          <p className="text-sm text-white/60 mb-2">Peso (kg)</p>
          <PerfilGrafico
            data={dadosGrafico}
            dataKey="peso"
            color="#fb923c"
          />
        </div>

        {/* GRÁFICO IMC */}
        <div>
          <p className="text-sm text-white/60 mb-2">IMC</p>
          <PerfilGrafico
            data={dadosGrafico}
            dataKey="imc"
            color="#facc15"
          />
        </div>
      </div>
    </section>
  );
}
