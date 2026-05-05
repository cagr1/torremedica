import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

const NAV_LINKS = [
  { href: "/", key: "home" as const },
  { href: "/especialistas", key: "specialists" as const },
  { href: "/torres", key: "towers" as const },
];

const SPECIALTIES_ES = [
  "Cardiología",
  "Pediatría",
  "Neurología",
  "Ginecología",
  "Dermatología",
];

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="mt-0 bg-navy text-white">
      <div className="container-custom grid grid-cols-1 gap-12 pb-12 pt-16 md:grid-cols-12">
        {/* Brand */}
        <div className="space-y-6 md:col-span-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center bg-gold/15">
                <span className="font-display text-base font-bold leading-none text-gold">T</span>
              </div>
              <div>
                <div className="font-display text-base font-bold leading-tight text-white">
                  Torre Medica
                </div>
                <div className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-gold/70">
                  La Carolina
                </div>
              </div>
            </div>
            <p className="font-sans text-sm font-light leading-relaxed text-white/40">
              {t("footer.description")}
            </p>
          </div>
          <div className="flex gap-3 pt-1">
            {/* Facebook */}
            <a href="#" className="flex h-9 w-9 items-center justify-center border border-white/10 text-white/30 transition-all duration-200 hover:border-gold hover:text-gold">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="flex h-9 w-9 items-center justify-center border border-white/10 text-white/30 transition-all duration-200 hover:border-gold hover:text-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="flex h-9 w-9 items-center justify-center border border-white/10 text-white/30 transition-all duration-200 hover:border-gold hover:text-gold">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                <polygon fill="white" points="9.75,15.02 15.5,12 9.75,8.98" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-2">
          <h4 className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
            {t("footer.navigationTitle")}
          </h4>
          <ul className="space-y-3">
            {NAV_LINKS.map(({ href, key }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex items-center gap-1 font-sans text-sm text-white/45 transition-colors hover:text-gold"
                >
                  {t(`nav.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Specialties */}
        <div className="md:col-span-2">
          <h4 className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
            {t("footer.specialtiesTitle")}
          </h4>
          <ul className="space-y-3">
            {SPECIALTIES_ES.map((s) => (
              <li key={s}>
                <Link
                  href="/especialistas"
                  className="font-sans text-sm text-white/45 transition-colors hover:text-gold"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <h4 className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
            {t("footer.contactTitle")}
          </h4>
          <ul className="mb-8 space-y-4">
            <li className="flex items-start gap-3 font-sans text-sm text-white/45">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{t("footer.address")}</span>
            </li>
            <li className="flex items-center gap-3 font-sans text-sm text-white/45">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href="tel:+59372981574" className="transition-colors hover:text-white">
                +593 7 298 1574
              </a>
            </li>
            <li className="flex items-center gap-3 font-sans text-sm text-white/45">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a
                href="mailto:info@torremedicalacarolina.com"
                className="transition-colors hover:text-white"
              >
                info@torremedicalacarolina.com
              </a>
            </li>
          </ul>
          <div className="border border-white/8 bg-white/3 p-4">
            <p className="mb-2 font-sans text-[10px] uppercase tracking-widest text-white/30">
              {t("footer.hoursLabel")}
            </p>
            <p className="font-sans text-sm text-white/50">
              {t("footer.weekHours")} &nbsp;·&nbsp; {t("footer.saturdayHours")}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="container-custom flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="font-sans text-xs text-white/20">{t("footer.copyright")}</p>
          <p className="font-sans text-xs text-white/20">{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
