import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { images, serviceImages } from "@/lib/images";
import { Reveal } from "@/components/reveal";

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const c = cities.find((x) => x.city === city);
  if (!c) return {};
  return {
    title: `${c.name} Restoration Services`,
    description: `Premium restoration and environmental services in ${c.name}. IICRC-certified, insured, and discretion-ready. Est. ${site.founded}.`,
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const c = cities.find((x) => x.city === city);
  if (!c) return notFound();

  return (
    <>
      {/* ── Hero banner ──────────────────────────────── */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden">
        <Image
          src={images.estate1}
          alt={`Restoration services in ${c.name}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/70 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-14">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-accent">
              Service Area
            </p>
            <h1 className="mt-3 font-serif text-[length:var(--h1)] leading-[1.08]">
              Restoration Services in {c.name}
            </h1>
            <p className="mt-5 max-w-3xl text-[length:var(--p)] leading-relaxed text-white/75">
              Salem Steamer delivers premium restoration and environmental
              services to {c.name} and surrounding communities. Every
              engagement follows our IICRC-aligned systems — documented
              outcomes, measurable standards, and discretion-first operations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        {/* ── Services grid with images ──────────────── */}
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-white/55">
            Available Services
          </p>
          <h2 className="mt-3 font-serif text-[length:var(--h2)] leading-tight">
            What We Offer in {c.name}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <Link
                href={`/services/${s.slug}`}
                className="focus-ring group block overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Service image thumbnail */}
                  <div className="relative aspect-[16/10] sm:aspect-auto sm:w-40 shrink-0 overflow-hidden">
                    <Image
                      src={serviceImages[s.slug] ?? images.method}
                      alt={s.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width:640px) 100vw, 160px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 hidden sm:block" />
                  </div>
                  <div className="flex flex-1 items-start justify-between gap-4 p-5">
                    <div>
                      <h3 className="text-lg">{s.name}</h3>
                      <p className="mt-1.5 text-sm text-white/65 leading-relaxed">
                        {s.summary}
                      </p>
                    </div>
                    <span className="mt-1 text-accent transition group-hover:translate-x-1 shrink-0">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* ── Trust strip ────────────────────────────── */}
        <Reveal delay={0.2}>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: "Founded", value: String(site.founded) },
              { label: "IICRC Certified", value: "Yes" },
              { label: "Verified Reviews", value: `${site.reviewsCount}+` },
              { label: "Discretion", value: "Available" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center"
              >
                <p className="font-serif text-2xl text-accent">{stat.value}</p>
                <p className="mt-1 text-xs text-white/55 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── City CTA ───────────────────────────────── */}
        <Reveal delay={0.3}>
          <div className="relative mt-14 overflow-hidden rounded-2xl">
            <Image
              src={images.discretion}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <div className="relative z-10 px-8 py-14 text-center">
              <h2 className="font-serif text-[length:var(--h3)]">
                Serving {c.name} Since {site.founded}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-white/65">
                Premium restoration authority. IICRC certified.{" "}
                {site.reviewsCount}+ verified reviews. Discretion premium
                available.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="focus-ring inline-flex rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Request a Consultation
                </Link>
                <a
                  href="tel:5713443837"
                  className="focus-ring inline-flex rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm transition hover:bg-white/10"
                >
                  Call 24/7
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
