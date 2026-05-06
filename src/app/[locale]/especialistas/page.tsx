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
      <section className="bg-white py-24">
        <div className="container-custom">
          <div className="mb-16">
            <SectionHeader
              tag={t("specialists.directoryTag")}
              title={t("specialists.title")}
              subtitle={t("doctors.description")}
            />
          </div>
          <DoctorGrid doctors={doctors} specialties={specialties} locale={locale} />
        </div>
      </section>
    </main>
  );
}
