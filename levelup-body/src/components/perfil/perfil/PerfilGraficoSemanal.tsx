import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";
import { treinoSemanalMock } from "../../../mocks/perfil.mock";

export default function PerfilGraficoSemanal() {
  return (
    <div className="bg-zinc-900/60 rounded-2xl p-4 mb-6">
      <p className="text-sm text-white/70 mb-3">
        Atividade na semana
      </p>

      <div style={{ width: "100%", height: 120 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={treinoSemanalMock}>
            <XAxis
              dataKey="dia"
              stroke="#ffffff60"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip cursor={{ fill: "transparent" }} />

            <Bar
              dataKey="minutos"
              radius={[6, 6, 0, 0]}
              fill="#fb923c"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
