import { ExternalLink, Star } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { TowerCard } from "@/components/towers/TowerCard";
import { googleReviews } from "@/data/googleReviews";
import { doctors } from "@/data/doctors";
import { towers } from "@/data/towers";

type TowersPageProps = {
  params: { locale: string };
};

export default async function TowersPage({ params: { locale } }: TowersPageProps) {
  const t = await getTranslations({ locale });
  const mapsUrl = towers[0].mapsUrl;
  type TowerDetailKey = "torre-1" | "torre-2";
  type ReviewKey = "review-1" | "review-2" | "review-3";

  const towerDetails = {
    "torre-1": {
      floors: t("towers.torre-1.floors"),
      schedule: t("towers.torre-1.schedule"),
      note: t("towers.torre-1.locationNote"),
    },
    "torre-2": {
      floors: t("towers.torre-2.floors"),
      schedule: t("towers.torre-2.schedule"),
      note: t("towers.torre-2.locationNote"),
    },
  } as const;

  const reviewQuotes = {
    "review-1": t("towers.reviewQuotes.review-1"),
    "review-2": t("towers.reviewQuotes.review-2"),
    "review-3": t("towers.reviewQuotes.review-3"),
  } as const;

  return (
    <main>
      <section className="bg-navy py-24">
        <div className="container-custom">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-gold" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
              {t("towers.subtitle")}
            </span>
          </div>
          <h1 className="max-w-2xl font-display text-5xl font-bold leading-tight text-white md:text-6xl">
            {t("towers.title")}
          </h1>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-custom">
          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {towers.map((tower) => (
              (() => {
                const towerKey = tower.id as TowerDetailKey;

                return (
              <TowerCard
                key={tower.id}
                tower={tower}
                doctorCount={doctors.filter((doctor) => doctor.tower === tower.number).length}
                cardTag={t("towers.cardTag")}
                specialistsLabel={t("nav.specialists")}
                floorsLabel={towerDetails[towerKey].floors}
                scheduleLabel={towerDetails[towerKey].schedule}
                locationNote={towerDetails[towerKey].note}
                viewOnMapsLabel={t("towers.viewOnMaps")}
              />
                );
              })()
            ))}
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-[20px] border border-gray-100 bg-white">
              <iframe
                src={towers[0].mapUrl}
                className="h-80 w-full"
                loading="lazy"
                title={towers[0].name}
              />
              <div className="space-y-4 p-6">
                <div>
                  <h2 className="font-display text-3xl font-bold text-navy">
                    {t("towers.mapTitle")}
                  </h2>
                  <p className="mt-3 font-sans text-sm leading-6 text-on-surface-variant">
                    {t("towers.mapDescription")}
                  </p>
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all hover:bg-navy-light"
                >
                  {t("towers.openMaps")}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[20px] border border-gray-100 bg-white p-8">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px w-8 bg-gold" />
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                  {t("towers.reviewsEyebrow")}
                </span>
              </div>
              <h2 className="font-display text-3xl font-bold text-navy">
                {t("towers.reviewsTitle")}
              </h2>
              <p className="mt-3 font-sans text-sm leading-6 text-on-surface-variant">
                {t("towers.reviewsDescription")}
              </p>

              <div className="mt-8 space-y-4">
                {googleReviews.map((review) => (
                  (() => {
                    const reviewKey = review.id as ReviewKey;

                    return (
                  <article key={review.id} className="rounded-[16px] border border-gold/20 bg-gold-pale/40 p-5">
                    <div className="mb-3 flex items-center gap-1 text-gold">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={`${review.id}-${index}`} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="font-display text-xl text-navy">
                      &ldquo;{reviewQuotes[reviewKey]}&rdquo;
                    </p>
                    <p className="mt-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-on-surface-variant">
                      {review.author}
                    </p>
                  </article>
                    );
                  })()
                ))}
              </div>

              <a
                href="https://www.google.com/maps/place/Torre+Medica+La+Carolina/@-3.2641216,-79.9466204,17z/data=!4m8!3m7!1s0x90330e40d00ed0ff:0xfbf68c91a2b33f09!8m2!3d-3.264127!4d-79.9440455!9m1!1b1!16s%2Fg%2F11bzzp3sfk?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-navy px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-navy transition-all hover:bg-navy hover:text-white"
              >
                {t("towers.viewReviews")}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
