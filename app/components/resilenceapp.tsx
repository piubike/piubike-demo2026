"use client";

import { useState } from "react";

import {
  Bike,
  Ticket,
  User,
  Cpu,
  MapPinned,
  BarChart3,
  Crown,
  Gauge,
  RotateCw,
  Ruler,
  Sparkles,
  TrendingUp,
  BrainCircuit,
  Cloud,
  ArrowLeft,
} from "lucide-react";

interface resilenceappProps {
  selected: any;
  getSize: () => string;
  onBackHome: () => void;
  onActivateProPayment: () => void;
}

export default function resilenceapp({
  selected,
  getSize,
  onBackHome,
  onActivateProPayment,
}: resilenceappProps) {
  const [subView, setSubView] = useState("menu");

  return (
    <div className="min-h-screen">

      {/* ---------------- MENU ---------------- */}

      {subView === "menu" && (
        <div className="text-center">

          <div className="flex items-center justify-center gap-3 mb-8">
            <Bike
              className="w-8 h-8 text-[var(--accent-earth)]"
              strokeWidth={1.8}
            />
            <h2 className="text-3xl font-semibold tracking-tight">
              Mi App Resilence
            </h2>
          </div>

          {selected ? (

            <div className="bg-[var(--bg-main)] border border-white/5 rounded-3xl p-6 mb-6 text-left">

              <div className="flex items-center gap-3 mb-5">
                <Ticket
                  className="w-6 h-6 text-[var(--accent-earth)]"
                  strokeWidth={1.8}
                />
                <h3 className="text-xl font-semibold">
                  Tu NFT Activo
                </h3>
              </div>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span className="text-zinc-400">
                    Modelo
                  </span>

                  <span className="font-medium">
                    {selected.name}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-zinc-400">
                    Talla
                  </span>

                  <span className="font-medium">
                    {getSize()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-zinc-400">
                    Fecha
                  </span>

                  <span className="font-medium">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>

              </div>

            </div>

          ) : (

            <div className="bg-zinc-900/40 border border-dashed border-white/10 rounded-3xl p-6 mb-6">

              <div className="flex items-center justify-center gap-3 mb-3">

                <User
                  className="w-7 h-7 text-[var(--accent-earth)]"
                  strokeWidth={1.8}
                />

                <h3 className="text-xl font-semibold">
                  Cuenta de Invitado
                </h3>

              </div>

              <p className="text-zinc-400 mb-4">
                No tienes ninguna bicicleta vinculada todavía.
              </p>

              <span className="inline-flex bg-white/5 px-4 py-2 rounded-full text-xs tracking-wider uppercase text-zinc-300">
                Modo demostración
              </span>

            </div>

          )}

          <div className="grid gap-4">

            <button className="bg-[var(--bg-card)] border border-white/5 rounded-2xl py-4 px-5 flex items-center justify-center gap-3 hover:border-[var(--accent-earth)] transition-all">

              <Cpu
                className="w-5 h-5 text-[var(--accent-earth)]"
                strokeWidth={1.8}
              />

              <span>
                Conectar Chip
              </span>

            </button>

            <button className="bg-[var(--bg-card)] border border-white/5 rounded-2xl py-4 px-5 flex items-center justify-center gap-3 hover:border-[var(--accent-earth)] transition-all">

              <MapPinned
                className="w-5 h-5 text-[var(--accent-earth)]"
                strokeWidth={1.8}
              />

              <span>
                Mi Recorrido
              </span>

            </button>

            <button
              onClick={() => setSubView("stats")}
              className="bg-[var(--accent-earth)] text-black rounded-2xl py-4 px-5 flex items-center justify-center gap-3 font-medium shadow-[0_0_30px_rgba(207,168,107,0.25)]"
            >

              <BarChart3
                className="w-5 h-5"
                strokeWidth={2}
              />

              <span>
                Resilence Analytics
              </span>

            </button>

          </div>

          <button
            onClick={() => setSubView("pro")}
            className="w-full mt-8 rounded-2xl py-4 bg-gradient-to-r from-[#8B6B32] via-[var(--accent-earth)] to-[#F0D7A1] text-black font-semibold flex items-center justify-center gap-3"
          >

            <Crown
              className="w-5 h-5"
              strokeWidth={2}
            />

            Activar Resilence PRO

          </button>

          <button
            onClick={onBackHome}
            className="mt-8 flex items-center justify-center gap-2 w-full text-zinc-400 hover:text-white transition-colors"
          >

            <ArrowLeft
              className="w-4 h-4"
              strokeWidth={1.8}
            />

            Volver al Inicio

          </button>

        </div>
      )}

            {/* ---------------- STATS ---------------- */}

      {subView === "stats" && (
        <div className="text-center">

          <div className="flex items-center justify-center gap-3 mb-8">

            <BarChart3
              className="w-7 h-7 text-[var(--accent-earth)]"
              strokeWidth={1.8}
            />

            <h2 className="text-3xl font-semibold tracking-tight">
              Datos Resilence
            </h2>

          </div>

          <div className="bg-[var(--bg-card)] rounded-3xl border border-white/5 p-6 text-left">

            <div className="flex items-center justify-between py-3 border-b border-white/5">

              <div className="flex items-center gap-3">

                <Gauge
                  className="w-5 h-5 text-[var(--accent-earth)]"
                  strokeWidth={1.8}
                />

                <span>Velocidad</span>

              </div>

              <span className="font-medium">
                32 km/h
              </span>

            </div>

            <div className="flex items-center justify-between py-3 border-b border-white/5">

              <div className="flex items-center gap-3">

                <RotateCw
                  className="w-5 h-5 text-[var(--accent-earth)]"
                  strokeWidth={1.8}
                />

                <span>Cadencia</span>

              </div>

              <span className="font-medium">
                85 rpm
              </span>

            </div>

            <div className="flex items-center justify-between py-3">

              <div className="flex items-center gap-3">

                <Ruler
                  className="w-5 h-5 text-[var(--accent-earth)]"
                  strokeWidth={1.8}
                />

                <span>Altura del sillín</span>

              </div>

              <span className="font-medium">
                74 cm
              </span>

            </div>

            <div className="mt-6 border-t border-white/5 pt-5">

              <div className="flex gap-3">

                <Sparkles
                  className="w-5 h-5 text-[var(--accent-earth)] mt-1"
                  strokeWidth={1.8}
                />

                <div>

                  <p className="font-semibold mb-1">
                    Recomendación Inteligente
                  </p>

                  <p className="text-sm text-zinc-400">
                    Subir el sillín +1 cm mejorará la eficiencia del pedaleo y reducirá la fatiga.
                  </p>

                </div>

              </div>

            </div>

          </div>

          <button
            onClick={() => setSubView("menu")}
            className="mt-8 w-full py-4 rounded-2xl bg-[var(--accent-earth)] text-black font-medium hover:opacity-90 transition-all"
          >
            Volver
          </button>

        </div>
      )}

      {/* ---------------- PRO ---------------- */}

      {subView === "pro" && (
        <div className="text-center">

          <div className="flex items-center justify-center gap-3 mb-8">

            <Crown
              className="w-8 h-8 text-[var(--accent-earth)]"
              strokeWidth={1.8}
            />

            <h2 className="text-3xl font-semibold tracking-tight">
              Resilence PRO
            </h2>

          </div>

          <div className="bg-[var(--bg-card)] rounded-3xl border border-white/5 p-6 text-left space-y-5">

            <div className="flex items-center gap-3">

              <TrendingUp
                className="w-5 h-5 text-[var(--accent-earth)]"
                strokeWidth={1.8}
              />

              <span>Historial completo de rendimiento</span>

            </div>

            <div className="flex items-center gap-3">

              <BarChart3
                className="w-5 h-5 text-[var(--accent-earth)]"
                strokeWidth={1.8}
              />

              <span>Evolución y métricas avanzadas</span>

            </div>

            <div className="flex items-center gap-3">

              <BrainCircuit
                className="w-5 h-5 text-[var(--accent-earth)]"
                strokeWidth={1.8}
              />

              <span>Recomendaciones inteligentes con IA</span>

            </div>

            <div className="flex items-center gap-3">

              <Bike
                className="w-5 h-5 text-[var(--accent-earth)]"
                strokeWidth={1.8}
              />

              <span>Optimización de Bike Fitting</span>

            </div>

            <div className="flex items-center gap-3">

              <Cloud
                className="w-5 h-5 text-[var(--accent-earth)]"
                strokeWidth={1.8}
              />

              <span>Datos sincronizados en la nube</span>

            </div>

          </div>

          <div className="mt-8">

            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Suscripción
            </p>

            <p className="text-4xl font-bold text-[var(--accent-earth)] mt-2">
              € x
            </p>

            <p className="text-zinc-500 mt-1">
              por mes
            </p>

          </div>

          <button
            onClick={onActivateProPayment}
            className="mt-8 w-full rounded-2xl py-4 bg-gradient-to-r from-[#8B6B32] via-[var(--accent-earth)] to-[#F0D7A1] text-black font-semibold hover:opacity-95 transition-all"
          >
            Activar Suscripción
          </button>

          <button
            onClick={() => setSubView("menu")}
            className="mt-6 flex items-center justify-center gap-2 w-full text-zinc-400 hover:text-white transition-colors"
          >

            <ArrowLeft
              className="w-4 h-4"
            />

            Volver

          </button>

        </div>
      )}

    </div>
  );
}