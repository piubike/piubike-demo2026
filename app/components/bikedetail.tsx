"use client";

interface Bike {
  name: string;
  desc: string;
  image: string;
}

interface BikeDetailProps {
  selected: Bike | null;
  onBack: () => void;
  onViewTalla: () => void;
}

export default function BikeDetail({ selected, onBack, onViewTalla }: BikeDetailProps) {
  return (
    <div className="min-h-screen">
      <button onClick={onBack} className="mb-6 text-sm text-zinc-400">
        ← Volver
      </button>

      <img
        src={selected?.image}
        className="w-full h-72 object-cover rounded-3xl mb-6"
      />

      {/* ---------- HERO RESILIENCE ---------- */}

<div className="mt-8 mb-8">

  <div className="inline-flex items-center gap-2 bg-[var(--bg-card)] border border-[var(--accent-earth)]/20 px-4 py-2 rounded-full mb-5">

    <div className="w-2 h-2 rounded-full bg-[var(--accent-earth)] animate-pulse"></div>

    <span className="uppercase tracking-[0.25em] text-xs text-[var(--accent-earth)]">
      AI PERFORMANCE BIKE
    </span>

  </div>

  <h1 className="text-4xl font-bold tracking-tight leading-tight">

    {selected?.name}

  </h1>

  <p className="mt-5 text-zinc-400 leading-8 text-lg">

    La primera bicicleta inteligente de Alvarez Bicycle desarrollada
    para una nueva generación de ciclistas. Incorpora un chip exclusivo,
    conectividad permanente, inteligencia artificial y un ecosistema
    digital diseñado para evolucionar junto a cada salida.

  </p>

</div>
{/* ---------- ESTADO DE LA BICICLETA ---------- */}

<div className="grid grid-cols-2 gap-4 mb-8">

  <div className="bg-[var(--bg-card)] border border-white/5 rounded-3xl p-5">

    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
      Chip
    </p>

    <h3 className="text-lg font-semibold text-[var(--accent-earth)]">
      Integrado
    </h3>

    <p className="text-sm text-zinc-400 mt-2">
      Tecnología Resilience instalada de fábrica.
    </p>

  </div>

  <div className="bg-[var(--bg-card)] border border-white/5 rounded-3xl p-5">

    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
      NFT
    </p>

    <h3 className="text-lg font-semibold text-[var(--accent-earth)]">
      Ready
    </h3>

    <p className="text-sm text-zinc-400 mt-2">
      Se generará automáticamente después de la compra.
    </p>

  </div>

  <div className="bg-[var(--bg-card)] border border-white/5 rounded-3xl p-5">

    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
      APP
    </p>

    <h3 className="text-lg font-semibold text-[var(--accent-earth)]">
      Resilience
    </h3>

    <p className="text-sm text-zinc-400 mt-2">
      Conectividad permanente mediante la App.
    </p>

  </div>

  <div className="bg-[var(--bg-card)] border border-white/5 rounded-3xl p-5">

    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
      Garantía
    </p>

    <h3 className="text-lg font-semibold text-[var(--accent-earth)]">
      5 años
    </h3>

    <p className="text-sm text-zinc-400 mt-2">
      Cobertura oficial Alvarez Bicycle.
    </p>

  </div>

</div>
{/* ---------- TECNOLOGÍA RESILIENCE ---------- */}

<div className="bg-[var(--bg-card)] border border-white/5 rounded-3xl p-6 mb-8">

  <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-earth)] mb-2">
    Tecnología Resilience
  </p>

  <h2 className="text-2xl font-semibold mb-6">
    Diseñada para evolucionar contigo
  </h2>

  <div className="space-y-5">

    <div className="flex justify-between border-b border-white/5 pb-3">
      <span>Chip inteligente integrado</span>
      <span className="text-[var(--accent-earth)]">●</span>
    </div>

    <div className="flex justify-between border-b border-white/5 pb-3">
      <span>Sensores de rendimiento</span>
      <span className="text-[var(--accent-earth)]">●</span>
    </div>

    <div className="flex justify-between border-b border-white/5 pb-3">
      <span>Bike Fitting Inteligente</span>
      <span className="text-[var(--accent-earth)]">●</span>
    </div>

    <div className="flex justify-between border-b border-white/5 pb-3">
      <span>Conectividad con App Resilience</span>
      <span className="text-[var(--accent-earth)]">●</span>
    </div>

    <div className="flex justify-between border-b border-white/5 pb-3">
      <span>Preparada para NFT Digital</span>
      <span className="text-[var(--accent-earth)]">●</span>
    </div>

    <div className="flex justify-between">
      <span>Actualizaciones OTA</span>
      <span className="text-[var(--accent-earth)]">●</span>
    </div>

  </div>

