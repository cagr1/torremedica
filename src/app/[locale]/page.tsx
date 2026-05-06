import {
  Activity,
  ArrowRight,
  BookOpen,
  CalendarCheck,
  Clock,
  MessageCircle,
  Search,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { SectionHeader } from "@/components/layout/SectionHeader";
import { DoctorGrid } from "@/components/specialists/DoctorGrid";
import { Reveal } from "@/components/ui/Reveal";
import { doctors } from "@/data/doctors";
import { specialties } from "@/data/specialties";
import { Link } from "@/i18n/navigation";

type HomePageProps = {
  params: { locale: string };
};

export default async function HomePage({ params: { locale } }: HomePageProps) {
  const t = await getTranslations({ locale });

  const heroStats = [
    { num: "50+", label: t("home.stats.specialists.label"), sub: t("home.stats.specialists.sub") },
    { num: "2", label: t("home.stats.towers.label"), sub: t("home.stats.towers.sub") },
    { num: "15+", label: t("home.stats.years.label"), sub: t("home.stats.years.sub") },
    { num: "24/7", label: t("home.stats.security.label"), sub: t("home.stats.security.sub") },
  ];

  const facilityFeatures = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: t("home.feature1Title"),
      desc: t("home.feature1Desc"),
    },
    {
      icon: <Activity className="h-5 w-5" />,
      title: t("home.feature2Title"),
      desc: t("home.feature2Desc"),
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: t("home.feature3Title"),
      desc: t("home.feature3Desc"),
    },
  ];

  return (
    <main>
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        {/* Background image + dark navy overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvdz3gpDXs7DPz52WP0VtsKKIfXfs3VQ4AQiQJDKZCSvGbM_tiG3B0Y1ENKasmczaDEnrjEiCjsa2m5twq95ygITb3FN7sg6SHh9hjJ4r1QqQg6oKIET51Bhf_DPZ9Mp1lbWD1pJk8pcG3DIacZZPVvKAqtYmAVaRTf5X1DGiZbVwyQJQl4gcJB21-C5Dl2_TMllhFdoG774xcfExs_9nzGlYmxj5tWDHS1QuO9drkUdzM4iA9JkRdG26DQ478owF0jzCXh6Iaqrbz"
            alt="Torre Medica La Carolina"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/72 to-navy/40" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-navy to-transparent" />
        </div>

        {/* Main content — vertically centered, text directly on overlay */}
        <div className="relative z-10 flex flex-1 items-center">
          <div className="container-custom w-full py-20">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <Reveal className="mb-8 flex items-center gap-3">
                <div className="h-px w-10 bg-gold" />
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                  {t("hero.eyebrow")}
                </span>
              </Reveal>

              {/* Headline */}
              <Reveal
                as="h1"
                delay="1"
                className="mb-8 font-display text-6xl font-bold leading-[1.0] tracking-tight text-white md:text-7xl lg:text-[5.5rem]"
              >
                Torre Médica
                <br />
                <em className="text-gold-light">La Carolina</em>
              </Reveal>

              <Reveal
                as="p"
                delay="2"
                className="mb-12 max-w-xl font-sans text-xl font-light leading-relaxed text-white/90"
              >
                {t("hero.description")}
              </Reveal>

              <Reveal delay="2" className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/especialistas"
                  className="rounded-xl bg-white px-10 py-4 text-center font-sans text-sm font-semibold uppercase tracking-[0.1em] text-navy transition-all duration-200 hover:bg-gold hover:text-white"
                >
                  {t("hero.primaryCta")}
                </Link>
                <a
                  href="https://wa.me/59372981574"
                  className="flex items-center justify-center gap-3 rounded-xl border border-white/30 px-10 py-4 font-sans text-sm font-semibold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:border-gold hover:bg-gold hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 fill-white" />
                  {t("hero.secondaryCta")}
                </a>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Stats bar — dark glassmorphism style */}
        <div className="relative z-10 border-t border-white/10 bg-white/8 backdrop-blur-sm">
          <div className="container-custom py-7">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={index < 3 ? "md:border-r md:border-white/15 md:pr-8" : ""}
                >
                  <div className="mb-1 font-display text-3xl font-bold leading-none text-gold-light">
                    {stat.num}
                  </div>
                  <div className="font-sans text-sm font-medium text-white">{stat.label}</div>
                  <div className="mt-0.5 font-sans text-xs text-white/40">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-32" id="how-to">
        <div className="container-custom">
          <SectionHeader
            tag={t("home.howtoTag")}
            title={t("howto.title")}
            subtitle={t("home.howtoSubtitle")}
            centered
          />

          <div className="relative mt-20 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
            {/* Connector line desktop */}
            <div className="absolute left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] top-10 z-0 hidden h-px border-t border-dashed border-gold/40 md:block" />

            {[
              {
                step: "01",
                icon: <Search className="h-7 w-7" />,
                title: t("howto.step1Title"),
                desc: t("howto.step1Desc"),
              },
              {
                step: "02",
                icon: <MessageCircle className="h-7 w-7" />,
                title: t("howto.step2Title"),
                desc: t("howto.step2Desc"),
              },
              {
                step: "03",
                icon: <CalendarCheck className="h-7 w-7" />,
                title: t("howto.step3Title"),
                desc: t("howto.step3Desc"),
              },
            ].map((item) => (
              <Reveal
                key={item.step}
                className="group relative z-10 flex flex-col items-center px-8 text-center md:items-center"
              >
                <div className="relative mb-10">
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-navy bg-white text-navy shadow-sm transition-all duration-300 group-hover:bg-navy group-hover:text-white group-hover:shadow-lg">
                    {item.icon}
                  </div>
                  {/* Step badge */}
                  <span className="absolute -right-3 -top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gold font-sans text-[11px] font-bold text-white shadow-md">
                    {item.step}
                  </span>
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-navy">{item.title}</h3>
                <p className="font-sans text-sm font-light leading-relaxed text-on-surface-variant">
                  {item.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-32">
        <div className="container-custom">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              tag={t("home.doctorsTag")}
              title={t("doctors.title")}
              subtitle={t("doctors.description")}
            />
            <Link
              href="/especialistas"
              className="mb-12 hidden items-center gap-2 whitespace-nowrap rounded-xl border border-navy px-5 py-3 font-sans text-sm font-semibold text-navy transition-all hover:border-gold hover:text-gold md:inline-flex"
            >
              {t("home.viewAllSpecialists")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <DoctorGrid doctors={doctors.slice(0, 3)} specialties={specialties} locale={locale} />

          <Reveal className="mt-12 text-center md:hidden">
            <Link
              href="/especialistas"
              className="inline-flex items-center gap-2 rounded-xl border border-navy px-5 py-3 font-sans text-sm font-semibold text-navy transition-all hover:border-gold hover:text-gold"
            >
              {t("home.viewAllSpecialists")} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-32 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <div>
              <Reveal
                as="span"
                className="mb-6 block font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold"
              >
                {t("home.facilitiesTag")}
              </Reveal>
              <Reveal
                as="h2"
                delay="1"
                className="mb-8 font-display text-4xl font-bold leading-tight text-white md:text-5xl"
              >
                {t("home.facilitiesTitle")} <em className="text-gold-light">{t("home.facilitiesAccent")}</em>
              </Reveal>
              <Reveal
                as="p"
                delay="2"
                className="mb-12 font-sans text-lg font-light leading-relaxed text-white"
              >
                {t("home.facilitiesDescription")}
              </Reveal>
              <div className="mb-12 space-y-8">
                {facilityFeatures.map((feature, index) => (
                  <Reveal key={feature.title} delay={index === 0 ? "none" : index === 1 ? "1" : "2"}>
                    <div className="group flex gap-5">
                      <div className="w-px shrink-0 bg-gold/30 transition-colors duration-300 group-hover:bg-gold" />
                      <div>
                        <div className="mb-1.5 text-gold">{feature.icon}</div>
                        <h4 className="mb-1.5 font-display text-lg font-bold text-white">{feature.title}</h4>
                        <p className="font-sans text-sm font-light leading-relaxed text-white">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <Link
                  href="/torres"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:border-gold hover:bg-gold hover:text-white"
                >
                  {t("home.exploreTowers")} <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>

            <Reveal className="relative">
              <div className="hover-image-zoom relative rounded-[28px]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFaLHS7tcsstFlmTAfV4wB_YRpkXoJP5h0viowbBYsoFSIMvaZxv83p2CgdOpvxmIJ6m6aYg9_K3etUEH_3Ya4xcXj_yZ8BKBvgIUm2WGCJgxtLeK8CojV84HjARsE-S3jrud5gL64SR-wUznydU1laUIY2JNhJ5Ue8L-_KLCJfyPAAk3i_AHFVVklZtP6nkIfA1LYyt2Q-OLWUFXi0kQ2FKDR6WTbXNa30XO98jgKhrA6DukjHIyOa7QVG5HJArU7ONmtGONBKV24"
                  alt={t("home.facilitiesImageAlt")}
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-5 rounded-[22px] border border-gold/25" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-32">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-[28px] bg-navy px-12 py-20 text-center text-white md:px-24">
            <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-gold/5" />
            <div className="relative z-10">
              <Reveal
                as="span"
                className="mb-6 block font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold"
              >
                {t("home.ctaEyebrow")}
              </Reveal>
              <Reveal
                as="h2"
                delay="1"
                className="mx-auto mb-8 max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
              >
                {t("home.ctaTitle")}
              </Reveal>
              <Reveal
                as="p"
                delay="2"
                className="mx-auto mb-12 max-w-2xl font-sans text-lg font-light leading-relaxed text-white"
              >
                {t("home.ctaDescription")}
              </Reveal>
              <Reveal className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/especialistas"
                  className="rounded-xl bg-gold px-12 py-5 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-200 hover:bg-gold-light"
                >
                  {t("home.ctaPrimary")}
                </Link>
                <a
                  href="https://wa.me/59372981574"
                  className="flex items-center justify-center gap-3 rounded-xl border border-white/25 px-12 py-5 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:border-gold hover:bg-gold hover:text-white"
                >
                  <MessageCircle className="h-5 w-5 fill-white" />
                  {t("home.ctaSecondary")}
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
