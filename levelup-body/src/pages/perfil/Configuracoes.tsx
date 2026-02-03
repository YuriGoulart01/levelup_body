import DadosCorporaisForm from "../../components/perfil/configuracoes/DadosCorporaisForm";

export default function Configuracoes() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-orange-400">
        Configurações
      </h1>

      <p className="text-white/60 text-sm">
        Atualize seus dados corporais e acompanhe sua evolução.
      </p>

      <DadosCorporaisForm />
    </div>
  );
}
