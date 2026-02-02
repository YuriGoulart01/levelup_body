import TreinoResumo from "../../components/perfil/treino/TreinoResumo";
import TreinoHoje from "../../components/perfil/treino/TreinoHoje";
import PerfilTreinos from "../../components/perfil/treino/PerfilTreino";

export default function Treinos() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">

        {/* TÍTULO */}
        <h1 className="text-3xl font-bold">
          Treinos
        </h1>

        {/* RESUMO / ESCOLHA RÁPIDA */}
        <TreinoResumo />

        {/* TREINO DE HOJE */}
        <TreinoHoje />

        {/* LISTA DE TREINOS POR CATEGORIA */}
        <PerfilTreinos />

      </div>
    </main>
  );
}
