import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";

import { towers } from "@/data/towers";

type TowerCardProps = {
  tower: (typeof towers)[number];
  doctorCount: number;
  cardTag: string;
  specialistsLabel: string;
  floorsLabel: string;
  scheduleLabel: string;
  locationNote: string;
  viewOnMapsLabel: string;
};

export function TowerCard({
  tower,
  doctorCount,
  cardTag,
  specialistsLabel,
  floorsLabel,
  scheduleLabel,
  locationNote,
  viewOnMapsLabel,
}: TowerCardProps) {
  return (
    <article className="overflow-hidden rounded-[20px] border border-gray-100 bg-white">
      <div className="border-b border-gold/20 bg-gold-pale px-6 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="mb-2 block font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              {cardTag}
            </span>
            <h2 className="font-display text-3xl font-bold text-navy">{tower.name}</h2>
          </div>
          <span className="rounded-full border border-gold/40 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-navy">
            {doctorCount} {specialistsLabel}
          </span>
        </div>
      </div>

      <div className="space-y-6 p-6">
        <p className="font-display text-xl font-semibold text-navy">{floorsLabel}</p>

        <div className="space-y-3 pt-2">
          <div className="flex items-start gap-3 font-sans text-sm text-on-surface-variant">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <div className="space-y-1">
              <span className="block">{tower.address}</span>
              <span className="block text-xs">{locationNote}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 font-sans text-sm text-on-surface-variant">
            <Clock className="h-4 w-4 shrink-0 text-gold" />
            <span>{scheduleLabel}</span>
          </div>
          <div className="flex items-center gap-3 font-sans text-sm text-on-surface-variant">
            <Phone className="h-4 w-4 shrink-0 text-gold" />
            <a href={`tel:${tower.phone}`} className="transition-colors hover:text-navy">
              {tower.phone}
            </a>
          </div>
        </div>

        <a
          href={tower.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-navy px-4 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-navy transition-all hover:bg-navy hover:text-white"
        >
          {viewOnMapsLabel}
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
