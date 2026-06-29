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

      <h1 className="text-2xl font-semibold tracking-tight">
        {selected?.name}
      </h1>

      <p className="text-zinc-300 text-lg leading-relaxed mb-8">
        {selected?.name?.includes("RESILIENCE")
          ? "La primera bicicleta inteligente de Alvarez Bicycle con chip integrado, conectividad avanzada y tecnología diseñada para el rendimiento moderno."
          : selected?.desc}
      </p>

      <div className="bg-[var(--bg-card)] border border-white/5 rounded-3xl p-6 mb-8">
        <h3 className="text-2xl font-semibold mb-5">Componentes</h3>
        <div className="space-y-3 text-zinc-300">
          <p>Transmisión SRAM XX1</p>
          <p>Horquilla RockShox</p>
          <p>Ruedas FIR</p>
        </div>
      </div>

      <button
        onClick={onViewTalla}
        className="w-full bg-[var(--accent-earth)] text-black py-4 rounded-2xl font-semibold"
      >
        Ver tu talla
      </button>
    </div>
  );
}