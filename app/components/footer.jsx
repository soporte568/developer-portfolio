import Link from "next/link";
import { swpConfig } from "@/utils/data/swp-config";

export default function Footer() {
  return (
    <footer className="border-t border-[#e8edf0] bg-[#fffdfa] text-[#687784] dark:border-white/10 dark:bg-[#0b1a2b] dark:text-[#b8c5d3]">
      <div className="mx-auto grid max-w-[92rem] gap-10 px-6 py-12 sm:px-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/#inicio" className="text-lg font-semibold tracking-[0.14em] text-[#243344] dark:text-white">SWP</Link>
          <p className="mt-3 max-w-sm text-sm leading-6">Tecnología, comercio digital y visión empresarial para construir negocios preparados para el futuro.</p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#243344] dark:text-white">Líneas de negocio</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/#swp-store" className="transition-colors hover:text-[#397ce8] dark:hover:text-[#8fb2d1]">SWP Store</Link></li>
            <li><Link href="/#swp-business" className="transition-colors hover:text-[#397ce8] dark:hover:text-[#8fb2d1]">SWP Business</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#243344] dark:text-white">Institucional</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/#nosotros" className="transition-colors hover:text-[#397ce8] dark:hover:text-[#8fb2d1]">Nosotros</Link></li>
            <li><Link href="/#contacto" className="transition-colors hover:text-[#397ce8] dark:hover:text-[#8fb2d1]">Contacto</Link></li>
            <li><Link href="/privacidad" className="transition-colors hover:text-[#12365a] dark:hover:text-[#8fb2d1]">Política de privacidad</Link></li>
            <li><Link href="/terminos" className="transition-colors hover:text-[#12365a] dark:hover:text-[#8fb2d1]">Términos y condiciones</Link></li>
          </ul>
          {swpConfig.contactEmail && <a className="mt-4 inline-block text-sm font-medium text-[#397ce8] hover:text-[#658c1e] dark:text-[#8fb2d1]" href={swpConfig.contactHref}>{swpConfig.contactEmail}</a>}
        </div>
      </div>
      <div className="border-t border-[#e8edf0] dark:border-white/10">
        <div className="mx-auto flex max-w-[92rem] flex-col gap-2 px-6 py-5 text-xs sm:px-12 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SWP. Todos los derechos reservados.</p>
          <p>Tecnología · Comercio · Negocios</p>
        </div>
      </div>
    </footer>
  );
}