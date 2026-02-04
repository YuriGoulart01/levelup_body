import CalculadoraImc from "../../components/homecomponents/calculadoraimc/CalculadoraIMC";
import FitnessCards from "../../components/homecomponents/fitnesscards/FitnessCards";
import GaleriaAlunos from "../../components/homecomponents/galeriaalunos/GaleriaAlunos";
import HeaderHome from "../../components/homecomponents/headerhome/HeaderHome";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeaderHome />
      <CalculadoraImc />
      <FitnessCards />
      <GaleriaAlunos />
    </main>
  )
}
