import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/services";
import { images, serviceImages } from "@/lib/images";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Restoration and environmental services delivered under disciplined systems and measurable standards.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero banner ─────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src={images.estate1}
            alt="Premium property exterior"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-accent">
              What We Do
            </p>
            <h1 className="mt-3 font-serif text-[length:var(--h1)] leading-[1.08]">
              Our Services
            </h1>
            <p className="mt-4 max-w-2xl text-white/70">
              Restoration and environmental services delivered under disciplined
              systems and measurable standards.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Services grid with images ───────────── */}
      <section className="border-b border-white/8 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04}>
                <Link
                  href={`/services/${s.slug}`}
                  className="focus-ring group relative block overflow-hidden rounded-xl border border-white/10 transition hover:border-white/20"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={serviceImages[s.slug] || images.method}
                      alt={s.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                    <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/30 text-sm text-accent opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                      →
                    </div>
                  </div>
                  <div className="bg-white/3 p-5">
                    <h2 className="font-medium">{s.name}</h2>
                    <p className="mt-1.5 text-sm text-white/60">{s.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <div className="rounded-xl border border-white/10 bg-white/3 p-8 text-center">
            <h2 className="font-serif text-[length:var(--h3)]">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-white/65">
              Describe your situation and we&apos;ll identify the right service
              pathway — no obligation, no pressure.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="focus-ring inline-flex rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:opacity-90"
              >
                Request a Consultation
              </Link>
              <a
                href="tel:5713443837"
                className="focus-ring inline-flex rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-sm transition hover:bg-white/10"
              >
                Call 24/7
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
