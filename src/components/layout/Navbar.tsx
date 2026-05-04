"use client";

import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";

const localeLabels = {
  es: "Espanol",
  en: "English",
  zh: "中文",
} as const;

type NavbarProps = {
  locale: string;
};

const navItems = [
  { href: "/especialistas", key: "specialists" },
  { href: "/torres", key: "towers" },
] as const;

export function Navbar({ locale }: NavbarProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const currentLocale = locale as keyof typeof localeLabels;

  return (
    <header className="rounded-[2rem] border border-white/70 bg-surface px-4 py-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
          {t("brand")}
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition ${
                  isActive
                    ? "font-semibold text-primary underline decoration-2 underline-offset-4"
                    : "text-slate-700 hover:text-primary"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-wrap items-center gap-2 text-sm lg:justify-end">
          {(["es", "en", "zh"] as const).map((item) => {
            const isActive = item === currentLocale;

            return (
              <Link
                key={item}
                href={pathname}
                locale={item}
                className={`rounded-full border px-4 py-2 transition ${
                  isActive
                    ? "border-primary bg-primary text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary"
                }`}
              >
                {localeLabels[item]}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
