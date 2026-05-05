import { getTranslations } from "next-intl/server";

import { SectionHeader } from "@/components/layout/SectionHeader";
import { DoctorGrid } from "@/components/specialists/DoctorGrid";
import { doctors } from "@/data/doctors";
import { specialties } from "@/data/specialties";

type SpecialistsPageProps = {
  params: { locale: string };
};

export default async function SpecialistsPage({
  params: { locale },
}: SpecialistsPageProps) {
  const t = await getTranslations({ locale });

  return (
    <main>
      <section className="bg-navy py-24">
        <div className="container-custom">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-gold" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
              {t("specialists.subtitle")}
            </span>
          </div>
          <h1 className="max-w-2xl font-display text-5xl font-bold leading-tight text-white md:text-6xl">
            {t("specialists.title")}
          </h1>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-custom">
          <SectionHeader
            tag={t("specialists.directoryTag")}
            title={t("doctors.title")}
            subtitle={t("doctors.description")}
          />
          <div className="mt-12">
            <DoctorGrid doctors={doctors} specialties={specialties} locale={locale} />
          </div>
        </div>
      </section>
    </main>
  );
}
