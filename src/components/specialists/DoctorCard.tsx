import { ArrowRight, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import type { Doctor } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

type DoctorCardProps = {
  doctor: Doctor;
  locale: string;
};

export function DoctorCard({ doctor, locale }: DoctorCardProps) {
  const t = useTranslations();
  const specialtyLabel = t(`specialtyNames.${doctor.specialtySlug}`);

  void locale;

  return (
    <Reveal
      as="article"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-500 hover:shadow-xl"
    >
      {/* Photo area */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={doctor.photoUrl}
          alt={doctor.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover overlay with profile CTA */}
        <div className="absolute inset-0 flex items-end bg-navy/0 transition-all duration-500 group-hover:bg-navy/40">
          <div className="w-full translate-y-3 px-4 pb-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <Link
              href={`/doctor/${doctor.slug}`}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-2.5 font-sans text-xs font-semibold uppercase tracking-wide text-navy"
            >
              {t("profile.viewProfile")} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Available badge */}
        <div className="absolute left-4 top-4">
          <span className="bg-medical-green px-2.5 py-1 font-sans text-[9px] font-bold uppercase tracking-[0.15em] text-white">
            {t("doctors.available")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col border-t border-gray-100 p-6">
        <span className="mb-2.5 block font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
          {specialtyLabel}
        </span>
        <h3 className="mb-3 font-display text-xl font-bold leading-snug text-navy transition-colors group-hover:text-navy-light">
          {doctor.name}
        </h3>
        <p className="mb-6 flex-grow font-sans text-sm font-light leading-relaxed text-on-surface-variant line-clamp-2">
          {doctor.description}
        </p>

        <a
          href={doctor.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-medical-green py-2.5 font-sans text-xs font-semibold uppercase tracking-wide text-white transition-all hover:bg-[#0A7569]"
        >
          <MessageCircle className="h-4 w-4 fill-white" />
          {t("doctors.whatsapp")}
        </a>
      </div>
    </Reveal>
  );
}
