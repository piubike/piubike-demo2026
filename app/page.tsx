"use client";
import { useState } from "react";
import { bikes } from "./data/bikes";
import { experiences } from "./data/experiences";
import BikeCard from "@/app/components/bikecard";
import BikeDetail from "@/app/components/bikedetail";
import PaymentView from "@/app/components/paymentview";
import ResilenceApp from "@/app/components/resilenceapp";


export default function Home() {
  const [cryptoPercent, setCryptoPercent] = useState(0)
  const [view, setView] = useState("home");
  const [history, setHistory] = useState<string[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [type, setType] = useState("");
  const [variant, setVariant] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);

  const [height, setHeight] = useState("");
  const [inseam, setInseam] = useState("");
  const [ownerName, setOwnerName] = useState("");
const [serialNumber, setSerialNumber] = useState("");
const [invoiceNumber, setInvoiceNumber] = useState("");
const [bikeRegistered, setBikeRegistered] = useState(false);

  const [fiatPercent, setFiatPercent] = useState(50);
  const goToView = (nextView: string) => {
  setHistory((prev) => [...prev, view]);
  setView(nextView);
};

const goBack = () => {
  if (history.length === 0) {
    setView("home");
    return;
  }

  const previous = history[history.length - 1];

  setHistory((prev) => prev.slice(0, -1));
  setView(previous);
};
  const downloadNFT = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 600;
  canvas.height = 400;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.fillStyle = "#0a0a0a";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 34px Arial";
ctx.fillText("ALA • Resilence Certificate", canvas.width / 2, 60);

  ctx.font = "18px Arial";
  ctx.fillText(`Modelo: ${selected?.name}`, 50, 140);
  ctx.fillText(`Talla: ${getSize()}`, 50, 180);
  ctx.fillText(`Fecha: ${new Date().toLocaleDateString()}`, 50, 220);

  ctx.fillStyle = "#1A3A7A";
  ctx.fillText("Alvarez Bicycle", 50, 300);

  const link = document.createElement("a");
  link.download = "nft-certificado.png";
  link.href = canvas.toDataURL();
  link.click();
};
const [paymentMode, setpaymentmode] = useState("traditional");
const [cryptoType, setCryptoType] = useState("USDT");
  
  const getPrice = () => {
    if (variant === "Race") return 3000;
    if (variant === "Team") return 4000;
    return 5000;
  };

  const total = getPrice();
  const fiatAmount = (total * fiatPercent) / 100;
  const cryptoAmount = total - fiatAmount;

  // 🚴 BIKE FITTING REAL (aproximación estándar industria)
   const getSize = () => {
  const h = Number(height);
  const i = Number(inseam);

  if (!h || !i) return "-";

  // MTB / Gravel sizing más realista
  if (h < 165) return "S";
  if (h >= 165 && h < 175) return "M";
  if (h >= 175 && h < 183) return "L";

  return "XL";
};

  return (
    <main className="p-6 pb-24 text-white bg-black min-h-screen">
         {view === "login" && (
  <div className="flex flex-col justify-center items-center h-[80vh] text-center">

    <h2 className="text-2xl mb-6"> Iniciar sesión</h2>

    <input
      placeholder="tu@email.com"
      className="w-full max-w-sm p-3 mb-4 bg-[var(--bg-card)] rounded-xl"
    />

    <button
      className="bg-(--titanio-indigo) w-full max-w-sm py-3 rounded-2xl"
    >
      Entrar
    </button>

    <button
      onClick={goBack}
      className="mt-4 text-sm text-zinc-400"
    >
      Volver
    </button>

  </div>
)}
<h1 style={{ color: "red", fontSize: "40px" }}>
      
      </h1>
      {/* HOME */}
      {view === "home" && (
     
        <div className="flex flex-col justify-center items-center h-[80vh] text-center">

          <h1 className="text-4xl font-bold mb-2">ALA</h1>
          <p className="text-[var(--text-secondary)] mb-10">by Alvarez Bicycle</p>

          <div className="grid gap-4 w-full max-w-sm">
<button
  onClick={() => setView("login")}
  className="bg-(--titanio-indigo) w-full py-3 rounded-2xl mb-4"
>
   Iniciar sesión
</button>
            <button
  onClick={() => goToView("bikeMenu")}
  className="bg-[var(--bg-card)] py-5 rounded-2xl"
>
  Bicicletas
</button>

            <button onClick={() =>  goToView("experiences")} className="bg-[var(--bg-card)] py-5 rounded-2xl">
               Experiencias
            </button>

            <button onClick={() => goToView("resApp")} className="bg-[var(--accent-earth)]
shadow-[0_0_30px_rgba(207,168,107,0.25)] py-5 rounded-2xl">
               Mi App resilence
            </button>

          </div>
        </div>
      )}
{/* BIKE MENU */}
{view === "bikeMenu" && (
  <div className="flex flex-col justify-center h-[80vh]">

    <h2 className="text-3xl font-semibold mb-10">
      Bicicletas
    </h2>

    <div className="space-y-4">

      <button
        onClick={() => goToView("bikeCategories")}
        className="
        w-full
        bg-[var(--bg-card)]
        border border-white/5
        rounded-xl
        py-6
        px-5
        text-left
        "
      >
        <h3 className="text-lg font-medium">
          Descubre nuestras bicicletas
        </h3>

        <p className="text-zinc-400 text-sm mt-1">
          Explora la colección completa
        </p>
      </button>

      <button
        onClick={() => goToView("addBike")}
        className="
        w-full
        bg-[var(--bg-card)]
        border border-white/5
        rounded-xl
        py-6
        px-5
        text-left
        "
      >
        <h3 className="text-lg font-medium">
          Añadir bicicleta
        </h3>

        <p className="text-zinc-400 text-sm mt-1">
          Vincula tu bicicleta ALA
        </p>
      </button>

    </div>

    <button
      onClick={goBack}
      className="mt-8 text-[var(--text-secondary)]"
    >
      Volver
    </button>

  </div>
)}

{/* ADD BIKE */}
{view === "addBike" && (
  <div className="min-h-screen flex flex-col justify-center">

    <h2 className="text-3xl font-semibold mb-10">
      Añadir bicicleta
    </h2>

    {/* QR */}
    <div className="
      bg-[var(--bg-card)]
      border border-white/5
      rounded-xl
      p-6
      mb-6
      flex justify-center
    ">

      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=ALVAREZ-BIKE"
        className="rounded-2xl"
      />

    </div>

    {/* INPUTS */}
    <div className="space-y-4">

      <input
        placeholder="Nombre del propietario"
        value={ownerName}
        onChange={(e) => setOwnerName(e.target.value)}
        className="
        w-full
        bg-[var(--bg-card)]
        border border-white/5
        rounded-2xl
        p-4
        outline-none
        "
      />

      <input
        placeholder="Número de serie"
        value={serialNumber}
        onChange={(e) => setSerialNumber(e.target.value)}
        className="
        w-full
        bg-[var(--bg-card)]
        border border-white/5
        rounded-2xl
        p-4
        outline-none
        "
      />

      <input
        placeholder="Número de factura"
        value={invoiceNumber}
        onChange={(e) => setInvoiceNumber(e.target.value)}
        className="
        w-full
        bg-[var(--bg-card)]
        border border-white/5
        rounded-2xl
        p-4
        outline-none
        "
      />

    </div>

    {/* BUTTON */}
    <button
      onClick={() => setBikeRegistered(true)}
      className="
       w-full
       bg-[var(--accent-earth)]
     text-black
       rounded-2xl
       py-4
       mt-6
       font-medium
       transition-all
       duration-300
       hover:opacity-90
       hover:scale-[1.01]
       active:scale-[0.98]
       shadow-[0_0_30px_rgba(207,168,107,0.18)]
"
    >
      Registrar bicicleta
    </button>

    {/* NFT */}
    {/* NFT */}
{bikeRegistered && (
  <div className="
    bg-gradient-to-br
    from-zinc-900
    to-black
    border
    border-white/5
    rounded-[32px]
    overflow-hidden
    mt-8
  ">

    {/* IMAGE */}
    <div className="relative h-64">

      <img
        src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1200&auto=format&fit=crop"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute bottom-5 left-5">

        <p className="text-zinc-300 text-sm">
          NFT Certificate
        </p>

        <h3 className="text-4xl font-semibold text-white mt-1">
          Alvarez Bicycle
        </h3>

      </div>

    </div>

    {/* INFO */}
    <div className="p-6">

      <div className="space-y-4 text-zinc-300">

        <div className="flex justify-between border-b border-white/5 pb-3">
          <span className="text-[var(--text-secondary)]">
            Owner
          </span>

          <span>
            {ownerName}
          </span>
        </div>

        <div className="flex justify-between border-b border-white/5 pb-3">
          <span className="text-[var(--text-secondary)]">
            Serial
          </span>

          <span>
            {serialNumber}
          </span>
        </div>

        <div className="flex justify-between border-b border-white/5 pb-3">
          <span className="text-[var(--text-secondary)]">
            Invoice
          </span>

          <span>
            {invoiceNumber}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-[var(--text-secondary)]">
            Model
          </span>

          <span>
            ALA RESILENCE
          </span>
        </div>

      </div>

    </div>

  </div>
)}
    {/* BACK */}
    <button
  onClick={goBack}
  className="mt-8 text-[var(--text-secondary)]"
>
  ← Volver
</button>

  </div>
)}
{/* BIKE CATEGORIES */}
{view === "bikeCategories" && (
  <div className="min-h-screen">

    <h2 className="text-3xl font-semibold mb-3">
      ¿Qué tipo de bicicleta buscas?
    </h2>

    <p className="text-[var(--text-secondary)] mb-8">
      Encuentra la bicicleta ideal para tu estilo de conducción
    </p>

    <div className="space-y-4">

      {[
        "Mountain",
        "Gravel",
        "Ruta",
        "resilence", 
        "E-Bike"
      ].map((category) => (

        <button
          key={category}
          onClick={() => {
  setSelectedCategory(category);
  goToView("shop");
}}
          className="
          w-full
          bg-[var(--bg-card)]
          border border-white/5
          rounded-xl
          backdrop-blur-xl
shadow-[0_10px_40px_rgba(0,0,0,0.35)]
hover:border-white/10
transition-all
duration-300
          p-6
          text-left
          "
        >

          <h3 className="text-xl font-medium">
            {category}
          </h3>

        </button>

      ))}

    </div>

    <button
  onClick={goBack}
  className="mt-8 text-[var(--text-secondary)]"
>
  ← Volver
</button>

  </div>
)}
{/* SHOP */}
{view === "shop" && (
  <div>

    <h2 className="text-3xl font-semibold mb-2">
      {selectedCategory}
    </h2>

    <p className="text-[var(--text-secondary)] mb-8">
      Colección Alvarez Bicycle
    </p>

    <div className="grid gap-4">

      {bikes
        .filter((bike) => bike.category === selectedCategory)
        .map((bike) => (

          <BikeCard
            key={bike.name}
            bike={bike}
            onClick={() => {
              setSelected(bike);
              setType("bike");

              if (bike.category === "resilence") {
                goToView("resilienceDetail");
              } else {
                goToView("bikeDetail");
              }
            }}
          />

        ))}

    </div>

    {/* BOTÓN VOLVER */}
    <button
      onClick={goBack}
      className="
        mt-8
        w-full
        border border-white/10
        rounded-2xl
        py-4
        text-[var(--text-secondary)]
        hover:bg-white/5
        transition-all
      "
    >
      ← Volver
    </button>

  </div>
)}
      {/* EXPERIENCES */}
      {view === "experiences" && (
        <>
          <h2 className="text-xl mb-4">Experiencias</h2>

          {experiences.map((exp) => (
            <div
              key={exp.name}
              onClick={() => {
                setSelected(exp);
                setType("exp");
                goToView("detail");
              }}
              className="bg-[var(--bg-card)] p-4 rounded-2xl mb-4"
            >
              <img src={exp.image} className="rounded mb-2" />
              <h3>{exp.name}</h3>
              <p>{exp.desc}</p>
              <p className="text-sm font-bold">€{exp.price}</p>
            </div>
                ))}

      <button
  onClick={goBack}
  className="
    mt-8
    w-full
    border border-white/10
    rounded-2xl
    py-4
    text-[var(--text-secondary)]
    hover:bg-white/5
    transition-all
  "
>
  ← Volver
</button>

    </>
)}

{/* BIKE DETAIL */}
{view === "bikeDetail" && (
  <BikeDetail
    selected={selected}
    onBack={goBack}
    onViewTalla={() => goToView("resData")}
  />
)}
{/* RES DATA */}
{view === "resData" && (
  <div className="min-h-screen">

    {/* VOLVER */}
    <button
  onClick={goBack}
  className="mt-8 text-[var(--text-secondary)]"
>
  ← Volver
</button>

    <h2 className="text-3xl font-semibold mb-2">
      Averigua la talla de tu bicicleta 
    </h2>

    <p className="text-[var(--text-secondary)] mb-8">
      Configura tu posición ideal antes de elegir tu bicicleta
    </p>

    {/* CARD */}
    <div className="bg-[var(--bg-card)] border border-white/5 rounded-xl p-6">

      {/* ALTURA */}
      <div className="mb-5">
        <label className="text-sm text-zinc-400 block mb-2">
          Altura del ciclista (cm)
        </label>

        <input
          placeholder="Ej: 178"
          onChange={(e) => setHeight(e.target.value)}
          className="
          w-full
          p-4
          rounded-2xl
         bg-[var(--bg-main)]
          border border-white/5
          "
        />
      </div>

      {/* ENTREPIERNA */}
      <div className="mb-5">
        <label className="text-sm text-zinc-400 block mb-2">
          Largo de entrepierna (cm)
        </label>

        <input
          placeholder="Ej: 84"
          onChange={(e) => setInseam(e.target.value)}
          className="
          w-full
          p-4
          rounded-2xl
         bg-[var(--bg-main)]
          border border-white/5
          "
        />
      </div>

      {/* RESULTADOS */}
      <div className="
       bg-[var(--bg-main)]
        rounded-2xl
        p-5
        border border-white/5
        space-y-3
      ">

        <div className="flex justify-between">
          <span className="text-zinc-400">
            Talla sugerida
          </span>

          <span className="font-bold">
            {getSize()}
          </span>
        </div>

      

        <div className="pt-3 border-t border-white/5">

          <p className="text-sm text-zinc-400">
            Recomendación
          </p>

          <p className="mt-2">
            Geometría recomendada según altura y tipo de conducción.
          </p>

        </div>

      </div>

      {/* BOTON */}
      <button
        onClick={() => setView("bikeCatalog")}
        className="
        bg-[var(--accent-earth)]
        shadow-[0_0_30px_rgba(207,168,107,0.25)]
        w-full
        py-4
        rounded-2xl
        mt-6
        font-medium
        "
      >
        Ver bicicletas para mi talla
      </button>

    </div>

  </div>
)}

      {/* CATALOG */}
      {view === "bikeCatalog" && (
        <div>

          <h2 className="mb-4">Bicicletas para talla {getSize()}</h2>

          <>
  <button
  onClick={goBack}
  className="mt-8 text-[var(--text-secondary)]"
>
  ← Volver
</button>

  <h2 className="text-3xl font-semibold mb-2">
    {selected?.name}
  </h2>

  <p className="text-[var(--text-secondary)] mb-8">
    Bicicletas disponibles para talla {getSize()}
  </p>

  {[
  {
    color: "Carbon Black",
    price: 4900,
    image:
      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=1200&auto=format&fit=crop",
  },

  {
    color: "Desert Sand",
    price: 4900,
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1200&auto=format&fit=crop",
  },

  {
    color: "Titanium Grey",
    price: 5200,
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    color: "Racing Red",
    price: 5400,
    image:
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=1200&auto=format&fit=crop",
  },

].map((bike) => (

  <div
    key={bike.color}
    className="
    bg-[var(--bg-card)]
    border border-white/5
    rounded-xl
    p-4
    mb-5
    "
  >

    <img
      src={bike.image}
      className="
      h-52
      w-full
      object-cover
      rounded-2xl
      mb-4
      "
    />

    <h3 className="text-xl font-semibold">
      {selected?.name}
    </h3>

    <div className="mt-3 space-y-1 text-sm text-zinc-400">

      <p>
        Color: {bike.color}
      </p>

      <p>
        Talla: {getSize()}
      </p>

    </div>

    <div className="flex justify-between items-center mt-5">

      <p className="text-2xl font-bold">
        €{bike.price}
      </p>

      <button
        onClick={() => setView("payment")}
        className="
        bg-white
        text-black
        px-5
        py-2
        rounded-xl
        "
      >
        Comprar
      </button>

    </div>

  </div>

))}
</>
        </div>
      )}

 {/* PAYMENT */}
{view === "payment" && (
  <PaymentView
    selected={selected}
    type={type}
    total={total}
    fiatPercent={fiatPercent}
    setFiatPercent={setFiatPercent}
    paymentMode={paymentMode}
    setPaymentMode={setpaymentmode}
    walletConnected={walletConnected}
    setWalletConnected={setWalletConnected}
    onBack={() => {
      if (type === "pro") {
        setView("pro");
      } else {
        setView("bikeCatalog");
      }
    }}
    setView={setView}
    setType={setType}
  />
)}
      {/* FINAL NFT */}
{view === "experience" && (
  <div className="min-h-screen p-6 pb-24">

    {/* BACK */}
    <button
  onClick={goBack}
  className="mt-8 text-[var(--text-secondary)]"
>
  ← Volver
</button>
   

    {/* SUCCESS */}
    <div className="text-center mb-10">

      <div
        className="
        w-24
        h-24
        rounded-full
        border-2
        border-[var(--accent-earth)]
        flex
        items-center
        justify-center
        mx-auto
        mb-5
        "
      >
        <span className="text-5xl text-[var(--accent-earth)]">
          ✓
        </span>
      </div>

      <h2 className="text-4xl font-semibold mb-2">
        Experiencia activada
      </h2>

      <p className="text-zinc-400 text-lg">
        Compra realizada
      </p>

    </div>

    {/* NFT CONTAINER */}
    <div
      className="
      bg-[var(--bg-card)]
      border border-white/5
      rounded-[32px]
      p-5
      "
    >

      {/* TITLE */}
      <div className="flex items-center gap-3 mb-5">

        <span className="text-3xl text-[var(--accent-earth)]">
          🎟
        </span>

        <h3
          className="
          text-2xl
          font-semibold
          text-[var(--accent-earth)]
          "
        >
          Certificado NFT
        </h3>

      </div>

      {/* NFT CARD */}
      <div
        className="
        bg-gradient-to-br
        from-zinc-900
        to-black
        rounded-[28px]
        p-6
        border
        border-[rgba(207,168,107,0.25)]
        relative
        overflow-hidden
        "
      >

        {/* LOGO */}
        <div className="flex justify-between items-start mb-5">

          <div>

            <h2
              className="
              text-5xl
              font-bold
              text-[var(--accent-earth)]
              "
            >
              ALA
            </h2>

            <p className="text-sm text-zinc-500 mt-1">
              by Alvarez Bicycle
            </p>

          </div>

          <div
            className="
            w-16
            h-16
            rounded-full
            border
            border-[var(--accent-earth)]
            flex
            items-center
            justify-center
            "
          >
            <span className="text-3xl text-[var(--accent-earth)]">
              A
            </span>
          </div>

        </div>

        {/* CERTIFICATE */}
        <p className="text-lg mb-6">
          CERTIFICADO DE PROPIEDAD
        </p>

        {/* DATA */}
        <div className="space-y-4 mb-6">

          <div className="flex justify-between border-b border-white/5 pb-3">
            <span className="text-zinc-400">
              Modelo
            </span>

            <span className="font-semibold">
              {selected?.name}
            </span>
          </div>

          <div className="flex justify-between border-b border-white/5 pb-3">
            <span className="text-zinc-400">
              Talla
            </span>

            <span className="font-semibold">
              {getSize()}
            </span>
          </div>

          <div className="flex justify-between border-b border-white/5 pb-3">
            <span className="text-zinc-400">
              Fecha
            </span>

            <span className="font-semibold">
              {new Date().toLocaleDateString()}
            </span>
          </div>

        </div>

        {/* IMAGE */}
        <img
          src={
            selected?.image ||
            "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1200&auto=format&fit=crop"
          }
          className="
          w-full
          h-44
          object-cover
          rounded-2xl
          mb-5
          "
        />

        {/* QR */}
        <div className="absolute bottom-6 right-6">

          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=ALVAREZ-BICYCLE-NFT"
            className="w-24 h-24 rounded-xl"
          />

        </div>

        {/* FOOTER */}
        <div className="text-sm text-zinc-500">
          NFT generado (preview)
        </div>

      </div>

      {/* BUTTONS */}
      <div className="grid gap-3 mt-6">

        <button
          onClick={downloadNFT}
          className="
          bg-[var(--accent-earth)]
          text-black
          py-4
          rounded-2xl
          font-semibold
          hover:opacity-90
          transition-all
          "
        >
          Descargar certificado NFT
        </button>

        <button
          className="
          bg-[var(--bg-main)]
          border border-white/10
          py-4
          rounded-2xl
          font-medium
          hover:border-white/20
          transition-all
          "
        >
          Compartir certificado
        </button>

      </div>

    </div>

  </div>
)}

{view === "pro" && (
  <div className="text-center">

    <h2 className="text-2xl mb-4">🚀 Resilence PRO</h2>

    <div className="bg-[var(--bg-card)] p-4 rounded-2xl text-left mb-4">

      <p className="mb-2">📊 Historial completo de rendimiento</p>
      <p className="mb-2">📈 Evolución y métricas avanzadas</p>
      <p className="mb-2">🤖 Recomendaciones inteligentes</p>
      <p className="mb-2">🚴 Optimización de bike fitting</p>
      <p className="mb-2">☁️ Datos guardados en la nube</p>

    </div>

    <p className="text-xl font-bold mb-4">€9.99 / mes</p>

    <button
  onClick={() => {
  setType("pro");
  setView("payment");
}}
  className="bg-(--titanio-indigo) w-full py-3 rounded-2xl"
>
  Activar suscripción
</button>

    <button
  onClick={goBack}
  className="mt-8 text-[var(--text-secondary)]"
>
  ← Volver
</button>

  </div>
)}
{/* 🛠️ PANEL RESILENCE APP */}
{view === "resApp" && (
  <ResilenceApp
    selected={selected}
    getSize={getSize}
    onBackHome={() => setView("home")}
    onActivateProPayment={() => {
      setType("pro");
      setView("payment");
    }}
  />
)}
    </main>
  );
}
