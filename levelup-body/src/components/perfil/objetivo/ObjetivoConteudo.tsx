import { useState } from "react";
import { objetivoMock } from "../../../mocks/objetivo.mock";
import CalculadoraIMC from "./CalculadoraIMC";
import MensagemMotivacional from "./MensagemMotivacional";

type Props = {
  objetivo: "gordura" | "massa" | "resistencia";
  periodo: "mensal" | "trimestral" | "semestral";
};

export default function ObjetivoConteudo({ objetivo, periodo }: Props) {
  const [imc, setImc] = useState<number | null>(null);
  const [classificacao, setClassificacao] = useState("");

  const plano = objetivoMock[objetivo].planos[periodo];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-8">
          <CalculadoraIMC
            onCalcular={(valor, classe) => {
              setImc(valor);
              setClassificacao(classe);
            }}
          />

          {imc && (
            <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-6 max-w-xl">
              <h3 className="text-xl font-semibold mb-2">Seu resultado</h3>

              <p className="text-lg">
                IMC: <span className="font-bold">{imc}</span>
              </p>

              <p className="text-white/70">Classificação: {classificacao}</p>
            </div>
          )}
        </div>

        {imc && <MensagemMotivacional imc={imc} />}
      </div>

      {imc && (
        <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Plano recomendado</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card titulo="Treinos / semana" valor={plano.treinosSemana} />
            <Card titulo="Foco" valor={plano.foco.join(", ")} />
            <Card titulo="Resultado esperado" valor={plano.resultado} />
          </div>
        </div>
      )}
    </div>
  );
}

function Card({ titulo, valor }: { titulo: string; valor: any }) {
  return (
    <div className="bg-black/60 border border-white/10 rounded-xl p-4">
      <p className="text-white/60 text-sm">{titulo}</p>
      <p className="text-lg font-semibold">{valor}</p>
    </div>
  );
}
