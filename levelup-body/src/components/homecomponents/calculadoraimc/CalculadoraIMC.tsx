import { useState } from 'react'

export default function CalculadoraImc() {
  const [height, setHeight] = useState<string>('')
  const [weight, setWeight] = useState<string>('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [status, setStatus] = useState<string>('')

  function calculateBMI() {
    if (!height || !weight) return

    const heightNumber = Number(height)
    const weightNumber = Number(weight)
    if (heightNumber <= 0 || weightNumber <= 0) return

    const heightInMeters = heightNumber / 100
    const bmiNumber =
      weightNumber / (heightInMeters * heightInMeters)

    setBmi(bmiNumber)

    if (bmiNumber < 18.5) setStatus('Abaixo do peso')
    else if (bmiNumber < 25) setStatus('Peso normal')
    else if (bmiNumber < 30) setStatus('Acima do peso')
    else setStatus('Obesidade')
  }

  function statusColor() {
    if (bmi === null) return 'text-gray-400'
    if (bmi < 18.5) return 'text-blue-400'
    if (bmi < 25) return 'text-green-400'
    if (bmi < 30) return 'text-yellow-400'
    return 'text-red-500'
  }

  // limita o indicador até IMC 40
  const indicatorPosition =
    bmi !== null ? Math.min((bmi / 40) * 100, 100) : 0

  return (
    <section className="relative z-20 mt-8 px-6">
      <div className="
        max-w-4xl mx-auto
        bg-zinc-900/90
        backdrop-blur
        rounded-3xl
        p-10
        border border-orange-500/20
        shadow-[0_0_40px_rgba(255,120,0,0.25)]
      ">
        <h2 className="text-2xl font-bold text-orange-500 mb-8">
          Calculadora de IMC
        </h2>

        {/* INPUTS */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-400">Altura (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="mt-2 w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Peso (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mt-2 w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:border-orange-500 focus:outline-none"
            />
          </div>
        </div>

        <button
          onClick={calculateBMI}
          className="
            mt-10 w-full
            bg-orange-500
            hover:bg-orange-600
            hover:shadow-[0_0_25px_rgba(255,120,0,0.6)]
            transition
            rounded-xl
            py-4
            font-semibold
            text-lg
          "
        >
          Calcular IMC
        </button>

        {bmi !== null && (
          <div className="mt-10 text-center">
            <p className="text-4xl font-bold">
              {bmi.toFixed(1)}
            </p>

            <p className={`mt-2 text-lg font-semibold ${statusColor()}`}>
              {status}
            </p>

            <div className="mt-6">
              <div className="relative h-3 rounded-full bg-zinc-700 overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 to-red-500"
                />
                <div
                  className="
                    absolute top-1/2 -translate-y-1/2
                    w-4 h-4 rounded-full
                    bg-white
                    shadow
                    transition-all duration-700
                  "
                  style={{ left: `${indicatorPosition}%` }}
                />
              </div>

              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>&lt; 18.5</span>
                <span>25</span>
                <span>30+</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
