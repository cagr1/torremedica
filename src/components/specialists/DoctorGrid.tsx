"use client";

import { Filter, Phone, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { specialties } from "@/data/specialties";
import type { Doctor } from "@/types";

import { DoctorCard } from "./DoctorCard";
import { Reveal } from "@/components/ui/Reveal";

type DoctorGridProps = {
  doctors: Doctor[];
  specialties: typeof specialties;
  locale: string;
};

export function DoctorGrid({ doctors, specialties, locale }: DoctorGridProps) {
  const t = useTranslations();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const filteredDoctors = doctors.filter((doctor) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      !term ||
      doctor.name.toLowerCase().includes(term) ||
      doctor.specialty.toLowerCase().includes(term);
    const matchesSpecialty =
      selectedSpecialty === "all" || doctor.specialtySlug === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  function reset() {
    setSearchTerm("");
    setSelectedSpecialty("all");
  }

  return (
    <div className="space-y-10">
      {/* Filter bar */}
      <Reveal className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
          {/* Search by name */}
          <div className="md:col-span-5">
            <label className="mb-3 block font-sans text-xs font-bold uppercase tracking-widest text-gray-400">
              {t("search.nameLabel")}
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={t("search.namePlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 font-sans text-sm outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/10"
              />
            </div>
          </div>

          {/* Specialty dropdown */}
          <div className="md:col-span-5">
            <label className="mb-3 block font-sans text-xs font-bold uppercase tracking-widest text-gray-400">
              {t("search.specialtyLabel")}
            </label>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 font-sans text-sm outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/10"
              >
                <option value="all">{t("search.allSpecialties")}</option>
                {specialties.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {t(`specialtyNames.${s.slug}`)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Reset */}
          <div className="md:col-span-2">
            <button
              type="button"
              onClick={reset}
              className="h-[52px] w-full rounded-xl bg-navy font-sans font-bold text-white transition-all hover:bg-navy-light"
            >
              {t("search.resetLabel")}
            </button>
          </div>
        </div>
      </Reveal>

      {/* Grid */}
      {filteredDoctors.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} locale={locale} />
          ))}
        </div>
      ) : (
        <Reveal className="rounded-2xl border border-gray-100 py-20 text-center">
          <div className="mb-4 flex justify-center text-gray-200">
            <Search className="h-16 w-16" />
          </div>
          <h3 className="mb-2 font-display text-2xl font-bold text-navy">
            {t("search.noResultsTitle")}
          </h3>
          <p className="font-sans text-gray-500">{t("search.noResultsDesc")}</p>
        </Reveal>
      )}

      {/* Not finding what you need CTA */}
      <Reveal
        as="section"
        className="relative overflow-hidden rounded-[2rem] bg-navy px-10 py-16 text-center text-white md:px-16"
      >
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/5" />
        <div className="relative z-10">
          <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
            {t("search.notFoundTitle")}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl font-sans text-lg text-white/70">
            {t("search.notFoundDesc")}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+59372981574"
              className="flex items-center justify-center gap-2 rounded-xl bg-white px-10 py-4 font-sans font-bold text-navy transition-all hover:bg-gray-100"
            >
              <Phone className="h-5 w-5" />
              {t("search.callReception")}
            </a>
            <a
              href="https://wa.me/59372981574"
              className="flex items-center justify-center gap-3 rounded-xl bg-medical-green px-10 py-4 font-sans font-bold text-white transition-all hover:bg-[#0A7569]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("search.whatsappCentral")}
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
