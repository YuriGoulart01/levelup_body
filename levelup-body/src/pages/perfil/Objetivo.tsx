
import { useState } from "react";
import ObjetivoConteudo from "../../components/perfil/objetivo/ObjetivoConteudo";
import ObjetivoResumo from "../../components/perfil/objetivo/ObjetivoResumo";

export default function Objetivos() {
  const [objetivo, setObjetivo] = useState<"gordura" | "massa" | "resistencia">("gordura");
  const [periodo, setPeriodo] = useState<"mensal" | "trimestral" | "semestral">("mensal");

  return (
    <>
      <ObjetivoResumo
        objetivo={objetivo}
        setObjetivo={setObjetivo}
        periodo={periodo}
        setPeriodo={setPeriodo}
      />

      <section className="bg-zinc-950 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <ObjetivoConteudo objetivo={objetivo} periodo={periodo} />
        </div>
      </section>
    </>
  );
}
