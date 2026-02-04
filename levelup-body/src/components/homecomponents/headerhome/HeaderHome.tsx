export default function HeaderHome() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      
      {/* CAMADA 1 — IMAGEM (BASE) */}
      <img
        src="/assets/img/capivara.png"
        alt="Capivara LevelUpBody"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          object-[85%_20%]
          z-0
        "
      />

      {/* CAMADA 2 — OVERLAY ESCURO (TRANSPARÊNCIA CONTROLADA) */}
      <div className="
        absolute inset-0
        bg-gradient-to-r
        from-black/70
        via-black/40
        to-transparent
        z-10
      " />

      {/* CAMADA 3 — GLOW LARANJA */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_75%_40%,rgba(255,120,0,0.35),transparent_60%)]
        z-20
        pointer-events-none
      " />

      {/* CAMADA 4 — CONTEÚDO */}
      <div className="relative z-30 max-w-3xl px-10 py-32">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Unleash Your <br />
          <span className="text-orange-500">Inner Beast</span>
        </h1>

        <p className="mt-5 text-gray-300 text-lg max-w-xl">
          Transform Your Fitness Journey
        </p>

        <button className="
          mt-10
          px-7 py-3
          bg-orange-500
          hover:bg-orange-600
          transition
          rounded-xl
          font-semibold
          shadow-lg shadow-orange-500/30
        ">
          Start Your Evolution
        </button>
      </div>

    </section>
  )
}
