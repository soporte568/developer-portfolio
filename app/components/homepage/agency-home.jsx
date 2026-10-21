import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BriefcaseBusiness, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import EcosystemShowcase from "@/app/components/homepage/ecosystem-showcase";
import { swpConfig } from "@/utils/data/swp-config";

const principles = [
  {
    number: "01",
    title: "Tecnología útil",
    description: "Herramientas digitales con un propósito concreto y una aplicación clara.",
    icon: Sparkles,
    color: "bg-[#e5f5a8]",
  },
  {
    number: "02",
    title: "Visión comercial",
    description: "Soluciones pensadas alrededor de las necesidades reales de cada negocio.",
    icon: ShoppingBag,
    color: "bg-[#ffd9c9]",
  },
  {
    number: "03",
    title: "Experiencia cuidada",
    description: "Interfaces intuitivas, accesibles y consistentes en cada interacción.",
    icon: BriefcaseBusiness,
    color: "bg-[#dce8ff]",
  },
  {
    number: "04",
    title: "Evolución continua",
    description: "Una estructura preparada para crecer y adaptarse a nuevas oportunidades.",
    icon: ArrowUpRight,
    color: "bg-[#f8e6a7]",
  },
];

const visualStories = [
  {
    image: "/image/swp-store.webp",
    alt: "Un pequeño negocio atendiendo a un cliente con un pago digital",
    eyebrow: "Comercio digital",
    title: "Una mejor experiencia para comprar.",
    imageClass: "object-[center_45%]",
  },
  {
    image: "/image/swp-business.webp",
    alt: "Equipo de trabajo compartiendo ideas frente a un tablero",
    eyebrow: "Ideas en equipo",
    title: "Los proyectos crecen cuando se conectan.",
    imageClass: "object-center",
  },
  {
    image: "/image/swp-growth.webp",
    alt: "Panel de analítica digital abierto en una computadora portátil",
    eyebrow: "Crecimiento medible",
    title: "Decisiones con una visión más clara.",
    imageClass: "object-[center_55%]",
  },
];

function SkyDoodles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute left-[5%] top-[16%] hidden h-28 w-28 text-[#5481a0]/70 sm:block" viewBox="0 0 100 100" fill="none">
        <path d="M18 52c13-27 37-35 59-15 12 11 8 29-2 24-8-4 4-14-2-23-9-13-32-3-39 12-7 15-17 14-16 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M52 11v16m-8-8h16m-14-6 12 12m0-12L46 25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="22" cy="28" r="3" fill="#ff89bd" />
      </svg>
      <svg className="absolute right-[7%] top-[18%] hidden h-28 w-28 rotate-12 text-[#5481a0]/70 sm:block" viewBox="0 0 100 100" fill="none">
        <path d="M51 9c7 14 20 27 23 39 4 17-6 31-23 41-17-10-27-24-23-41 3-12 16-25 23-39Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M40 54c8 5 14 5 22 0m-11 16v10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="78" cy="23" r="3" fill="#ff89bd" />
      </svg>
      <span className="absolute left-[14%] top-[45%] text-3xl text-white/90">✳</span>
      <span className="absolute right-[13%] top-[42%] text-2xl text-white/90">✦</span>
      <span className="absolute bottom-[12%] left-[23%] h-2.5 w-2.5 rounded-full bg-[#ff9bcb]/70" />
      <span className="absolute bottom-[18%] right-[26%] h-2 w-2 rounded-full bg-[#ffcf68]/80" />
    </div>
  );
}

