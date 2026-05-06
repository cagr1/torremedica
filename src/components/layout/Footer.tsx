import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

const NAV_LINKS = [
  { href: "/", key: "home" as const },
  { href: "/especialistas", key: "specialists" as const },
  { href: "/torres", key: "towers" as const },
  { href: "/#contacto", key: "contact" as const },
];

const SPECIALTY_LINKS = [
  "cardiologia",
  "pediatria",
  "neurologia",
  "ginecologia",
  "dermatologia",
] as const;

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="mt-0 bg-navy text-white" id="contacto">
      <div className="container-custom grid grid-cols-1 gap-12 pb-12 pt-16 md:grid-cols-12">
        <div className="space-y-6 md:col-span-4">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div className="relative h-[76px] w-[116px] shrink-0 sm:h-[84px] sm:w-[128px]">
                <Image
                  src="/LogoTorreFooter.png"
                  alt="Logo Torre Medica La Carolina"
                  fill
                  sizes="(max-width: 640px) 116px, 128px"
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-display text-lg font-bold leading-tight text-white sm:text-xl">
                  Torre Medica
                </div>
                <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                  La Carolina
                </div>
              </div>
            </div>
            <p className="font-sans text-sm font-light leading-relaxed text-white">
              {t("footer.description")}
            </p>
          </div>

          <div className="flex gap-3 pt-1">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center text-white transition-all duration-200 hover:text-gold"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center text-white transition-all duration-200 hover:text-gold"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center text-white transition-all duration-200 hover:text-gold"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                <polygon fill="white" points="9.75,15.02 15.5,12 9.75,8.98" />
              </svg>
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
            {t("footer.navigationTitle")}
          </h4>
          <ul className="space-y-3">
            {NAV_LINKS.map(({ href, key }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-1 font-sans text-sm text-white transition-colors hover:text-gold"
                >
                  {t(`nav.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
            {t("footer.specialtiesTitle")}
          </h4>
          <ul className="space-y-3">
            {SPECIALTY_LINKS.map((slug) => (
              <li key={slug}>
                <Link
                  href="/especialistas"
                  className="font-sans text-sm text-white transition-colors hover:text-gold"
                >
                  {t(`specialtyNames.${slug}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
            {t("footer.contactTitle")}
          </h4>
          <ul className="mb-8 space-y-4">
            <li className="flex items-start gap-3 font-sans text-sm text-white">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{t("footer.address")}</span>
            </li>
            <li className="flex items-center gap-3 font-sans text-sm text-white">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href="tel:+59372981574" className="transition-colors hover:text-gold">
                +593 7 298 1574
              </a>
            </li>
            <li className="flex items-center gap-3 font-sans text-sm text-white">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a
                href="mailto:info@torremedicalacarolina.com"
                className="transition-colors hover:text-gold"
              >
                info@torremedicalacarolina.com
              </a>
            </li>
          </ul>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
            <p className="mb-2 font-sans text-[10px] uppercase tracking-widest text-white">
              {t("footer.hoursLabel")}
            </p>
            <p className="font-sans text-sm text-white">
              {t("footer.weekHours")} &nbsp;/&nbsp; {t("footer.saturdayHours")}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-5">
        <div className="container-custom flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <p className="font-sans text-xs text-white">{t("footer.copyright")}</p>
          <p className="font-sans text-xs text-white">
            {t("footer.madeBy")}{" "}
            <a
              href="https://www.carlosgallardo.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold transition-colors hover:text-gold-light"
            >
              Carlos Gallardo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
