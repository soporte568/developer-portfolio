"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import ThemeSwitch from "./theme-switch";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/app/components/ui/sheet";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "SWP Store", href: "#swp-store" },
  { label: "SWP Business", href: "#swp-business" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Alianzas", href: "#alianzas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    let frame = 0;
    const updateScrollState = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

        document.documentElement.style.setProperty("--swp-scroll-progress", `${progress}%`);
        frame = 0;
      });
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/") return undefined;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);

        if (visibleSections[0]) setActiveSection(visibleSections[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.5] }
    );

    ["inicio", "ecosistema", "swp-store", "swp-business", "nosotros", "alianzas", "contacto"].forEach((id) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    return () => sectionObserver.disconnect();
  }, [pathname]);

  const isActive = (href) => pathname === "/" && href === `#${activeSection}`;

  return (
    <header className="sticky top-0 z-50 -mx-6 -mb-[72px] px-6 pt-3 sm:-mx-12 sm:px-12">
      <nav aria-label="Navegación principal" className="mx-auto flex min-h-[58px] max-w-5xl items-center justify-between gap-4 rounded-full border border-white/80 bg-white/90 px-4 shadow-[0_8px_30px_rgba(41,73,94,0.09)] backdrop-blur-md dark:border-white/10 dark:bg-[#0b1a2b]/90 sm:px-6">
        <Link href="/#inicio" aria-label="SWP, inicio" className="flex shrink-0 items-center gap-3 text-[#243344] dark:text-white">
          <span className="text-xl font-semibold tracking-[0.14em]">SWP</span>
          <span className="hidden h-6 w-px bg-[#e6ebee] dark:bg-white/15 sm:block" />
          <span className="hidden text-[9px] font-medium uppercase tracking-[0.14em] text-[#758493] dark:text-[#b8c5d3] sm:block">Tecnología · Comercio · Negocios</span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={`/${link.href}`}
              aria-current={isActive(link.href) ? "location" : undefined}
              className="relative flex min-h-10 items-center text-xs font-medium text-[#526273] transition-colors hover:text-[#397ce8] dark:text-[#d6e0ea] dark:hover:text-[#a8c5df]"
            >
              {link.label}
              <span aria-hidden="true" className={`absolute inset-x-0 bottom-1 h-0.5 transition-transform duration-200 ${isActive(link.href) ? "scale-x-100 bg-[#a8dd37]" : "scale-x-0 bg-current"}`} />
            </Link>
          ))}
          <Button asChild className="h-10 rounded-full bg-[#b9ed35] px-4 text-xs text-[#243017] hover:bg-[#a8df27]">
            <Link href="/#contacto">Conversemos <ArrowUpRight aria-hidden="true" /></Link>
          </Button>
          <ThemeSwitch />
        </div>

        <Sheet>
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeSwitch />
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Abrir menú" className="rounded-full border-[#e5eaed] bg-white text-[#243344] hover:bg-[#f4f8fa] dark:border-white/15 dark:bg-[#132a43] dark:text-white">
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent side="right" className="w-[min(85vw,22rem)] border-[#dce1e7] bg-white px-5 pt-12 dark:border-white/10 dark:bg-[#0b1a2b]">
            <SheetHeader className="px-0">
              <SheetTitle className="text-left text-lg text-[#07111f] dark:text-white">SWP</SheetTitle>
              <SheetDescription className="text-left dark:text-[#b8c5d3]">SWP · Tecnología · Comercio · Negocios</SheetDescription>
            </SheetHeader>
            <nav aria-label="Navegación móvil" className="flex flex-col">
              {links.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={`/${link.href}`}
                    aria-current={isActive(link.href) ? "location" : undefined}
                    className={`flex items-center justify-between border-b border-[#e5e9ee] px-2 py-4 text-sm font-medium transition-colors hover:text-[#12365a] dark:border-white/10 dark:hover:text-[#8fb2d1] ${isActive(link.href) ? "text-[#12365a] dark:text-[#8fb2d1]" : "text-[#263647] dark:text-[#d6e0ea]"}`}
                  >
                    {link.label}
                    {isActive(link.href) && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="mt-5 h-11 rounded-none bg-[#12365a] text-sm font-semibold text-white hover:bg-[#0b2744]">
                  <Link href="/#contacto">Conversemos <ArrowUpRight aria-hidden="true" /></Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
      <span aria-hidden="true" className="mx-auto block h-0.5 max-w-5xl overflow-hidden rounded-full bg-[#e7edf0] dark:bg-white/10">
        <span className="block h-full origin-left bg-[#a8dd37]" style={{ width: "var(--swp-scroll-progress, 0%)" }} />
      </span>
    </header>
  );
}
