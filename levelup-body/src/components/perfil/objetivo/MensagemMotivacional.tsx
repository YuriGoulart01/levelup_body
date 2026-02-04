import { Heart, Fire, ShieldCheck, Trophy } from "@phosphor-icons/react";

type Props = {
  imc: number;
};

export default function MensagemMotivacional({ imc }: Props) {
  let titulo = "";
  let mensagem = "";
  let Icon = Heart;
  let cor = "";

  if (imc < 18.5) {
    titulo = "Hora de nutrir e fortalecer seu corpo";
    mensagem = `
Seu corpo precisa de mais energia para evoluir com saúde. Este é o momento de focar em treinos leves de força, que ajudam a estimular os músculos sem sobrecarregar o organismo. Combine os exercícios com uma alimentação bem distribuída ao longo do dia, evitando pular refeições. O descanso também faz parte do processo: dormir bem ajuda seu corpo a se recuperar, ganhar força e melhorar sua disposição.
Evoluir não é pressa, é constância.
    `;
    Icon = ShieldCheck;
    cor = "text-blue-400";
  } else if (imc < 25) {
    titulo = "Você encontrou o equilíbrio certo";
    mensagem = `
Parabéns! Seu corpo está em uma faixa saudável e isso mostra que seus hábitos estão funcionando. Agora, o foco é manter a consistência. Continue treinando regularmente, variando entre força, cardio e alongamento. Uma alimentação equilibrada sustenta sua energia diária, enquanto boas noites de sono aceleram sua recuperação e mantêm seu desempenho em alta. Pequenas escolhas diárias são o que garantem evolução a longo prazo.
    `;
    Icon = Heart;
    cor = "text-emerald-400";
  } else if (imc < 30) {
    titulo = "Pequenos passos constroem grandes resultados";
    mensagem = `
Você já iniciou o caminho certo. Não é sobre treinar pesado todos os dias, mas sim manter uma rotina ativa e possível. Treinos frequentes, mesmo mais curtos, ajudam seu corpo a responder melhor. Ajustes simples na alimentação, somados a um sono de qualidade, fazem uma enorme diferença. Com regularidade, você vai sentir mais leveza, energia e confiança.
    `;
    Icon = Fire;
    cor = "text-orange-400";
  } else {
    titulo = "Cuidar de você é um ato de coragem";
    mensagem = `
Decidir mudar já é uma grande vitória. Não existe transformação instantânea, existe constância. Escolha treinos que respeitem seu ritmo e evolua aos poucos. Alimentação consciente, sem cobranças extremas, e boas horas de sono ajudam seu corpo a se adaptar melhor aos novos hábitos. Cada treino feito, cada escolha melhor e cada dia ativo contam na sua jornada. Você não está sozinho nesse processo. 
    `;
    Icon = Trophy;
    cor = "text-red-400";
  }

  return (
    <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-6 max-w-xl">
      <div className="flex items-center gap-4 mb-4">
        <Icon size={48} className={cor} />

        <h3 className={`text-xl font-semibold ${cor}`}>{titulo}</h3>
      </div>

      <p className="text-white/70 whitespace-pre-line leading-relaxed text-justify">
        {mensagem.trim()}
      </p>
    </div>
  );
}
