"use client";

import { useState } from "react";

import { specialties } from "@/data/specialties";
import type { Doctor } from "@/types";

import { DoctorCard } from "./DoctorCard";
import { SpecialtyFilter } from "./SpecialtyFilter";

type DoctorGridProps = {
  doctors: Doctor[];
  specialties: typeof specialties;
  locale: string;
};

export function DoctorGrid({ doctors, specialties, locale }: DoctorGridProps) {
  const [selected, setSelected] = useState("all");

  const filteredDoctors =
    selected === "all"
      ? doctors
      : doctors.filter((doctor) => doctor.specialtySlug === selected);

  return (
    <div className="space-y-6">
      <SpecialtyFilter
        specialties={specialties}
        selected={selected}
        onChange={setSelected}
      />

      {filteredDoctors.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/90 p-6 text-sm text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
          No hay especialistas en esta categoría
        </div>
      )}
    </div>
  );
}
