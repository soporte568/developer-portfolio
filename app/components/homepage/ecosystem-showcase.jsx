"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Building2, ShoppingBag } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const lines = {
  store: {
    label: "SWP Store",
    eyebrow: "Comercio digital",
    description:
      "Soluciones para tiendas online y negocios que buscan desarrollar su presencia en internet.",
    items: ["Tiendas online", "Experiencias de compra", "Desarrollo comercial digital"],
  },
  business: {
    label: "SWP Business",
    eyebrow: "Desarrollo empresarial",
    description:
      "Soluciones para empresas y emprendedores que buscan desarrollar sus proyectos y explorar nuevas oportunidades.",
    items: ["Herramientas para emprendedores", "Desarrollo de proyectos", "Visión de crecimiento"],
  },
};

function StorePreview() {
  return (
    <div className="relative overflow-hidden bg-[#ffe9dc] p-5 text-[#27384a] sm:p-8">
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#de9874]/20" />
      <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/50 blur-2xl" />
      <div className="relative rounded-2xl border border-white/80 bg-white shadow-[0_24px_70px_rgba(102,70,51,0.12)]">
        <div className="flex items-center justify-between border-b border-[#f0ece9] px-4 py-3">
          <span className="text-[10px] font-bold tracking-[0.14em]">SWP STORE</span>
          <div className="flex items-center gap-3 text-[8px] text-[#71808d]"><span>Catálogo</span><span>Nosotros</span><span className="rounded-full border border-[#e5e9ec] px-2 py-1">Tu carrito</span></div>
        </div>
        <div className="grid min-h-[245px] grid-cols-[1fr_0.9fr]">
          <div className="flex flex-col items-start justify-center p-5 sm:p-8">
            <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#8a6b5d]">Una tienda para tu marca</span>
            <span className="mt-3 text-2xl font-medium leading-tight sm:text-3xl">Tu negocio,<br />en movimiento.</span>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#b9ed35] px-3 py-2 text-[9px] font-semibold text-[#243017]">Explorar colección <ArrowUpRight size={12} /></span>
          </div>
          <div className="relative m-4 overflow-hidden rounded-xl bg-[#f8d6c4] sm:m-6">
            <div className="absolute inset-x-[18%] bottom-0 top-[16%] rounded-t-[45%] border border-white/80 bg-[#f5bd9e]" />
            <div className="absolute bottom-[18%] left-[16%] h-[30%] w-[35%] rounded-full bg-[#e6a47f]" />
            <div className="absolute right-[14%] top-[12%] h-2 w-2 rounded-full bg-white/80" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 border-t border-[#f0ece9] p-4">
          {["Novedades", "Colecciones", "Selección"].map((item, index) => (
            <div key={item}>
              <div className={`aspect-[1.5] rounded-lg ${index === 1 ? "bg-[#edf1d8]" : "bg-[#f7eee8]"}`} />
              <p className="mt-2 text-[8px] text-[#697683]">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <span className="absolute bottom-3 right-4 text-[8px] font-medium uppercase tracking-[0.14em] text-[#896c5d]">Interfaz conceptual</span>
    </div>
  );
}

function BusinessPreview() {
  return (
    <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-[#d9efff] p-6 sm:p-10">
      <div className="absolute -left-12 top-8 h-48 w-48 rounded-full bg-white/55 blur-2xl" />
      <div className="absolute -bottom-12 right-3 h-44 w-44 rounded-full bg-[#ffdbc9]/70 blur-2xl" />
      <div className="relative w-full max-w-md rounded-2xl border border-white/80 bg-white/90 p-5 shadow-[0_24px_70px_rgba(41,73,94,0.12)] sm:p-7">
        <div className="flex items-center justify-between border-b border-[#e9eef1] pb-4">
          <span className="text-[10px] font-semibold tracking-[0.14em] text-[#26384a]">SWP BUSINESS</span>
          <span className="h-2 w-2 rounded-full bg-[#a8dd37]" />
        </div>
        <p className="mt-5 text-[8px] font-medium uppercase tracking-[0.18em] text-[#65819a]">De la idea a la iniciativa</p>
        <h3 className="mt-2 text-xl font-medium text-[#26384a] sm:text-2xl">Proyectos con dirección.</h3>
        <div className="mt-6 grid grid-cols-3 gap-2">
          {["Planificar", "Desarrollar", "Evolucionar"].map((step, index) => (
            <div key={step} className="relative flex min-h-16 items-center justify-center rounded-xl border border-[#e9eef1] bg-[#f8fbfc] px-2 text-center text-[8px] font-medium text-[#536779] sm:text-[9px]">
              {step}
              {index < 2 && <span aria-hidden="true" className="absolute -right-2 z-10 text-[#8fbe26]">›</span>}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3 border-t border-[#e9eef1] pt-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#eaf4cd] text-[#648c1c]"><Building2 size={15} /></span>
          <p className="text-[9px] leading-5 text-[#71808d]">Un esquema visual para pensar el desarrollo de un negocio.</p>
        </div>
      </div>
      <span className="absolute bottom-3 right-4 text-[8px] font-medium uppercase tracking-[0.14em] text-[#61798b]">Diagrama conceptual</span>
    </div>
  );
}

export default function EcosystemShowcase() {
  const [activeLine, setActiveLine] = useState("store");
  const active = lines[activeLine];

  return (
    <section id="ecosistema" className="scroll-mt-24 bg-[#fff1e8] px-6 py-16 dark:bg-[#0d2035] sm:px-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#896c5d] dark:text-[#8fb2d1]">El ecosistema SWP</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#24272d] dark:text-white md:text-4xl">Dos líneas.<br />Una visión compartida.</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-[#71645f] dark:text-[#b8c5d3] md:text-base">
            Explora dos formas complementarias de conectar tecnología, comercio digital y desarrollo empresarial.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Explorar líneas de SWP">
          <button
            id="swp-store"
            type="button"
            aria-pressed={activeLine === "store"}
            onClick={() => setActiveLine("store")}
            className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors ${activeLine === "store" ? "border-[#397ce8] bg-[#397ce8] text-white" : "border-[#decfc7] bg-white/65 text-[#62574f] hover:border-[#397ce8] dark:border-white/15 dark:bg-white/5 dark:text-[#d6e0ea]"}`}
          >
            <ShoppingBag size={16} aria-hidden="true" /> SWP Store
          </button>
          <button
            id="swp-business"
            type="button"
            aria-pressed={activeLine === "business"}
            onClick={() => setActiveLine("business")}
            className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors ${activeLine === "business" ? "border-[#397ce8] bg-[#397ce8] text-white" : "border-[#decfc7] bg-white/65 text-[#62574f] hover:border-[#397ce8] dark:border-white/15 dark:bg-white/5 dark:text-[#d6e0ea]"}`}
          >
            <Building2 size={16} aria-hidden="true" /> SWP Business
          </button>
        </div>

        <div key={activeLine} className="mt-6 grid overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_20px_60px_rgba(102,70,51,0.08)] dark:border-white/10 dark:bg-[#0b1a2b] lg:grid-cols-[1.1fr_0.9fr] swp-showcase-enter" aria-live="polite">
          {activeLine === "store" ? <StorePreview /> : <BusinessPreview />}
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65819a] dark:text-[#8fb2d1]">{active.eyebrow}</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#24272d] dark:text-white">{active.label}</h3>
            <p className="mt-4 max-w-lg text-sm leading-6 text-[#71808d] dark:text-[#b8c5d3]">{active.description}</p>
            <ul className="mt-6 space-y-3 border-t border-[#edf0f1] pt-5 dark:border-white/10">
              {active.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#536779] dark:text-[#d6e0ea]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a8dd37]" />{item}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 h-11 w-fit rounded-full bg-[#b9ed35] px-5 text-sm font-semibold text-[#243017] hover:bg-[#a8df27]">
              <Link href="#contacto">Conocer esta línea <ArrowUpRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
