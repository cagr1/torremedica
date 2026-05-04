import { getTranslations } from "next-intl/server";

import { TowerCard } from "@/components/towers/TowerCard";
import { doctors } from "@/data/doctors";
import { towers } from "@/data/towers";

type TowersPageProps = {
  params: {
    locale: string;
  };
};

export default async function TowersPage({
  params: { locale },
}: TowersPageProps) {
  const t = await getTranslations({ locale });

  return (
    <main className="min-h-screen">
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 pt-5 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/70 bg-surface px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            {t("towers.subtitle")}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {t("towers.title")}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 py-8 lg:grid-cols-2">
          {towers.map((tower) => (
            <TowerCard
              key={tower.id}
              tower={tower}
              doctorCount={
                doctors.filter((doctor) => doctor.tower === tower.number).length
              }
            />
          ))}
        </div>

        <div className="w-full overflow-hidden rounded-[1.5rem] border border-slate-200">
          <iframe
            src={towers[0].mapUrl}
            className="h-64 w-full"
            loading="lazy"
            title={towers[0].name}
          />
        </div>
      </section>
    </main>
  );
}
