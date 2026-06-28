"use client";
import { useState } from "react";

export default function Home() {
  const [cryptoPercent, setCryptoPercent] = useState(0)
  const [view, setView] = useState("home");
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
ctx.fillText("ALA • Resilience Certificate", canvas.width / 2, 60);

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

  const bikes = [
  {
  category: "Mountain",
  name: "ATACAMA START",
  desc: "Tu entrada al MTB premium",
  image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182",
},

{
  category: "Mountain",
  name: "ATACAMA RACER",
  desc: "Control absoluto en montaña",
  image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde",
},

{
  category: "Mountain",
  name: "ATACAMA TEAM",
  desc: "Rendimiento profesional XC",
  image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8",
},

{
  category: "Mountain",
  name: "PATAGONIA START",
  desc: "Control y estabilidad",
  image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91",
},

{
  category: "Mountain",
  name: "PATAGONIA TEAM",
  desc: "Geometría avanzada de competición",
  image: "https://images.unsplash.com/photo-1523740856324-f2ce89135981",
},

  {
  category: "Gravel",
  name: "ACONCAGUA START",
  desc: "Gravel equilibrada para aventura",
  image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
},

{
  category: "Gravel",
  name: "ACONCAGUA RACER",
  desc: "Velocidad y rendimiento gravel",
  image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8",
},

{
  category: "Gravel",
  name: "ACONCAGUA TEAM",
  desc: "Carbon performance gravel",
  image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182",
},

  {
  category: "Ruta",
  name: "CORDOBA ",
  desc: "Ruta ligera y cómoda",
  image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e",
},

{
  category: "Resilience",
  name: "ALA RESILIENCE",
  desc: "AI Bike con chip integrado y sistema inteligente",
  price: 12900,
  image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1200&auto=format&fit=crop",
},

{
  category: "Ruta",
  name: "CORDOBA RACER",
  desc: "Máxima velocidad en asfalto",
  price: 5200,
  image: "https://images.unsplash.com/photo-1558980394-34764db825ba",
},

{
  category: "Ruta",
  name: "CORDOBA TEAM",
  desc: "Carbon performance road",
  price: 6900,
  image: "https://images.unsplash.com/photo-1508979828023-99e4609a7c5e",
},

  {
    category: "E-Bike",
    name: "HANGAROA E BIKE",
    desc: "Potencia eléctrica inteligente",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890",
  },
];

  const experiences = [
    { name: "Dolomitas", desc: "Rutas épicas en Italia", image: "https://via.placeholder.com/300x180", price: 1200 },
    { name: "Santiago Compostela", desc: "Una travesía única", image: "https://via.placeholder.com/300x180", price: 900 },
    { name: "Atacama", desc: "Aventura en el desierto", image: "https://via.placeholder.com/300x180", price: 1000 },
  ];

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
      onClick={() => setView("home")}
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
  onClick={() => setView("bikeMenu")}
  className="bg-[var(--bg-card)] py-5 rounded-2xl"
>
  Bicicletas
</button>

            <button onClick={() => setView("experiences")} className="bg-[var(--bg-card)] py-5 rounded-2xl">
               Experiencias
            </button>

            <button onClick={() => setView("resApp")} className="bg-[var(--accent-earth)]
shadow-[0_0_30px_rgba(207,168,107,0.25)] py-5 rounded-2xl">
               Mi App Resilience
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
        onClick={() => setView("bikeCategories")}
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
        onClick={() => setView("addBike")}
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
      onClick={() => setView("home")}
      className="mt-8 text-[var(--text-secondary)]"
    >
      Volver
    </button>

  </div>
)}
{/* ADD BIKE */}
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
            ALA Resilience
          </span>
        </div>

      </div>

    </div>

  </div>
)}
    {/* BACK */}
    <button
      onClick={() => setView("bikeMenu")}
      className="mt-8 text-[var(--text-secondary)]"
    >
      Volver
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
        "Resilience",
        "E-Bike"
      ].map((category) => (

        <button
          key={category}
          onClick={() => {
  setSelectedCategory(category);
  setView("shop");
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
      onClick={() => setView("bikeMenu")}
      className="mt-8 text-[var(--text-secondary)]"
    >
      Volver
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

          <div
            key={bike.name}
           onClick={() => {
  setSelected(bike);
  setType("bike");
  setView("bikeDetail");
}}
            className="
            bg-[var(--bg-card)]
            border border-white/5
            rounded-xl
            backdrop-blur-xl
           shadow-[0_10px_40px_rgba(0,0,0,0.35)]
           hover:border-white/10
           transition-all
           duration-300
            p-4
            cursor-pointer
            "
          >

            <div className="flex gap-4 items-center">

              <img
                src={bike.image}
                className="
                w-24
                h-16
                object-cover
                rounded-2xl
                "
              />

              <div className="flex-1">

                <h3 className="text-lg font-semibold">
                  {bike.name}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {bike.desc}
                </p>


              </div>

            </div>

          </div>

      ))}

    </div>

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
                setView("detail");
              }}
              className="bg-[var(--bg-card)] p-4 rounded-2xl mb-4"
            >
              <img src={exp.image} className="rounded mb-2" />
              <h3>{exp.name}</h3>
              <p>{exp.desc}</p>
              <p className="text-sm font-bold">€{exp.price}</p>
            </div>
          ))}
        </>
      )}

