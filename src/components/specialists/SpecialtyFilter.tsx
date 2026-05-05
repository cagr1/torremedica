"use client";

import { useTranslations } from "next-intl";

import { specialties } from "@/data/specialties";

const SPECIALTY_DOT_COLORS: Record<string, string> = {
  cardiologia:            "#dc2626",
  pediatria:              "#0891b2",
  dermatologia:           "#d97706",
  traumatologia:          "#4f46e5",
  ginecologia:            "#db2777",
  neurologia:             "#7c3aed",
  nutricion:              "#16a34a",
  oftalmologia:           "#0284c7",
  odontologia:            "#0d9488",
  "psicologia-clinica":   "#9333ea",
  "medicina-interna":     "#0B1E3D",
  urologia:               "#1d4ed8",
};

type SpecialtyFilterProps = {
  specialties: typeof specialties;
  selected: string;
  onChange: (value: string) => void;
};

export function SpecialtyFilter({
  specialties,
  selected,
  onChange,
}: SpecialtyFilterProps) {
  const t = useTranslations();

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      <button
        type="button"
        onClick={() => onChange("all")}
        className={`shrink-0 rounded-xl px-5 py-2 font-sans text-xs font-semibold uppercase tracking-[0.1em] transition-all ${
          selected === "all"
            ? "bg-navy text-white shadow-sm"
            : "border border-gray-200 text-on-surface-variant hover:border-navy hover:text-navy"
        }`}
      >
        {t("specialtyNames.all")}
      </button>

      {specialties.map((specialty) => {
        const dotColor = SPECIALTY_DOT_COLORS[specialty.slug];
        const isActive = selected === specialty.slug;
        return (
          <button
            key={specialty.slug}
            type="button"
            onClick={() => onChange(specialty.slug)}
            className={`flex shrink-0 items-center gap-2 rounded-xl px-5 py-2 font-sans text-xs font-semibold uppercase tracking-[0.1em] transition-all ${
              isActive
                ? "bg-navy text-white shadow-sm"
                : "border border-gray-200 text-on-surface-variant hover:border-navy hover:text-navy"
            }`}
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: isActive ? "white" : dotColor }}
            />
            {t(`specialtyNames.${specialty.slug}`)}
          </button>
        );
      })}
    </div>
  );
}
