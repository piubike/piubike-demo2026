"use client";

import { useState } from "react";

interface resilenceappProps {
  selected: any;
  getSize: () => string;
  onBackHome: () => void;
  onActivateProPayment: () => void;
}

// 👑 ¡CON "R" MAYÚSCULA PARA REAVIVAR LA PANTALLA!
export default function resilenceApp({
  selected,
  getSize,
  onBackHome,
  onActivateProPayment,
}: resilenceappProps) {
  // Manejo interno de sub-vistas: "menu", "stats", "pro"
  const [subView, setSubView] = useState("menu");

  return (
    <div className="min-h-screen">
      {/* --- VISTA 1: MENÚ PRINCIPAL DE LA APP --- */}
      {subView === "menu" && (
        <div className="text-center">
          <h2 className="text-2xl mb-4">🚴 Mi App resilence</h2>

          {selected ? (
            /* SI EL USUARIO YA ELIGIÓ O TIENE UNA BICI VINCULADA */
            <div className="bg-[var(--bg-main)] text-white p-4 rounded-xl mb-4 text-left border border-white/5">
              <p className="text-lg font-bold mb-2">🎟 Tu NFT Activo</p>
              <p><b>Modelo:</b> {selected.name}</p>
              <p><b>Talla:</b> {getSize()}</p>
              <p><b>Fecha:</b> {new Date().toLocaleDateString()}</p>
            </div>
          ) : (
            /* SI EL USUARIO ENTRÓ DIRECTO DESDE EL HOME (ESTADO INVITADO) */
            <div className="bg-zinc-900/50 text-white p-5 rounded-xl mb-4 text-center border border-dashed border-white/10">
              <p className="text-xl mb-1">👤 Cuenta de Invitado</p>
              <p className="text-sm text-zinc-400 mb-3">No tienes ninguna bicicleta vinculada todavía.</p>
              <span className="inline-block bg-white/5 text-xs text-zinc-300 px-3 py-1 rounded-full">
                Modo Demostración
              </span>
            </div>
          )}

          <div className="grid gap-3">
            <button className="bg-[var(--bg-card)] py-3 rounded-2xl border border-white/5">
              🔗 Conectar chip
            </button>

            <button className="bg-[var(--bg-card)] py-3 rounded-2xl border border-white/5">
              📍 Mi recorrido
            </button>

            <button
              onClick={() => setSubView("stats")}
              className="bg-[var(--accent-earth)] text-black py-3 rounded-2xl font-medium shadow-[0_0_30px_rgba(207,168,107,0.25)]"
            >
              📊 Resilence
            </button>
          </div>

          <button
            onClick={() => setSubView("pro")}
            className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-3 rounded-2xl mt-8 font-medium"
          >
            Activar Resilence PRO
          </button>

          <button
            onClick={onBackHome}
            className="mt-6 text-sm text-zinc-400 block w-full text-center"
          >
            Volver al Inicio
          </button>
        </div>
      )}

      {/* --- VISTA 2: ESTADÍSTICAS DEL CHIP --- */}
      {subView === "stats" && (
        <div className="text-center">
          <h2 className="text-2xl mb-4">📊 Datos resilence</h2>

          <div className="bg-[var(--bg-card)] p-4 rounded-2xl text-left border border-white/5">
            <p className="mb-2">⚡ Velocidad: 32 km/h</p>
            <p className="mb-2">🔄 Cadencia: 85 rpm</p>
            <p className="mb-2">📏 Altura sillín: 74 cm</p>

            <div className="mt-4 pt-3 border-t border-white/5 text-sm text-zinc-400">
              💡 Recomendación:<br />
              Subir sillín +1 cm para mejor eficiencia
            </div>
          </div>

          <button
            onClick={() => setSubView("menu")}
            className="bg-[var(--accent-earth)] text-black hover:opacity-90 transition-all duration-300 w-full py-3 rounded-2xl mt-6 font-medium"
          >
            Volver
          </button>
        </div>
      )}

      {/* --- VISTA 3: PANTALLA SUSCRIPCIÓN PRO --- */}
      {subView === "pro" && (
        <div className="text-center">
          <h2 className="text-2xl mb-4">🚀 resilence PRO</h2>

          <div className="bg-[var(--bg-card)] p-4 rounded-2xl text-left mb-4 border border-white/5 space-y-2">
            <p>📊 Historial completo de rendimiento</p>
            <p>📈 Evolución y métricas avanzadas</p>
            <p>🤖 Recomendaciones inteligentes</p>
            <p>🚴 Optimización de bike fitting</p>
            <p>☁️ Datos guardados en la nube</p>
          </div>

          <p className="text-xl font-bold mb-4 text-[var(--accent-earth)]">€9.99 / mes</p>

          <button
            onClick={onActivateProPayment}
            className="bg-indigo-600 text-white w-full py-3 rounded-2xl font-medium hover:bg-indigo-700 transition-colors"
          >
            Activar suscripción
          </button>

          <button
            onClick={() => setSubView("menu")}
            className="mt-4 text-sm text-zinc-400 block w-full text-center"
          >
            Volver
          </button>
        </div>
      )}
    </div>
  );
}