"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SearchBox } from "./SearchBox";

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Nuevo Ingreso", href: "/nuevo-ingreso" },
  { label: "Contáctanos", href: "/#contacto" },
  { label: "Revista", href: "/revista" },
  { label: "Sobre Nosotros", href: "/#sobre-nosotros" },
];

type NavbarProps = {
  siteName?: string;
  logoUrl?: string;
};

export function Navbar({ siteName = "Facultad de Ingeniería CUNORI", logoUrl }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3 font-semibold leading-tight">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt={siteName}
              width={44}
              height={44}
              className="size-11 rounded-full object-contain"
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex size-11 items-center justify-center rounded-full bg-black/5 text-xs uppercase text-black/50"
            >
              logo
            </span>
          )}
          <span className="text-sm sm:text-base">{siteName}</span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-6 text-sm md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:opacity-70">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <SearchBox />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className="text-2xl leading-none md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-black/10 px-4 pb-4 md:hidden">
          <nav aria-label="Principal (móvil)" className="flex flex-col gap-3 py-4 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <SearchBox className="w-full" />
        </div>
      )}
    </header>
  );
}
