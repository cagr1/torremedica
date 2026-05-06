import {
  Building2,
  CarFront,
  CheckCircle2,
  ExternalLink,
  MapPinned,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/ui/Reveal";
import { doctors } from "@/data/doctors";
import { towers } from "@/data/towers";

type TowersPageProps = {
  params: { locale: string };
};

const towerImages = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQzeFaW_FvOFcGvq9g-QBpQyy7hIhbiWe43tDYKsP-9QZdKDcR-1AF9tbWBCbSHObV16ani4exGrlsOg2T2np-D17Z6DXPCGtIPhwi69s04KYrYnV3k5fYnFx7-4rsj__07OTGEntHJ6Z9UBe9K4KgGQWeggoqgqAc4eAxvl4-uM6BQ3Fi1WVxOhgFWWzT6sF3tWn-KIW8bCuerM-AKqlWggB_GNpKHFDVbXVoLIjqQEt9oWAZUdFR9kRskF8orewnoATxIw4rP8OB",
  tower1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXlLY_EbRebCZCLbqkbpUJx2vIIpa9WHWSHU_L3tvC9hqloMu_p0drhVu4YoHSEvHsUf6mNxCx_UF83ENqWsZdUqHEMsVkhw8zdEkgi4DaJDHNUrSBAXME3MzSgZbdACLEqMSOLSqpucqakR8lUZn1BJVD0O-I5mUOv_RfyRIXefZUsm3AEDUZhg29THCGA8MqwqF6WHUw2SD-TbK9Fv8PXx2dbi_3ytrNlScb5OQQsY3ODFw2KB1as2gixalqWyiegc4bGsoGvd-S",
  tower2: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvdz3gpDXs7DPz52WP0VtsKKIfXfs3VQ4AQiQJDKZCSvGbM_tiG3B0Y1ENKasmczaDEnrjEiCjsa2m5twq95ygITb3FN7sg6SHh9hjJ4r1QqQg6oKIET51Bhf_DPZ9Mp1lbWD1pJk8pcG3DIacZZPVvKAqtYmAVaRTf5X1DGiZbVwyQJQl4gcJB21-C5Dl2_TMllhFdoG774xcfExs_9nzGlYmxj5tWDHS1QuO9drkUdzM4iA9JkRdG26DQ478owF0jzCXh6Iaqrbz",
} as const;

