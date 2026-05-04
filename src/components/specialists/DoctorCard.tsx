import { Globe, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import type { Doctor } from "@/types";

type DoctorCardProps = {
  doctor: Doctor;
  locale: string;
};

export function DoctorCard({ doctor, locale }: DoctorCardProps) {
  const t = useTranslations();
  void locale;

  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-slate-200/80 bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.06)]">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-lg font-semibold text-primary">
          {doctor.image}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">
            {doctor.specialty}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-slate-900">
            {doctor.name}
          </h3>
          <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
            <Phone className="h-4 w-4" />
            <span>{doctor.phone}</span>
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-3 text-sm text-slate-600">
        <div className="flex items-start gap-2">
          <MapPin className="mt-0.5 h-4 w-4 text-primary" />
          <span>
            {t("doctors.location")}: {doctor.floor}, {doctor.office}
          </span>
        </div>
        <div className="flex items-start gap-2">
          <Globe className="mt-0.5 h-4 w-4 text-primary" />
          <span>
            {t("doctors.languages")}: {doctor.languages.join(" / ")}
          </span>
        </div>
        <p>
          <span className="font-medium text-slate-800">
            {t("doctors.schedule")}:
          </span>{" "}
          {doctor.hours}
        </p>
      </div>

      <WhatsAppButton href={doctor.whatsapp} label={t("doctors.whatsapp")} />
    </article>
  );
}
