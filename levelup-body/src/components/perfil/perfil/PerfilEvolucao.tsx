import PerfilGrafico from "./PerfilGrafico";
import { useDados } from "../../../hooks/useDados";
import { useAuth } from "../../../context/AuthContext";

export default function PerfilEvolucao() {
  const { usuario } = useAuth();

  // 🔒 segurança: não tenta buscar sem usuário
  if (!usuario) {
    return (
      <section className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <p className="text-white/60">
          Faça login para visualizar sua evolução.
        </p>
      </section>
    );
  }

  const { dados, loading } = useDados(usuario.id);

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

  const dadosGrafico = dados
    .slice()
    .reverse()
    .map((dado, index) => ({
      data: `#${index + 1}`,
      peso: dado.peso,
      imc: dado.imc,
    }));

  return (
    <section className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/10">
      <h2 className="text-xl font-bold mb-6">Histórico e Evolução</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-sm text-white/60 mb-2">Peso (kg)</p>
          <PerfilGrafico
            data={dadosGrafico}
            dataKey="peso"
            color="#fb923c"
          />
        </div>

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
