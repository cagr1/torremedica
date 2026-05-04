import { Clock, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { towers } from "@/data/towers";

type TowerCardProps = {
  tower: (typeof towers)[number];
  doctorCount: number;
};

export function TowerCard({ tower, doctorCount }: TowerCardProps) {
  const t = useTranslations("nav");

  return (
    <article className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_14px_45px_rgba(15,23,42,0.06)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            {tower.name}
          </h2>
          <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-slate-600">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
            <span>{tower.address}</span>
          </p>
        </div>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-primary">
          {doctorCount} {t("specialists").toLowerCase()}
        </span>
      </div>

      <div className="mt-6 space-y-4 text-sm text-slate-600">
        <p className="font-medium text-slate-800">{tower.floors}</p>
        <div className="flex items-start gap-2">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{tower.schedule}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-primary" />
          <span>{tower.phone}</span>
        </div>
      </div>
    </article>
  );
}
