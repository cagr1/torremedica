import { ArrowLeft, Clock, Globe, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { Link } from "@/i18n/navigation";
import { doctors } from "@/data/doctors";

type ProfilePageProps = {
  params: { locale: string; slug: string };
};

export default async function DoctorProfilePage({ params: { locale, slug } }: ProfilePageProps) {
  const t = await getTranslations({ locale });
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) notFound();

  const specialtyLabel = t(`specialtyNames.${doctor.specialtySlug}`);

  return (
    <main className="py-12 md:py-20">
      <div className="container-custom">
        {/* Back link */}
        <Link
          href="/especialistas"
          className="group mb-10 inline-flex items-center gap-2 font-sans font-bold text-navy transition-all hover:gap-3 hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {t("profile.backToSpecialists")}
        </Link>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* ── Main content ─────────────────────────────────── */}
          <div className="lg:col-span-8">
            {/* Header: photo + name */}
            <div className="mb-16 flex flex-col items-start gap-10 md:flex-row">
              <div className="w-full shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-xl md:w-72 md:aspect-[4/5]">
                <img
                  src={doctor.photoUrl}
                  alt={doctor.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-1">
                <span className="mb-4 inline-block rounded-full bg-medical-green/10 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-widest text-medical-green">
                  {specialtyLabel}
                </span>
                <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
                  {doctor.name}
                </h1>
                <p className="mb-8 max-w-xl font-sans text-xl leading-relaxed text-gray-500">
                  {doctor.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-navy/5 px-4 py-2 font-sans text-sm font-bold text-navy">
                    <ShieldCheck className="h-4 w-4" />
                    {t("profile.certifiedSpecialist")}
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-navy/5 px-4 py-2 font-sans text-sm font-bold text-navy">
                    <Globe className="h-4 w-4" />
                    {doctor.languages.map((l) => l.toUpperCase()).join(" | ")}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <section className="mb-12">
              <h2 className="mb-6 font-display text-2xl font-bold text-navy">
                {t("profile.experience")}
              </h2>
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
                <p className="font-sans text-lg leading-relaxed text-gray-600">
                  {doctor.experience}
                </p>
              </div>
            </section>
          </div>

          {/* ── Sidebar ──────────────────────────────────────── */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Contact card */}
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
                <h3 className="mb-2 font-display text-2xl font-bold text-navy">
                  {t("profile.contact")}
                </h3>
                <p className="mb-8 font-sans text-sm text-gray-500">
                  {t("profile.contactDesc")}
                </p>

                <a
                  href={doctor.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-medical-green py-4 font-sans font-bold text-white shadow-md transition-all hover:bg-[#0A7569]"
                >
                  <MessageCircle className="h-6 w-6 fill-white" />
                  {t("profile.bookWhatsApp")}
                </a>

                <div className="mt-8 space-y-6 border-t border-gray-100 pt-8">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-navy/5 p-2.5 text-navy">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-sans text-[10px] font-black uppercase tracking-widest text-gray-400">
                        {t("profile.officeLocation")}
                      </h4>
                      <p className="font-sans text-sm font-medium leading-tight text-gray-700">
                        Torre {doctor.tower} · {doctor.floor} · {doctor.office}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-navy/5 p-2.5 text-navy">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-sans text-[10px] font-black uppercase tracking-widest text-gray-400">
                        {t("profile.visitingHours")}
                      </h4>
                      <p className="font-sans text-sm font-medium leading-tight text-gray-700">
                        {doctor.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map mini card */}
              <div className="group relative h-40 overflow-hidden rounded-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWYUVz7I8VvNB1A74Bk5qZX5aATEITz54g9W8jWcn08pvJMrvgGpaEFj8WFOYYWmUndtbN32hGbdGQOGghi9hSLfP8hACJUfn9BaV01HaLIkG4MyI5ikClsqF1yg5-AasHiSsA0bG1eZHaJodzuojcCmfjC7zgAww6V3z1HwxMH8Ojpm1774mfCVe68uta2M1ICynZRmw5YnSZnnO4W4SdVtmQ9QDkTxfFu78W_9xrzXprIaAv3-zMbxO4_vMcGgvMlB-0prCCDtQL"
                  alt="Ubicación"
                  className="h-full w-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="animate-bounce rounded-full bg-navy p-2 shadow-lg text-white">
                    <MapPin className="h-5 w-5 fill-white" />
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Torre+Medica+La+Carolina+Machala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/90 px-3 py-1.5 text-center backdrop-blur-sm shadow-sm"
                >
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-navy">
                    {t("profile.openMaps")}
                  </span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
