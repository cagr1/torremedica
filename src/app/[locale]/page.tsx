import { CalendarCheck, MessageCircle, Search } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { DoctorGrid } from "@/components/specialists/DoctorGrid";
import { doctors } from "@/data/doctors";
import { specialties } from "@/data/specialties";
import { Link } from "@/i18n/navigation";

type HomePageProps = {
  params: {
    locale: string;
  };
};

export default async function HomePage({
  params: { locale },
}: HomePageProps) {
  const t = await getTranslations({ locale });

  const howToSteps = [
    {
      number: "1",
      title: t("howto.step1Title"),
      description: t("howto.step1Desc"),
      icon: Search,
    },
    {
      number: "2",
      title: t("howto.step2Title"),
      description: t("howto.step2Desc"),
      icon: MessageCircle,
    },
    {
      number: "3",
      title: t("howto.step3Title"),
      description: t("howto.step3Desc"),
      icon: CalendarCheck,
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="py-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-primary via-blue-600 to-cyan-500 px-6 py-8 text-white shadow-[0_32px_100px_rgba(29,78,216,0.35)] sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
              {t("hero.eyebrow")}
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50 sm:text-lg">
              {t("hero.description")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#doctors"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-blue-50"
              >
                {t("hero.primaryCta")}
              </a>
              <a
                href="#how-to"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {t("hero.secondaryCta")}
              </a>
            </div>
          </div>

          <aside className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[t("hero.statDoctors"), t("hero.statSpecialties"), t("hero.statLocale")].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-white/90 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                    Torre Medica
                  </p>
                  <p className="mt-3 text-xl font-semibold text-slate-900">
                    {item}
                  </p>
                </div>
              ),
            )}
          </aside>
        </div>
      </section>

      <section id="how-to" className="py-10">
        <div className="rounded-[2rem] bg-blue-50/60 p-8">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            {t("howto.title")}
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {howToSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-base font-semibold text-white">
                      {step.number}
                    </div>
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="specialties" className="py-4">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              {t("specialties.title")}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              {t("specialties.description")}
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((specialty) => (
            <article
              key={specialty.slug}
              className="rounded-[1.5rem] border border-slate-200/80 bg-white/90 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                {specialty.slug.replace("-", " ")}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {specialty.name}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section id="doctors" className="py-10">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            {t("doctors.title")}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            {t("doctors.description")}
          </p>
        </div>

        <DoctorGrid
          doctors={doctors.slice(0, 6)}
          specialties={specialties}
          locale={locale}
        />

        <div className="mt-6">
          <Link
            href="/especialistas"
            className="text-sm font-semibold text-primary underline decoration-2 underline-offset-4 transition hover:text-primary-dark"
          >
            Ver todos los especialistas →
          </Link>
        </div>
      </section>

      <footer className="rounded-[2rem] border border-slate-200/80 bg-white/85 px-6 py-6 text-sm text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
        <p className="font-semibold text-slate-900">{t("nav.brand")}</p>
        <p className="mt-2">{t("footer.address")}</p>
        <p>{t("footer.phone")}</p>
      </footer>
    </main>
  );
}
