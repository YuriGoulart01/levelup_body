import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: {
    data: string;
    [key: string]: number | string;
  }[];
  dataKey: string;
  color: string;
}

export default function PerfilGrafico({ data, dataKey, color }: Props) {
  return (
    <div className="bg-zinc-900/60 rounded-2xl p-4">
      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />

            <XAxis
              dataKey="data"
              stroke="#ffffff60"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#ffffff60"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip cursor={{ fill: "transparent" }} />

            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
