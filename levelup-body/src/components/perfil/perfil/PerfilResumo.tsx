import { CalendarIcon, ChartLineIcon, ClockIcon, FireIcon,} from "@phosphor-icons/react";
import { perfilResumoMock } from "../../../mocks/perfil.mock";
import PerfilGraficos from "./PerfilGrafico";
import PerfilGraficoSemanal from "./PerfilGraficoSemanal";


const perfil = perfilResumoMock;

export default function PerfilResumo() {
  return (
    <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-xl">
      
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full border-2 border-orange-400 flex items-center justify-center overflow-hidden">
   <img
  src={perfil.foto}
  alt="Avatar do usuário"
  className="w-full h-full object-cover"
/>



        </div>

        <div>
          <h2 className="text-2xl font-bold">{perfil.nome}</h2>

          <span className="inline-block mt-1 text-sm bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
            Nível {perfil.nivel} • {perfil.status}
          </span>

          <p className="text-white/60 text-sm mt-1">
            Você está evoluindo há {perfil.diasAtivos} dias
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        
        <div className="bg-zinc-900/80 rounded-xl p-4 text-center">
          <CalendarIcon size={22} className="mx-auto text-orange-400 mb-2" />
          <p className="text-lg font-bold">3 / 4</p>
          <span className="text-xs text-white/60">Treinos/semana</span>
        </div>

        <div className="bg-zinc-900/80 rounded-xl p-4 text-center">
          <ClockIcon size={22} className="mx-auto text-orange-400 mb-2" />
          <p className="text-lg font-bold">2h 40m</p>
          <span className="text-xs text-white/60">Tempo total</span>
        </div>

        <div className="bg-zinc-900/80 rounded-xl p-4 text-center">
          <FireIcon size={22} className="mx-auto text-orange-400 mb-2" />
          <p className="text-lg font-bold">7</p>
          <span className="text-xs text-white/60">Dias sequência</span>
        </div>

        {/* IMC ATUAL (temporário, depois sai daqui) */}
        <div className="bg-zinc-900/80 rounded-xl p-4 text-center">
          <ChartLineIcon size={22} className="mx-auto text-orange-400 mb-2" />
          <p className="text-lg font-bold">22.4</p>
          <span className="text-xs text-white/60">IMC atual</span>
          <p className="text-[11px] text-white/40 mt-1">
            Classificação normal
          </p>
        </div>

      </div>

      <PerfilGraficoSemanal />

     

     
    </div>
  );
}
