"use client";

interface Bike {
  name: string;
  image: string;
}

interface paymentviewProps {
  selected: Bike | null;
  type: string;
  total: number;
  fiatPercent: number;
  setFiatPercent: (percent: number) => void;
  paymentMode: string;
  setPaymentMode: (mode: string) => void;
  walletConnected: boolean;
  setWalletConnected: (connected: boolean) => void;
  onBack: () => void;
  setView: (view: string) => void;
  setType: (type: string) => void;
}

export default function PaymentView({
  selected,
  type,
  total,
  fiatPercent,
  setFiatPercent,
  paymentMode,
  setPaymentMode,
  walletConnected,
  setWalletConnected,
  onBack,
  setView,
  setType,
}: paymentviewProps) {
  
  const fiatAmount = (total * fiatPercent) / 100;
  const cryptoAmount = total - fiatAmount;

  return (
    <div className="min-h-screen">
      {/* VOLVER */}
      <button onClick={onBack} className="mb-6 text-sm text-zinc-400">
        ← Volver
      </button>

      {/* TITLE */}
      <h2 className="text-2xl font-medium tracking-tight mb-1">Finalizar compra</h2>
      <p className="text-sm text-zinc-500 mb-5">Pago seguro • Alvarez Bicycle</p>

      <div className="bg-[var(--bg-card)] border border-white/5 rounded-3xl overflow-hidden mb-6">
        <img src={selected?.image} className="w-full h-56 object-cover" />
        <div className="p-5">
          <h3 className="text-2xl font-semibold">{selected?.name}</h3>
          <p className="text-zinc-400 mt-1">Talla recomendada: -</p>
        </div>
      </div>

      <div className="bg-[var(--bg-card)] border border-white/5 rounded-3xl p-5 mb-6">
        <h3 className="text-lg font-semibold mb-4">Resumen de compra</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-zinc-400">Modelo 2</span>
            <span>{selected?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Garantía</span>
            <span>3 años</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Envío</span>
            <span>Gratuito</span>
          </div>
        </div>
      </div>

      <div className="bg-[var(--bg-card)] border border-white/5 rounded-3xl p-5 mb-6">
        <h3 className="text-lg font-semibold mb-4">Lo que incluye tu compra</h3>
        <div className="space-y-3 text-zinc-300">
          <p>✓ Bicicleta ensamblada y revisada</p>
          <p>✓ Garantía oficial Alvarez Bicycle</p>
          <p>✓ Soporte técnico especializado</p>
          <p>✓ Acceso a ALA Rewards</p>
          <p>✓ Envío gratuito</p>
        </div>
      </div>

      {/* CARD */}
      <div className="bg-[var(--bg-card)] border border-white/5 rounded-3xl p-5">
        {/* PRODUCT */}
        <div className="mb-6 border-b border-white/5 pb-4">
          <h3 className="text-xl font-semibold mb-2">
            {type === "pro" ? "Resilience PRO" : selected?.name}
          </h3>
          <p className="text-zinc-400">
            {type === "pro" ? "Suscripción mensual" : "Bicicleta ALA"}
          </p>
        </div>

        {/* TOTAL */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-zinc-400">Total</span>
          <span className="text-2xl font-semibold tracking-tight">
            €{type === "pro" ? "9.99" : total}
          </span>
        </div>

        {/* PAYMENT METHODS */}
        <div className="mb-8">
          <p className="font-medium mb-4">Método de pago</p>
          <div className="grid gap-3">
            {/* TRADICIONAL */}
            <button
              onClick={() => setPaymentMode("traditional")}
              className={`w-full rounded-2xl p-5 text-left border transition-all ${
                paymentMode === "traditional"
                  ? "border-[var(--accent-earth)] bg-[var(--bg-main)]"
                  : "border-white/5 bg-[var(--bg-main)]"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">💳 Pago tradicional</p>
                  <p className="text-sm text-zinc-400 mt-1">Visa · Mastercard · Stripe</p>
                </div>
                <span className="text-xl">{paymentMode === "traditional" ? "✓" : ""}</span>
              </div>
            </button>

            {/* HIBRIDO */}
            <button
              onClick={() => setPaymentMode("hybrid")}
              className={`w-full rounded-2xl p-5 text-left border transition-all ${
                paymentMode === "hybrid"
                  ? "border-[var(--accent-earth)] bg-[var(--bg-main)]"
                  : "border-white/5 bg-[var(--bg-main)]"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="mb-4">
                    <p className="text-sm text-zinc-500 uppercase tracking-[0.2em] mb-2">Hybrid Payment</p>
                    <h3 className="text-xl font-semibold tracking-tight">Divide tu pago inteligentemente</h3>
                  </div>
                  <p className="text-sm text-zinc-400 mt-1">Tarjeta + Criptomonedas</p>
                </div>
                <span className="text-xl">{paymentMode === "hybrid" ? "✓" : ""}</span>
              </div>
            </button>
          </div>
        </div>

        {/* HYBRID PAYMENT DETAILS */}
        {type !== "pro" && paymentMode === "hybrid" && (
          <div className="bg-[var(--bg-main)] rounded-2xl p-5 border border-white/5 mb-6">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">Hybrid Payment</p>
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Combina múltiples métodos de pago</h3>
              <p className="text-zinc-400">Utiliza tarjeta, activos digitales y ALA Rewards en una sola transacción.</p>
            </div>

            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] rounded-3xl p-5 mb-5 border border-white/5 backdrop-blur-xl">
              <div className="flex justify-between items-center mb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">Pago Híbrido</p>
                  <p className="text-lg font-semibold tracking-tight">Combina tarjeta y criptomonedas</p>
                </div>
                <div className="w-3 h-3 rounded-full bg-[var(--accent-earth)] shadow-[0_0_20px_rgba(207,168,107,0.8)]" />
              </div>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-medium">Tarjeta</p>
                  <p className="text-sm text-zinc-500">€{fiatAmount}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Criptomonedas</p>
                  <p className="text-sm text-zinc-500">€{cryptoAmount}</p>
                </div>
                {cryptoAmount > 0 && (
                  <button
                    onClick={() => setWalletConnected(true)}
                    className="bg-[var(--bg-card)] border border-white/10 px-4 py-2 rounded-xl text-sm font-medium"
                  >
                    {walletConnected ? "Wallet conectada" : "Conectar"}
                  </button>
                )}
              </div>

              <div className="mt-5 pt-5 border-t border-white/5">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">ALA Puntos Recompensa</p>
                    <p className="text-sm text-zinc-500">Disponible: 12.450 puntos</p>
                  </div>
                  <button className="bg-[var(--accent-earth)] text-black px-4 py-2 rounded-xl text-sm font-medium">
                    Canjear
                  </button>
                </div>
              </div>
            </div>

            {/* SLIDER */}
            <div className="mb-5">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">Tarjeta</p>
                  <p className="text-lg font-semibold">{fiatPercent}%</p>
                </div>
                <div className="text-zinc-600 text-sm">Distribución de pago</div>
                <div className="text-right">
                  <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">Criptomonedas</p>
                  <p className="text-lg font-semibold">{100 - fiatPercent}%</p>
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={fiatPercent}
                onChange={(e) => setFiatPercent(Number(e.target.value))}
                className="w-full h-2 appearance-none bg-white/10 rounded-full overflow-hidden accent-[var(--accent-earth)]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}