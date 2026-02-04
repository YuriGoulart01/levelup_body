import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import type { Dados } from "../../../service/dados.api";

interface Props {
  dados: Dados[];
}

export default function PerfilGraficoImc({ dados }: Props) {
  if (!dados || dados.length === 0) {
    return (
      <div className="bg-zinc-900/60 rounded-2xl p-4 text-center text-white/60">
        Sem histórico de IMC
      </div>
    );
  }

  const dadosOrdenados = [...dados].reverse();

  const dadosGrafico = dadosOrdenados.map((item, index) => ({
    registro: index + 1,
    imc: item.imc,
  }));

  return (
    <div className="bg-zinc-900/60 rounded-2xl p-4">
      <p className="text-sm text-white/70 mb-3">Evolução do IMC</p>

      <div style={{ width: "100%", height: 180 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dadosGrafico}>
            <XAxis
              dataKey="registro"
              stroke="#ffffff60"
              tickLine={false}
              axisLine={false}
            />

            <YAxis stroke="#ffffff60" tickLine={false} axisLine={false} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="imc"
              stroke="#fb923c"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
