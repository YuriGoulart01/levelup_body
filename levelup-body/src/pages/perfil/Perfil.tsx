import { useState } from "react";
import {
  UserCircleIcon,
  BarbellIcon,
  TargetIcon,
  GearIcon,
} from "@phosphor-icons/react";

import PerfilResumo from "../../components/perfil/perfil/PerfilResumo";
import PerfilEvolucao from "../../components/perfil/perfil/PerfilEvolucao";

import TreinoResumo from "../../components/perfil/treino/TreinoResumo";
import PerfilTreinos from "../../components/perfil/treino/PerfilTreino";

import ObjetivoResumo from "../../components/perfil/objetivo/ObjetivoResumo";
import ObjetivoConteudo from "../../components/perfil/objetivo/ObjetivoConteudo";

import Configuracoes from "./Configuracoes";

type AbaAtiva = "perfil" | "treinos" | "objetivos" | "configuracoes";

export default function Perfil() {
  const [abaAtiva, setAbaAtiva] = useState<AbaAtiva>("perfil");

  const [objetivo, setObjetivo] = useState<"gordura" | "massa" | "resistencia">(
    "gordura",
  );

  const [periodo, setPeriodo] = useState<"mensal" | "trimestral" | "semestral">(
    "mensal",
  );

  const background = "/backgrounds/semana3.png";

  return (
    <main className="w-full bg-black text-white">
      <section className="relative w-full">
        <img
          src={background}
          alt="Capivara LevelUpBody"
          className="w-full h-auto block"
        />

        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />

        <div className="absolute top-0 left-0 w-full">
          <div className="max-w-7xl mx-auto px-6 pt-8 space-y-10">
            <div className="flex gap-10">
              <button
                onClick={() => setAbaAtiva("perfil")}
                className={`flex items-center gap-2 pb-3 text-lg font-medium ${
                  abaAtiva === "perfil"
                    ? "text-orange-400 border-b-2 border-orange-400"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <UserCircleIcon size={20} />
                Perfil
              </button>

              <button
                onClick={() => setAbaAtiva("treinos")}
                className={`flex items-center gap-2 pb-3 text-lg font-medium ${
                  abaAtiva === "treinos"
                    ? "text-orange-400 border-b-2 border-orange-400"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <BarbellIcon size={20} />
                Treinos
              </button>

              <button
                onClick={() => setAbaAtiva("objetivos")}
                className={`flex items-center gap-2 pb-3 text-lg font-medium ${
                  abaAtiva === "objetivos"
                    ? "text-orange-400 border-b-2 border-orange-400"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <TargetIcon size={20} />
                Objetivos
              </button>

              <button
                onClick={() => setAbaAtiva("configuracoes")}
                className={`flex items-center gap-2 pb-3 text-lg font-medium ${
                  abaAtiva === "configuracoes"
                    ? "text-orange-400 border-b-2 border-orange-400"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <GearIcon size={20} />
                Atualizar
              </button>
            </div>

            <div className="mt-24">
              {abaAtiva === "perfil" && <PerfilResumo />}

              {abaAtiva === "treinos" && <TreinoResumo />}

              {abaAtiva === "objetivos" && (
                <ObjetivoResumo
                  objetivo={objetivo}
                  setObjetivo={setObjetivo}
                  periodo={periodo}
                  setPeriodo={setPeriodo}
                />
              )}

              {abaAtiva === "configuracoes" && (
                <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-xl w-full space-y-3">
                  <span className="inline-block text-sm bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
                    Atualização
                  </span>

                  <h2 className="text-2xl font-bold">Atualize seus dados</h2>

                  <Configuracoes />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {abaAtiva === "perfil" && (
        <section className="bg-zinc-950 py-16">
          <div className="max-w-7xl mx-auto px-6 space-y-10">
            <PerfilEvolucao />
          </div>
        </section>
      )}

      {abaAtiva === "treinos" && (
        <section className="bg-zinc-950 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <PerfilTreinos />
          </div>
        </section>
      )}

      {abaAtiva === "objetivos" && (
        <section className="bg-zinc-950 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <ObjetivoConteudo objetivo={objetivo} periodo={periodo} />
          </div>
        </section>
      )}
    </main>
  );
}