export default function AgencyHome() {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[#fffdfa] dark:bg-[#07111f]">
      <section id="inicio" className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden bg-[#bfe4ff] px-6 pb-8 pt-24 text-[#111923] dark:bg-[#0b1a2b] dark:text-white sm:px-12 sm:pb-10 sm:pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,255,255,0.96),transparent_58%),linear-gradient(180deg,#b9e2ff_0%,#d9f0ff_64%,#f9fcff_100%)] dark:hidden" />
        <div className="absolute -left-20 top-24 -z-10 h-64 w-64 rounded-full bg-white/20 blur-3xl dark:hidden" />
        <div className="absolute -right-16 top-36 -z-10 h-72 w-72 rounded-full bg-[#fff0e8]/60 blur-3xl dark:hidden" />
        <SkyDoodles />

        <div className="relative mx-auto grid min-h-[calc(100svh-14rem)] w-full max-w-[92rem] items-center gap-10 py-8 md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 text-center md:text-left">
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/65 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#435e75] shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-[#b8c5d3]">
              <span className="h-2 w-2 rounded-full bg-[#a6df34]" />
              Tecnología · Comercio · Negocios
            </p>
            <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl md:mx-0 md:text-7xl">
              Impulsamos negocios con
              <span className="relative mx-2 mt-2 inline-block -rotate-1 bg-[#397ce8] px-3 py-1 text-white sm:px-5">
                nuevas ideas
              </span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-sm leading-6 text-[#34485a] dark:text-[#c1ccd9] sm:text-base sm:leading-7 md:mx-0">
              Conectamos tecnología, comercio digital y visión empresarial para crear oportunidades y ayudar a los negocios a crecer.
            </p>
            <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row md:justify-start">
              <Button asChild size="lg" className="h-12 rounded-full bg-[#b9ed35] px-7 text-sm font-semibold text-[#15200b] shadow-[0_8px_20px_rgba(119,163,28,0.2)] hover:bg-[#a8df27]">
                <Link href="#ecosistema">Conoce SWP <ArrowUpRight aria-hidden="true" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-[#56758e]/25 bg-white/65 px-7 text-sm font-semibold text-[#243c51] hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-[#e5eaf0] dark:hover:bg-white/10">
                <Link href="#contacto">Hablemos de tu proyecto</Link>
              </Button>
            </div>
            <div className="mt-9 flex items-center justify-center md:justify-start">
              {[
                ["S", "bg-[#f7a0a9]"],
                ["W", "bg-[#ffcf69]"],
                ["P", "bg-[#9edcf2]"],
              ].map(([letter, color]) => (
                <span key={letter} className={`-ml-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-[#243344] first:ml-0 ${color}`}>
                  {letter}
                </span>
              ))}
              <span className="ml-3 text-xs font-medium text-[#526b80] dark:text-[#b8c5d3]">Una visión compartida, muchas posibilidades.</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[600px] md:ml-auto">
            <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-white/45 dark:bg-white/5" />
            <div className="relative aspect-[1.25] overflow-hidden rounded-[1.75rem] border-[6px] border-white shadow-[0_28px_80px_rgba(36,67,89,0.2)] dark:border-[#1b3652]">
              <Image
                src="/image/swp-team.webp"
                alt="Equipo de profesionales colaborando alrededor de una mesa"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-4 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-lg dark:border-white/10 dark:bg-[#132a43] sm:left-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#758493] dark:text-[#aab9c8]">Juntos hacemos</p>
              <p className="mt-1 text-sm font-bold text-[#26384a] dark:text-white">que las ideas crezcan <span className="text-[#397ce8]">✳</span></p>
            </div>
            <span aria-hidden="true" className="absolute -right-3 -top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c7f24d] text-2xl text-[#30430f] shadow-md">✦</span>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-5xl grid-cols-3 border-t border-[#54738c]/15 pt-5 text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-[#587187] dark:border-white/15 dark:text-[#b8c5d3] sm:text-xs">
          <span>Comercio digital</span>
          <span className="border-x border-[#54738c]/15 dark:border-white/15">Soluciones de negocio</span>
          <span>Visión de futuro</span>
        </div>
      </section>

      <section className="bg-[#fffdfa] px-6 py-9 dark:bg-[#07111f] sm:px-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["SWP", "Tecnología"],
            ["STORE", "Comercio digital"],
            ["BUSINESS", "Desarrollo"],
            ["PERÚ", "Visión regional"],
          ].map(([label, caption], index) => (
            <div key={label} className="flex min-h-20 flex-col items-center justify-center rounded-2xl border border-[#e8edf0] bg-white/80 px-3 text-center shadow-[0_8px_30px_rgba(41,73,94,0.035)] dark:border-white/10 dark:bg-[#0b1a2b]">
              <span className={`text-sm font-extrabold tracking-[0.08em] ${index === 1 ? "text-[#397ce8] dark:text-[#8fb2d1]" : "text-[#243344] dark:text-white"}`}>{label}</span>
              <span className="mt-1 text-[9px] uppercase tracking-[0.12em] text-[#8090a0] dark:text-[#aab9c8]">{caption}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="nosotros" className="scroll-mt-24 bg-[#fffdfa] px-6 py-16 dark:bg-[#07111f] sm:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65798a] dark:text-[#8fb2d1] md:text-left">Quiénes somos</p>
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#17222c] dark:text-white sm:text-5xl">
                Somos una visión creativa
                <span className="mx-1 bg-[#c7f24d] px-2">para impulsar</span>
                negocios.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#647382] dark:text-[#b8c5d3] sm:text-base md:mx-0">
                SWP es la evolución de Crece Perú. Integramos iniciativas digitales y empresariales para ayudar a los negocios a evolucionar, aprovechar nuevas oportunidades y crecer en un entorno conectado.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-2 md:justify-start">
                {["Innovación aplicada", "Mentalidad empresarial", "Crecimiento sostenible"].map((item) => (
                  <span key={item} className="rounded-full border border-[#e4e9ec] bg-white px-4 py-2 text-[10px] font-medium text-[#516273] dark:border-white/10 dark:bg-[#0b1a2b] dark:text-[#d6e0ea]">{item}</span>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-[#ffe2d2]" />
              <div className="relative aspect-[1.15] overflow-hidden rounded-[1.75rem] border-4 border-white shadow-[0_24px_70px_rgba(36,67,89,0.14)] dark:border-[#1b3652]">
                <Image
                  src="/image/swp-entrepreneur.webp"
                  alt="Emprendedor sonriente señalando con confianza su proyecto"
                  fill
                  sizes="(max-width: 768px) 90vw, 38vw"
                  className="object-cover"
                />
              </div>
              <span className="absolute -bottom-4 right-4 rounded-full bg-[#397ce8] px-5 py-2.5 text-xs font-semibold text-white shadow-md">Crece a tu manera <ArrowUpRight size={14} className="ml-1 inline" aria-hidden="true" /></span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f9fc] px-6 py-16 dark:bg-[#0d2035] sm:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65798a] dark:text-[#8fb2d1]">Ideas en acción</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#17222c] dark:text-white sm:text-5xl">Un ecosistema hecho para crecer.</h2>
            <p className="mt-4 text-sm leading-6 text-[#647382] dark:text-[#b8c5d3] sm:text-base">
              Comercio, colaboración y tecnología se encuentran para crear nuevas oportunidades.
            </p>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {visualStories.map((story) => (
              <article key={story.image} className="group overflow-hidden rounded-[1.5rem] border border-white bg-white shadow-[0_14px_40px_rgba(41,73,94,0.07)] dark:border-white/10 dark:bg-[#0b1a2b]">
                <div className="relative aspect-[1.35] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${story.imageClass}`}
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#40566a] shadow-sm backdrop-blur">
                    {story.eyebrow}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold leading-snug text-[#26384a] dark:text-[#e5eaf0]">{story.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <EcosystemShowcase />

      <section id="alianzas" className="scroll-mt-24 bg-[#f4f9fc] px-6 py-16 dark:bg-[#0d2035] sm:px-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65798a] dark:text-[#8fb2d1]">Alianzas</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#17222c] dark:text-white sm:text-4xl">Crecemos en buena compañía.</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="flex min-h-36 items-center justify-center rounded-[1.5rem] border border-[#e8edf0] bg-white p-8 shadow-[0_12px_36px_rgba(41,73,94,0.045)] dark:border-white/10 dark:bg-white">
              <Image src="/image/entel-mark.png" alt="Entel" width={600} height={600} className="h-20 w-20 object-contain" />
            </article>
            <article className="flex min-h-36 items-center justify-center rounded-[1.5rem] border border-[#e8edf0] bg-white p-8 shadow-[0_12px_36px_rgba(41,73,94,0.045)] dark:border-white/10 dark:bg-white">
              <Image src="/image/interbank.svg" alt="Interbank" width={260} height={65} className="h-14 w-auto" />
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdfa] px-6 py-16 dark:bg-[#07111f] sm:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#687b8b] dark:text-[#8fb2d1]">Lo que nos mueve</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#17222c] dark:text-white sm:text-5xl">Ideas que ayudan a avanzar.</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ number, title, description, icon: Icon, color }) => (
              <article key={number} className="rounded-3xl border border-[#e9edef] bg-white p-6 shadow-[0_12px_36px_rgba(41,73,94,0.045)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-[#0b1a2b]">
                <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${color}`}>
                  <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <p className="mt-5 text-[9px] font-bold tracking-[0.14em] text-[#99a5ae]">{number}</p>
                <h3 className="mt-2 text-base font-semibold text-[#253342] dark:text-[#e5eaf0]">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-[#71808d] dark:text-[#b8c5d3]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#d4edff] px-6 py-16 dark:bg-[#132a43] sm:px-12 md:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_100%,rgba(255,255,255,0.9),transparent_45%),radial-gradient(ellipse_at_92%_0%,rgba(255,229,214,0.75),transparent_36%)] dark:hidden" />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[0.7fr_1.3fr]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#587187] dark:text-[#8fb2d1]">Visión de futuro</p>
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#17222c] dark:text-white sm:text-4xl">Construimos con propósito, crecemos contigo.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#52697c] dark:text-[#b8c5d3] sm:text-base">
              Creemos que la tecnología cobra valor cuando abre posibilidades concretas. Por eso desarrollamos una visión que integra comercio digital e iniciativas empresariales, con atención a las necesidades reales y espacio para crecer.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-24 bg-[#fffdfa] px-6 py-16 dark:bg-[#07111f] sm:px-12 md:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-7 rounded-[2rem] bg-[#fff0e8] px-7 py-10 dark:bg-[#132a43] sm:px-12 md:flex-row md:items-center md:justify-between md:py-12">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#966c5a] dark:text-[#a8c5df]">El siguiente paso</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#24272d] dark:text-white sm:text-4xl">¿Tienes una idea? Hagámosla crecer.</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#71645f] dark:text-[#b8c5d3]">Conversemos sobre tu negocio, tu proyecto y las oportunidades que podemos desarrollar.</p>
          </div>
          {swpConfig.contactEmail ? (
            <Button asChild size="lg" className="h-12 shrink-0 rounded-full bg-[#b9ed35] px-6 text-sm font-semibold text-[#15200b] hover:bg-[#a8df27]">
              <a href={swpConfig.contactHref}>Contactar con SWP <ArrowUpRight aria-hidden="true" /></a>
            </Button>
          ) : (
            <p id="canal-contacto" className="max-w-xs border-l-2 border-[#a6d93b] py-2 pl-4 text-sm leading-6 text-[#71645f] dark:text-[#b8c5d3]">El canal de contacto estará disponible cuando se configure el correo corporativo.</p>
          )}
        </div>
      </section>
    </div>
  );
}
