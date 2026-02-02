import PerfilGrafico from "./PerfilGrafico";
import { historicoEvolucaoMock } from "../../../mocks/perfil.mock";

export default function PerfilEvolucao() {
  return (
    <section className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/10">
      <h2 className="text-xl font-bold mb-6">Histórico e Evolução</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* GRÁFICO PESO */}
        <div>
          <p className="text-sm text-white/60 mb-2">Peso (kg)</p>
          <PerfilGrafico
            data={historicoEvolucaoMock}
            dataKey="peso"
            color="#fb923c"
          />
        </div>

        {/* GRÁFICO IMC */}
        <div>
          <p className="text-sm text-white/60 mb-2">IMC</p>
          <PerfilGrafico
            data={historicoEvolucaoMock}
            dataKey="imc"
            color="#facc15"
          />
        </div>

      </div>
    </section>
  );
}