export default async function TowersPage({ params: { locale } }: TowersPageProps) {
  const t = await getTranslations({ locale });
  const mapsUrl = towers[0].mapsUrl;
  type TowerDetailKey = "torre-1" | "torre-2";

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

  return (
    <main>
      <section className="relative flex h-[420px] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={towerImages.hero}
            alt={t("towers.title")}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/55" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <Reveal
              as="h1"
              className="font-display text-5xl font-bold leading-tight text-white md:text-6xl"
            >
              {t("towers.title")}
            </Reveal>
            <Reveal
              as="p"
              delay="1"
              className="mt-5 max-w-2xl font-sans text-lg leading-8 text-white/90"
            >
              {t("towers.heroDescription")}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.08)] lg:col-span-7">
              <div className="h-72 overflow-hidden">
                <img
                  src={towerImages.tower1}
                  alt={towers[0].name}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <h2 className="font-display text-3xl font-bold text-navy">{towers[0].name}</h2>
                  <span className="inline-flex w-fit rounded-full bg-emerald-100 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">
                    {t("towers.statusOperational")}
                  </span>
                </div>
                <p className="mb-8 max-w-2xl font-sans text-base leading-7 text-on-surface-variant">
                  {t("towers.tower1Description")}
                </p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <Building2 className="mt-0.5 h-5 w-5 text-navy" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-navy">
                        {towerDetails["torre-1"].floors}
                      </p>
                      <p className="mt-1 font-sans text-xs text-on-surface-variant">
                        {t("towers.tower1Feature1")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-navy" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-navy">
                        {t("towers.tower1Feature2")}
                      </p>
                      <p className="mt-1 font-sans text-xs text-on-surface-variant">
                        {towerDetails["torre-1"].schedule}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <div className="flex flex-col gap-8 lg:col-span-5">
              <article className="group overflow-hidden rounded-[28px] bg-navy text-white shadow-[0_18px_40px_rgba(15,23,42,0.16)]">
                <div className="h-44 overflow-hidden">
                  <img
                    src={towerImages.tower2}
                    alt={towers[1].name}
                    className="h-full w-full object-cover opacity-70 transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-display text-2xl font-bold">{towers[1].name}</h3>
                    <span className="inline-flex w-fit rounded-full border border-white/20 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
                      {t("towers.statusExpansion")}
                    </span>
                  </div>
                  <p className="font-sans text-sm leading-7 text-white/80">
                    {t("towers.tower2Description")}
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/15 pb-2 text-sm">
                      <span>{t("towers.statSpecialists")}</span>
                      <span className="font-bold">
                        {doctors.filter((doctor) => doctor.tower === 2).length}+
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/15 pb-2 text-sm">
                      <span>{t("towers.statFloors")}</span>
                      <span className="font-bold">{towerDetails["torre-2"].floors}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/15 pb-2 text-sm">
                      <span>{t("towers.statAccess")}</span>
                      <span className="font-bold">{t("towers.statAccessValue")}</span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-8">
                <h3 className="mb-5 font-display text-2xl font-bold text-navy">
                  {t("towers.amenitiesTitle")}
                </h3>
                <ul className="space-y-4">
                  {["amenity1", "amenity2", "amenity3"].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-sans text-sm text-on-surface-variant"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-medical-green" />
                      <span>{t(`towers.${item}`)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.08)]">
            <div className="relative">
              <iframe
                src={towers[0].mapUrl}
                className="h-[460px] w-full"
                loading="lazy"
                title={towers[0].name}
              />
              <div className="absolute bottom-6 left-6 right-6 flex justify-start">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg transition-all hover:bg-navy-light"
                >
                  {t("towers.directions")}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="border-t border-slate-100 px-6 py-5">
              <p className="max-w-3xl font-sans text-sm leading-7 text-on-surface-variant">
                {t("towers.locationDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="font-display text-4xl font-bold text-navy">
                {t("towers.hoursTitle")}
              </h2>
              <p className="mt-5 max-w-2xl font-sans text-base leading-7 text-on-surface-variant">
                {t("towers.hoursDescription")}
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 py-3">
                  <span className="font-sans text-sm font-semibold text-navy">
                    {t("towers.hoursWeekdaysLabel")}
                  </span>
                  <span className="font-sans text-sm font-bold text-navy">
                    {t("towers.hoursWeekdaysValue")}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 py-3">
                  <span className="font-sans text-sm font-semibold text-navy">
                    {t("towers.hoursSaturdayLabel")}
                  </span>
                  <span className="font-sans text-sm font-bold text-navy">
                    {t("towers.hoursSaturdayValue")}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 py-3">
                  <span className="font-sans text-sm font-semibold text-red-700">
                    {t("towers.hoursEmergencyLabel")}
                  </span>
                  <span className="font-sans text-sm font-bold text-red-700">
                    {t("towers.hoursEmergencyValue")}
                  </span>
                </div>
              </div>
              <a
                href="https://wa.me/59372981574"
                className="mt-10 inline-flex items-center gap-3 rounded-xl bg-medical-green px-8 py-4 font-sans text-sm font-semibold text-white transition-all hover:bg-[#0A7569]"
              >
                <MessageCircle className="h-5 w-5 fill-white" />
                {t("towers.hoursWhatsapp")}
              </a>
            </div>

            <article className="self-center rounded-[24px] border border-slate-200 bg-white p-7">
              <h3 className="font-display text-2xl font-bold text-navy">
                {t("towers.visitorInfoTitle")}
              </h3>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-4">
                  <div className="shrink-0 self-start rounded-lg bg-slate-100 p-2">
                    <CarFront className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-navy">
                      {t("towers.visitorParkingTitle")}
                    </p>
                    <p className="mt-1 font-sans text-sm leading-6 text-on-surface-variant">
                      {t("towers.visitorParkingDescription")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="shrink-0 self-start rounded-lg bg-slate-100 p-2">
                    <MapPinned className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-navy">
                      {t("towers.visitorInfoDeskTitle")}
                    </p>
                    <p className="mt-1 font-sans text-sm leading-6 text-on-surface-variant">
                      {t("towers.visitorInfoDeskDescription")}
                    </p>
                  </div>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
