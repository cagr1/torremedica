"use client";

import { Menu, MessageSquare, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { Link, usePathname } from "@/i18n/navigation";

const localeLabels = {
  es: "ES",
  en: "EN",
  zh: "中文",
} as const;

type NavbarProps = {
  locale: string;
};

const navItems = [
  { href: "/", key: "home" },
  { href: "/especialistas", key: "specialists" },
  { href: "/torres", key: "towers" },
] as const;

export function Navbar({ locale }: NavbarProps) {
  const t = useTranslations("nav");
  const pathname = usePathname() || "/";
  const currentLocale = locale as keyof typeof localeLabels;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="hidden bg-navy py-2.5 text-center font-sans text-[11px] tracking-wide text-white md:block">
        <span className="font-semibold text-gold-light">Torre Medica La Carolina</span>
        {" · "}{t("announcementAddress")}{" · "}
        <a href="tel:+59372981574" className="transition-colors hover:text-white">
          +593 7 298 1574
        </a>
        {" · "}{t("announcementHours")}
      </div>

      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "border-b border-gray-100"
        }`}
      >
        <div className="container-custom flex items-center justify-between py-5">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy">
              <span className="font-display text-base font-bold leading-none text-gold">T</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="hidden font-display text-base font-bold tracking-tight text-navy sm:block">
                Torre Medica
              </span>
              <span className="hidden font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-gold sm:block">
                La Carolina
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className="group relative font-sans text-sm font-medium text-navy transition-colors hover:text-navy-light"
              >
                {t(key)}
                <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-gold transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-1 md:flex">
              {(["es", "en", "zh"] as const).map((loc) => (
                <Link
                  key={loc}
                  href={pathname}
                  locale={loc}
                  className={`rounded-lg px-2.5 py-1 font-sans text-[11px] font-semibold transition-all ${
                    loc === currentLocale
                      ? "bg-navy text-white"
                      : "text-navy hover:bg-gold-pale hover:text-navy"
                  }`}
                >
                  {localeLabels[loc]}
                </Link>
              ))}
            </div>

            <a
              href="https://wa.me/59372981574"
              className="hidden items-center gap-2 rounded-xl border border-medical-green/30 px-4 py-2 font-sans text-xs font-semibold text-medical-green transition-all hover:bg-medical-green hover:text-white lg:flex"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              WhatsApp
            </a>

            <Link
              href="/especialistas"
              className="hidden rounded-xl bg-navy px-5 py-2.5 font-sans text-sm font-semibold tracking-wide text-white transition-all hover:bg-navy-light sm:block"
            >
              {t("bookAppointment")}
            </Link>

            <button
              type="button"
              className="p-1 text-navy md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-gray-100 bg-white px-6 py-5 md:hidden">
            {navItems.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className="font-sans text-sm font-medium text-navy"
                onClick={() => setMenuOpen(false)}
              >
                {t(key)}
              </Link>
            ))}

            <div className="flex items-center gap-2 border-t border-gray-100 pt-2">
              {(["es", "en", "zh"] as const).map((loc) => (
                <Link
                  key={loc}
                  href={pathname}
                  locale={loc}
                  className={`rounded-lg border px-3 py-1.5 font-sans text-xs font-semibold transition-all ${
                    loc === currentLocale
                      ? "border-navy bg-navy text-white"
                      : "border-gray-200 text-navy hover:border-navy hover:text-navy"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {localeLabels[loc]}
                </Link>
              ))}
            </div>

            <Link
              href="/especialistas"
              className="mt-1 w-full rounded-xl bg-navy py-3 text-center font-sans text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              {t("bookAppointment")}
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