{/* BIKE DETAIL */}
{view === "bikeDetail" && (
  <div className="min-h-screen">

    <button
      onClick={() => setView("shop")}
      className="mb-6 text-sm text-zinc-400"
    >
      ← Volver
    </button>

    <img
      src={selected?.image}
      className="
      w-full
      h-72
      object-cover
      rounded-3xl
      mb-6
      "
    />

    <h1 className="text-2xl font-semibold tracking-tight">
      {selected?.name}
    </h1>

    <p className="text-zinc-300 text-lg leading-relaxed mb-8">
      {selected?.name?.includes("RESILIENCE")
        ? "La primera bicicleta inteligente de Alvarez Bicycle con chip integrado, conectividad avanzada y tecnología diseñada para el rendimiento moderno."
        : selected?.desc}
    </p>

    <div className="
      bg-[var(--bg-card)]
      border border-white/5
      rounded-3xl
      p-6
      mb-8
    ">

      <h3 className="text-2xl font-semibold mb-5">
        Componentes
      </h3>

      <div className="space-y-3 text-zinc-300">

        <p>Transmisión SRAM XX1</p>

        <p>Horquilla RockShox</p>

        <p>Ruedas FIR</p>

      </div>

    </div>

    <button
      onClick={() => setView("resData")}
      className="
      w-full
      bg-[var(--accent-earth)]
      text-black
      py-4
      rounded-2xl
      font-semibold
      "
    >
      Ver tu talla
    </button>

  </div>
)}

