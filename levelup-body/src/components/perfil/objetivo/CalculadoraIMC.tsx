import { useState } from "react";

type Props = {
  onCalcular: (imc: number, classificacao: string) => void;
};

export default function CalculadoraIMC({ onCalcular }: Props) {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  function calcularIMC() {
    const p = Number(peso);
    const a = Number(altura);

    if (!p || !a) return;

    const imc = p / (a * a);

    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    onCalcular(Number(imc.toFixed(1)), classificacao);
  }

  return (
    <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-6 max-w-xl">
      <h3 className="text-xl font-semibold mb-4">
        Informe seus dados
      </h3>

      <div className="space-y-4">
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3"
        />

        <input
          type="number"
          placeholder="Altura (ex: 1.75)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3"
        />

        <button
          onClick={calcularIMC}
          className="w-full bg-orange-500/20 text-orange-400 font-semibold py-3 rounded-lg hover:bg-orange-500/30 transition"
        >
          Calcular IMC
        </button>
      </div>
    </div>
  );
}
