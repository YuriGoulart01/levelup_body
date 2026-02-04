import { useState } from 'react'

const alunos = [
    { nome: 'Rato', img: 'rato.png' },
    { nome: 'Pato', img: 'pato.png' },
    { nome: 'Preguiça', img: 'preguica.png' },
    { nome: 'panda', img: 'pandafemea.png' },
    { nome: 'Raposa', img: 'raposa.png' },
    { nome: 'cachorro', img: 'cachorro.png' },
    { nome: 'gato', img: 'gato.png' },
    { nome: 'porco espinho', img: 'porcoespinho.png' },
    { nome: 'coelho', img: 'coelho.png' },
    { nome: 'rata', img: 'rata.png' },
    { nome: 'panda', img: 'panda.png' },
    { nome: 'gata', img: 'gata.png' },
    { nome: 'raposo', img: 'raposo.png' },
  ]

export default function GaleriaAlunos() {
  const [index, setIndex] = useState(1)

  function prev() {
    setIndex((i) => (i === 0 ? alunos.length - 1 : i - 1))
  }

  function next() {
    setIndex((i) => (i === alunos.length - 1 ? 0 : i + 1))
  }

  function getAluno(pos: number) {
    const i = (index + pos + alunos.length) % alunos.length
    return alunos[i]
  }

  return (
    <section className="py-28 bg-black relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-16 text-white">
        Nossa{' '}
        <span className="text-orange-500">
          comunidade
        </span>
      </h2>



      <div className="relative flex items-center justify-center gap-10">

        <button
          onClick={prev}
          className="text-orange-400 text-4xl hover:scale-110 transition"
        >
          ‹
        </button>

        <AlunoCard aluno={getAluno(-1)} side />

        <AlunoCard aluno={getAluno(0)} active />

        <AlunoCard aluno={getAluno(1)} side />

        <button
          onClick={next}
          className="text-orange-400 text-4xl hover:scale-110 transition"
        >
          ›
        </button>
      </div>
    </section>
  )
}

function AlunoCard({
  aluno,
  active = false,
  side = false,
}: {
  aluno: { nome: string; img: string }
  active?: boolean
  side?: boolean
}) {
  return (
    <div
      className={`
        relative
        rounded-3xl
        transition-all duration-500
        ${active ? 'scale-110 z-10' : 'scale-90 opacity-70'}
        ${side ? 'hidden md:block' : ''}
      `}
      style={{
        boxShadow: active
          ? '0 0 40px rgba(255,120,0,0.6)'
          : '0 0 20px rgba(255,120,0,0.25)',
      }}
    >
      <img
        src={`/assets/img/${aluno.img}`}
        alt={aluno.nome}
        className="
          w-72 h-96
          object-cover
          rounded-3xl
        "
      />

      <div className="
        absolute bottom-0 w-full
        bg-black/60 backdrop-blur
        text-center py-3
        text-lg font-semibold
      ">
        {aluno.nome}
      </div>
    </div>
  )
}