{/* RES DATA */}
{view === "resData" && (
  <div className="min-h-screen">

    {/* VOLVER */}
    <button
      onClick={() => setView("shop")}
      className="mb-6 text-sm text-zinc-400"
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
    onClick={() => setView("resData")}
    className="mb-6 text-sm text-zinc-400"
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
  <div className="min-h-screen">

    {/* VOLVER */}
    <button
      onClick={() => {
        if (type === "pro") {
          setView("pro");
        } else {
          setView("bikeCatalog");
        }
      }}
      className="mb-6 text-sm text-zinc-400"
    >
      ← Volver
    </button>

    {/* TITLE */}
    <h2 className="text-2xl font-medium tracking-tight mb-1">
  Finalizar compra
</h2>

    <p className="text-sm text-zinc-500 mb-5">
  Pago seguro • Alvarez Bicycle
</p>
<div
  className="
  bg-[var(--bg-card)]
  border border-white/5
  rounded-3xl
  overflow-hidden
  mb-6
  "
>

  <img
    src={selected?.image}
    className="
    w-full
    h-56
    object-cover
    "
  />

  <div className="p-5">

    <h3 className="text-2xl font-semibold">
      {selected?.name}
    </h3>

    <p className="text-zinc-400 mt-1">
      Talla recomendada: {getSize()}
    </p>

  </div>

</div>
<div
  className="
  bg-[var(--bg-card)]
  border border-white/5
  rounded-3xl
  p-5
  mb-6
  "
>

  <h3 className="text-lg font-semibold mb-4">
    Resumen de compra
  </h3>

  <div className="space-y-4">

    <div className="flex justify-between">
      <span className="text-zinc-400">
        Modelo 2
      </span>

      <span>
        {selected?.name}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-zinc-400">
        Talla
      </span>

      <span>
        {getSize()}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-zinc-400">
        Garantía
      </span>

      <span>
        3 años
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-zinc-400">
        Envío
      </span>

      <span>
        Gratuito
      </span>
    </div>

  </div>

</div>
<div
  className="
  bg-[var(--bg-card)]
  border border-white/5
  rounded-3xl
  p-5
  mb-6
  "
>

  <h3 className="text-lg font-semibold mb-4">
    Lo que incluye tu compra
  </h3>

  <div className="space-y-3 text-zinc-300">

    <p>✓ Bicicleta ensamblada y revisada</p>

    <p>✓ Garantía oficial Alvarez Bicycle</p>

    <p>✓ Soporte técnico especializado</p>

    <p>✓ Acceso a ALA Rewards</p>

    <p>✓ Envío gratuito</p>

  </div>

</div>
    {/* CARD */}
    <div
      className="
      bg-[var(--bg-card)]
      border border-white/5
      rounded-3xl
      p-5
      "
    >

      {/* PRODUCT */}
      <div className="mb-6 border-b border-white/5 pb-4">

        <h3 className="text-xl font-semibold mb-2">
          {type === "pro"
            ? "Resilience PRO"
            : selected?.name}
        </h3>

        <p className="text-zinc-400">
          {type === "pro"
            ? "Suscripción mensual"
            : `Talla ${getSize()}`}
        </p>

      </div>

      {/* TOTAL */}
      <div className="flex justify-between items-center mb-6">

        <span className="text-zinc-400">
          Total
        </span>

        <span className="text-2xl font-semibold tracking-tight">
          €{type === "pro" ? "9.99" : total}
        </span>

      </div>

    {/* PAYMENT METHODS */}
<div className="mb-8">

  <p className="font-medium mb-4">
    Método de pago
  </p>

  <div className="grid gap-3">

    {/* TRADICIONAL */}
    <button
      onClick={() => setpaymentmode("traditional")}
      className={`
      w-full
      rounded-2xl
      p-5
      text-left
      border
      transition-all
      ${
        paymentMode === "traditional"
          ? "border-[var(--accent-earth)] bg-[var(--bg-main)]"
          : "border-white/5 bg-[var(--bg-main)]"
      }
      `}
    >

      <div className="flex justify-between items-center">

        <div>
          <p className="font-semibold">
            💳 Pago tradicional
          </p>

          <p className="text-sm text-zinc-400 mt-1">
            Visa · Mastercard · Stripe
          </p>
        </div>

        <span className="text-xl">
          {paymentMode === "traditional" ? "✓" : ""}
        </span>

      </div>

    </button>

    {/* HIBRIDO */}
    <button
      onClick={() => setpaymentmode("hybrid")}
      className={`
      w-full
      rounded-2xl
      p-5

      text-left
      border
      transition-all
      ${
        paymentMode === "hybrid"
          ? "border-[var(--accent-earth)] bg-[var(--bg-main)]"
          : "border-white/5 bg-[var(--bg-main)]"
      }
      `}
    >

      <div className="flex justify-between items-center">

        <div>
          <div className="mb-4">
  <p className="text-sm text-zinc-500 uppercase tracking-[0.2em] mb-2">
    Hybrid Payment
  </p>

  <h3 className="text-xl font-semibold tracking-tight">
    Divide tu pago inteligentemente
  </h3>
</div>

          <p className="text-sm text-zinc-400 mt-1">
            Tarjeta + Criptomonedas
          </p>
        </div>

        <span className="text-xl">
          {paymentMode === "hybrid" ? "✓" : ""}
        </span>

      </div>

    </button>


  </div>

</div>


      {/* HYBRID PAYMENT */}
{type !== "pro" && paymentMode === "hybrid" && (
  <div
    className="
    bg-[var(--bg-main)]
    rounded-2xl
    p-5
    border border-white/5
    mb-6
    "
  >

    <div className="mb-6">

  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
    Hybrid Payment
  </p>

  <h3 className="text-2xl font-semibold tracking-tight mb-2">
    Combina múltiples métodos de pago
  </h3>

  <p className="text-zinc-400">
    Utiliza tarjeta, activos digitales y ALA Rewards en una sola transacción.
  </p>

</div>

    {/* RESUMEN */}
    <div
  className="
  bg-gradient-to-b
  from-white/[0.03]
  to-white/[0.01]
  rounded-3xl
  p-5
  mb-5
  border
  border-white/5
  backdrop-blur-xl
  "
>

      <div className="flex justify-between items-center mb-5">

  <div>
    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">
      Pago Hibrido
    </p>

    <p className="text-lg font-semibold tracking-tight">
      Combina tarjeta y criptomonedas en una sola compra
    </p>
  </div>

  <div
    className="
    w-3
    h-3
    rounded-full
    bg-[var(--accent-earth)]
    shadow-[0_0_20px_rgba(207,168,107,0.8)]
    "
  />

</div>

{/* TARJETA */}
<div className="flex justify-between items-center mb-4">

  <div>
    <p className="font-medium">
       Tarjeta
    </p>

    <p className="text-sm text-zinc-500">
      €{fiatAmount}
    </p>
  </div>


</div>

{/* CRIPTO */}
<div className="flex justify-between items-center">

  <div>
    <p className="font-medium">
      Criptomonedas
    </p>

    <p className="text-sm text-zinc-500">
      €{cryptoAmount}
    </p>
  </div>

  {cryptoAmount > 0 && (
    <button
      onClick={() => setWalletConnected(true)}
      className="
      bg-[var(--bg-card)]
border border-white/10
      px-4
      py-2
      rounded-xl
      text-sm
      font-medium
      "
    >
      {walletConnected
        ? "Wallet conectada"
        : "Conectar"}
    </button>
  )}

</div>

{/* ALAPUNTOS */}
<div className="
mt-5
pt-5
border-t
border-white/5
">

  <div className="flex justify-between items-center">

    <div>
      <p className="font-medium">
        ALA Puntos Recompensa
      </p>

      <p className="text-sm text-zinc-500">
        Disponible: 12.450 puntos
      </p>
    </div>

    <button
      className="
      bg-[var(--accent-earth)]
      text-black
      px-4
      py-2
      rounded-xl
      text-sm
      font-medium
      "
    >
      Canjear
    </button>

  </div>

</div>

    </div>
{/* BUY CRYPTO */}

<div
  className="
  mt-5
  pt-5
  border-t
  border-white/5
  "
>

  <div className="flex justify-between items-center">

    <div>

      <p className="font-medium">
        Comprar Cripto
      </p>

      <p className="text-sm text-zinc-500">
        Próximamente
      </p>

    </div>

    <button
      disabled
      className="
      opacity-50
      bg-[var(--bg-card)]
      border border-white/10
      px-4
      py-2
      rounded-xl
      text-sm
      "
    >
      Próximamente
    </button>

  </div>

</div>
    {/* SLIDER */}
    <div className="mb-5">

     <div className="flex justify-between items-center mb-3">

  <div>
    <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
      Tarjeta
    </p>

    <p className="text-lg font-semibold">
      {fiatPercent}%
    </p>
  </div>

  <div className="text-zinc-600 text-sm">
    Distribucion de pago
  </div>

  <div className="text-right">
    <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
      Criptomonedas
    </p>

    <p className="text-lg font-semibold">
      {100 - fiatPercent}%
    </p>
  </div>

</div>
  

      <input
        type="range"
        min="0"
        max="100"
        value={fiatPercent}
        onChange={(e) =>
          setFiatPercent(Number(e.target.value))
        }
        className="
w-full
h-2
appearance-none
bg-white/10
rounded-full
overflow-hidden
accent-[var(--accent-earth)]
"
      />
<p className="mt-3 text-xs text-zinc-500 text-center">
  El importe se dividirá automáticamente entre tu tarjeta y tus criptomonedas.
</p>
    </div>

  

  </div>
)}
     

    </div>

  </div>
)}

      {/* FINAL NFT */}
{view === "experience" && (
  <div className="min-h-screen p-6 pb-24">

    {/* BACK */}
    <button
      onClick={() => setView("home")}
      className="flex items-center text-zinc-400 text-sm mb-8"
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
{/* RESILIENCE APP */}
{view === "resApp" ? (
  <div className="text-center">

    <h2 className="text-2xl mb-4">🚴 Mi App Resilience</h2>

    <div className="bg-[var(--bg-main)] text-white p-4 rounded-xl mb-4 text-left">
      <p className="text-lg font-bold mb-2">🎟 Tu NFT</p>

      <p><b>Modelo:</b> {selected?.name || "ALA Bike"}</p>
      <p><b>Talla:</b> {getSize()}</p>
      <p><b>Fecha:</b> {new Date().toLocaleDateString()}</p>
    </div>

    <div className="grid gap-3">

      <button className="bg-[var(--bg-card)] py-3 rounded-2xl">
        🔗 Conectar chip
      </button>

      <button className="bg-[var(--bg-card)] py-3 rounded-2xl">
        📍 Mi recorrido
      </button>

      <button
        onClick={() => setView("resStats")}
        className="bg-[var(--accent-earth)]
shadow-[0_0_30px_rgba(207,168,107,0.25)] py-3 rounded-2xl"
      >
        📊 Resilience
      </button>

    </div>
    <button
  onClick={() => setView("pro")}
  className="bg-(--terracota) py-3 rounded-2xl mt-8"
>
   Activar Resilience PRO
</button>

  </div>
) : null}

{/* RESILIENCE STATS */}
{view === "resStats" && (
  <div className="text-center">

    <h2 className="text-2xl mb-4">📊 Datos Resilience</h2>

    <div className="bg-[var(--bg-card)] p-4 rounded-2xl text-left">
      <p> Velocidad: 32 km/h</p>
      <p> Cadencia: 85 rpm</p>
      <p> Altura sillín: 74 cm</p>

      <div className="mt-3 text-sm text-zinc-400">
         Recomendación:
        <br />
        Subir sillín +1 cm para mejor eficiencia
      </div>
    </div>

    <button
      onClick={() => setView("resApp")}
      className="bg-[var(--accent-earth)] text-black
hover:opacity-90
transition-all
duration-300 w-full py-3 rounded-2xl mt-4"
    >
      Volver
    </button>

  </div>
)}
{view === "pro" && (
  <div className="text-center">

    <h2 className="text-2xl mb-4">🚀 Resilience PRO</h2>

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
      onClick={() => setView("resApp")}
      className="mt-4 text-sm text-zinc-400"
    >
      Volver
    </button>

  </div>
)}
    </main>
  );
}