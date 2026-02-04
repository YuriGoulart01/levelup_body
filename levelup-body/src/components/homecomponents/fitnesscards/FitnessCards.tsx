const cards = [
  {
    title: 'Treinos Efetivos',
    icon: '🏋️',
    description:
      'Treinos bem estruturados aumentam resultados e reduzem riscos de lesão.',
  },
  {
    title: 'Dicas de Nutrição',
    icon: '🥗',
    description:
      'Uma alimentação equilibrada potencializa seus ganhos e sua recuperação.',
  },
  {
    title: 'Recuperação e Descanso',
    icon: '😴',
    description:
      'Descansar também faz parte do treino. O corpo evolui fora da academia.',
  },
]

function getTodayDate() {
  return new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
  })
}

export default function FitnessCards() {
  const today = getTodayDate()

  return (
    <section className="py-24 px-6 md:px-10">
      {/* Título da seção */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        Dicas <span className="text-orange-500">diárias</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map(card => (
          <div
            key={card.title}
            className="
              bg-zinc-900/90
              p-10
              rounded-2xl
              border border-orange-500/20
              shadow-[0_0_30px_rgba(249,115,22,0.15)]
              hover:shadow-[0_0_45px_rgba(249,115,22,0.35)]
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <div className="text-4xl mb-4">{card.icon}</div>

            <h3 className="text-xl font-semibold mb-3">
              {card.title}
            </h3>

            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              {card.description}
            </p>

            <span className="text-xs text-orange-400 font-medium">
              {today}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
