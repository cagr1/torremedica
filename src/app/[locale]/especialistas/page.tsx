import { getTranslations } from "next-intl/server";

import { DoctorGrid } from "@/components/specialists/DoctorGrid";
import { doctors } from "@/data/doctors";
import { specialties } from "@/data/specialties";

type SpecialistsPageProps = {
  params: {
    locale: string;
  };
};

export default async function SpecialistsPage({
  params: { locale },
}: SpecialistsPageProps) {
  const t = await getTranslations({ locale });

  return (
    <main className="min-h-screen">
      <section className="py-8 lg:py-10">
        <div className="rounded-[2rem] border border-white/70 bg-surface px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            {t("specialists.subtitle")}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {t("specialists.title")}
          </h1>
        </div>

        <section className="py-8 lg:py-10">
          <DoctorGrid
            doctors={doctors}
            specialties={specialties}
            locale={locale}
          />
        </section>
      </section>
    </main>
  );
}
