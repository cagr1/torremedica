"use client";

import { specialties } from "@/data/specialties";

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
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      <button
        type="button"
        onClick={() => onChange("all")}
        className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
          selected === "all"
            ? "bg-primary text-white"
            : "border border-slate-200 text-slate-700"
        }`}
      >
        Todos
      </button>

      {specialties.map((specialty) => (
        <button
          key={specialty.slug}
          type="button"
          onClick={() => onChange(specialty.slug)}
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
            selected === specialty.slug
              ? "bg-primary text-white"
              : "border border-slate-200 text-slate-700"
          }`}
        >
          {specialty.name}
        </button>
      ))}
    </div>
  );
}