</div>

      {/* ---------- ESPECIFICACIONES ---------- */}

<div className="bg-[var(--bg-card)] border border-white/5 rounded-3xl p-6 mb-8">

  <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-earth)] mb-2">
    Especificaciones
  </p>

  <h2 className="text-2xl font-semibold mb-6">
    Ingeniería Alvarez Bicycle
  </h2>

  <div className="space-y-5">

    <div className="flex justify-between border-b border-white/5 pb-3">
      <span className="text-zinc-400">Cuadro</span>
      <span>Carbono Toray T800</span>
    </div>

    <div className="flex justify-between border-b border-white/5 pb-3">
      <span className="text-zinc-400">Grupo</span>
      <span>SRAM XX SL Eagle AXS</span>
    </div>

    <div className="flex justify-between border-b border-white/5 pb-3">
      <span className="text-zinc-400">Suspensión</span>
      <span>RockShox SID Ultimate</span>
    </div>

    <div className="flex justify-between border-b border-white/5 pb-3">
      <span className="text-zinc-400">Ruedas</span>
      <span>FIR Carbon Wheelset</span>
    </div>

    <div className="flex justify-between border-b border-white/5 pb-3">
      <span className="text-zinc-400">Peso</span>
      <span>10.2 kg</span>
    </div>

    <div className="flex justify-between border-b border-white/5 pb-3">
      <span className="text-zinc-400">Conectividad</span>
      <span>Chip Resilience AI</span>
    </div>

    <div className="flex justify-between">
      <span className="text-zinc-400">Garantía</span>
      <span>5 años</span>
    </div>

  </div>

</div>
{/* ---------- READY CARD ---------- */}

<div className="bg-gradient-to-b from-[var(--bg-card)] to-black border border-[var(--accent-earth)]/20 rounded-3xl p-7 mb-8">

  <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-earth)] mb-2">
    Ecosistema Resilience
  </p>

  <h2 className="text-3xl font-semibold tracking-tight mb-4">
    Mucho más que una bicicleta
  </h2>

  <p className="text-zinc-400 leading-7 mb-8">
    Cada ALA RESILIENCE incorpora un ecosistema digital diseñado para
    acompañarte antes, durante y después de cada salida.
  </p>

  <div className="space-y-4">

    <div className="flex justify-between border-b border-white/5 pb-3">
      <span>Chip inteligente integrado</span>
      <span className="text-[var(--accent-earth)]">✓</span>
    </div>

    <div className="flex justify-between border-b border-white/5 pb-3">
      <span>Generación automática del NFT</span>
      <span className="text-[var(--accent-earth)]">✓</span>
    </div>

    <div className="flex justify-between border-b border-white/5 pb-3">
      <span>Conexión con App Resilience</span>
      <span className="text-[var(--accent-earth)]">✓</span>
    </div>

    <div className="flex justify-between border-b border-white/5 pb-3">
      <span>Historial digital permanente</span>
      <span className="text-[var(--accent-earth)]">✓</span>
    </div>

    <div className="flex justify-between">
      <span>Actualizaciones inteligentes OTA</span>
      <span className="text-[var(--accent-earth)]">✓</span>
    </div>

  </div>

</div>

<button
  onClick={onViewTalla}
  className="
    w-full
    py-5
    rounded-3xl
    bg-gradient-to-r
    from-[#8B6B32]
    via-[var(--accent-earth)]
    to-[#D9B16E]
    text-black
    font-semibold
    text-lg
    hover:scale-[1.01]
    transition-all
    duration-300
    shadow-[0_0_40px_rgba(207,168,107,0.30)]
  "
>
  Configurar mi bicicleta
</button>
    </div>
  );
}