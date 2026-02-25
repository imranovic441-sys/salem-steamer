import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { images, serviceImages } from "@/lib/images";
import { Reveal } from "@/components/reveal";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.name,
    description: s.summary,
  };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return notFound();

  const heroImage = serviceImages[s.slug] || images.method;

  return (
    <>
      {/* ── Hero banner with service image ──────── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={s.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-accent">
              Service
            </p>
            <h1 className="mt-3 max-w-3xl font-serif text-[length:var(--h1)] leading-[1.08]">
              {s.name}
            </h1>
            <p className="mt-4 max-w-2xl text-[length:var(--p)] leading-relaxed text-white/75">
              {s.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Content grid ────────────────────────── */}
      <section className="border-b border-white/8 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Protocol highlights */}
            <Reveal>
              <div className="rounded-xl border border-white/10 bg-white/3 p-6">
                <h2 className="text-lg font-medium">Protocol Highlights</h2>
                <div className="mt-5 grid gap-4">
                  {[
                    {
                      step: "01",
                      text: "Precision assessment — mapping, moisture, risk factors",
                    },
                    {
                      step: "02",
                      text: "Controlled process aligned to recognized standards",
                    },
                    {
                      step: "03",
                      text: "Documentation checkpoints and third-party verification",
                    },
                    {
                      step: "04",
                      text: "Client assurance: clear scope, communication, closure",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex items-start gap-3 rounded-lg border border-white/6 bg-white/2 p-3"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-accent/20 bg-accent/10 text-xs text-accent">
                        {item.step}
                      </span>
                      <p className="text-sm text-white/70">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* CTA + image */}
            <div className="flex flex-col gap-5">
              <Reveal delay={0.1}>
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                  <Image
                    src={images.estate2}
                    alt="Premium restoration result"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="rounded-xl border border-white/10 bg-black/30 p-6">
                  <h2 className="text-lg font-medium">
                    Request a Consultation
                  </h2>
                  <p className="mt-2 text-sm text-white/65">
                    For urgent situations, call 24/7. For planned work, request
                    a consultation and we&apos;ll define the scope together.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="focus-ring inline-flex rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                    >
                      Request Consultation
                    </Link>
                    <a
                      href="tel:5713443837"
                      className="focus-ring inline-flex rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm transition hover:bg-white/10"
                    >
                      Call 24/7
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to expect ──────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-accent">
            Process
          </p>
          <h2 className="mt-3 font-serif text-[length:var(--h2)]">
            What to Expect
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Assessment",
              desc: "Structured evaluation of materials, moisture, and risk.",
            },
            {
              step: "02",
              title: "Controlled Work",
              desc: "IICRC-aligned procedures with calibrated equipment.",
            },
            {
              step: "03",
              title: "Verification",
              desc: "Documentation, readings, and third-party validation.",
            },
            {
              step: "04",
              title: "Assurance",
              desc: "Clear communication and satisfaction confirmation.",
            },
          ].map((item, i) => (
            <Reveal key={item.step} delay={i * 0.06}>
              <div className="rounded-xl border border-white/10 bg-white/3 p-5 transition hover:border-white/18 hover:bg-white/5">
                <p className="text-xs uppercase tracking-[0.22em] text-accent">
                  {item.step}
                </p>
                <h3 className="mt-2 text-sm font-medium">{item.title}</h3>
                <p className="mt-1.5 text-sm text-white/55">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
