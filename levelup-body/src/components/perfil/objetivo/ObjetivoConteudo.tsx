import { useState } from "react";
import CalculadoraIMC from "./CalculadoraIMC";
import MensagemMotivacional from "./MensagemMotivacional";
import { useAuth } from "../../../contexts/AuthContext";
import { DadosService } from "../../../service/dados.api";

type ResultadoIMC = {
  imc: number;
  classificacao: string;
};

export default function ObjetivoConteudo() {
  const { usuario } = useAuth();

  const [resultado, setResultado] = useState<ResultadoIMC | null>(null);
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  async function handleCalcular(
    imc: number,
    classificacao: string,
    peso: number,
    altura: number
  ) {
    if (!usuario) return;

    // 🔹 mostra resultado e mensagem
    setResultado({ imc, classificacao });
    setSucesso(false);

    try {
      setLoading(true);

      await DadosService.criar({
        peso,
        altura,
        imc,
        classificacao,
        objetivo: "objetivo_atual",
        usuario: { id: usuario.id },
      });

      setSucesso(true);
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <CalculadoraIMC onCalcular={handleCalcular} />

      {resultado && (
        <>
          {/* RESULTADO */}
          <div className="bg-black/60 border border-white/10 rounded-2xl p-6 max-w-xl">
            <p className="text-lg">
              <span className="text-white/60">IMC:</span>{" "}
              <strong>{resultado.imc}</strong>
            </p>

            <p className="text-white/60 mt-1">
              Classificação:{" "}
              <span className="text-orange-400">
                {resultado.classificacao}
              </span>
            </p>

            {loading && (
              <p className="text-sm text-white/40 mt-2">
                Salvando dados...
              </p>
            )}

            {sucesso && (
              <p className="text-sm text-emerald-400 mt-2">
                Dados salvos com sucesso ✅
              </p>
            )}
          </div>

          {/* MENSAGEM MOTIVACIONAL */}
          <MensagemMotivacional imc={resultado.imc} />
        </>
      )}
    </div>
  );
}
