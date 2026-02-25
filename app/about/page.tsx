import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { images } from "@/lib/images";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description: `${site.legalName} — premium restoration authority serving McLean and the DC metro since ${site.founded}.`,
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero banner ─────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src={images.about}
            alt="Luxury architectural detail"
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
              Who We Are
            </p>
            <h1 className="mt-3 max-w-3xl font-serif text-[length:var(--h1)] leading-[1.08]">
              Built on Systems. Proven by Results.
            </h1>
            <p className="mt-5 max-w-2xl text-[length:var(--p)] leading-relaxed text-white/75">
              Since {site.founded}, Salem Steamer has served McLean and the
              greater Washington, DC metropolitan area with disciplined,
              system-governed restoration and environmental services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Story + image ───────────────────────── */}
      <section className="border-b border-white/8 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={images.estate2}
                  alt="Premium interior restoration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="text-sm leading-relaxed text-white/70">
                  Our work is grounded in IICRC standards, documented outcomes,
                  and a client-first ethos that treats every property — from
                  historic estates to modern condominiums — with precision and
                  respect.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  We don&apos;t cut corners. We don&apos;t guess. Every project
                  follows defined protocols with calibrated equipment, verified
                  measurements, and third-party proof of completion.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="font-serif text-2xl text-accent">
                      {site.founded}
                    </p>
                    <p className="mt-1 text-xs text-white/55">Founded</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="font-serif text-2xl text-accent">
                      {site.reviewsCount}+
                    </p>
                    <p className="mt-1 text-xs text-white/55">
                      Verified Reviews
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Values grid ─────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-accent">
            Our Principles
          </p>
          <h2 className="mt-3 font-serif text-[length:var(--h2)]">
            What Governs Our Work
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Standards-Driven Execution",
              body: "Every project follows IICRC-aligned protocols with calibrated equipment, defined checkpoints, and measurable verification — not guesswork.",
              icon: "◈",
            },
            {
              title: "Discretion as a Default",
              body: "We serve high-profile clients, sensitive environments, and privacy-conscious homeowners. Unmarked vehicles, sealed records, and NDAs are available on request.",
              icon: "◇",
            },
            {
              title: "Public Adjuster — At Our Cost",
              body: "Complex insurance situations deserve an advocate. We provide a licensed public adjuster, paid by us, to protect your interests during the claims process.",
              icon: "△",
            },
            {
              title: "Third-Party Verification",
              body: "Post-remediation lab reports from independent laboratories confirm your environment meets safety standards — not just our word, but certified proof.",
              icon: "○",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="group flex h-full gap-4 rounded-xl border border-white/10 bg-white/3 p-6 transition hover:border-white/18 hover:bg-white/5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-lg text-accent">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Operating history ───────────────────── */}
      <section className="border-t border-white/8 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <div className="rounded-xl border border-white/10 bg-white/3 p-8">
              <h2 className="font-serif text-[length:var(--h3)]">
                Operating History
              </h2>
              <div className="mt-6 grid gap-3 text-sm text-white/70">
                {[
                  ["Founded", String(site.founded)],
                  ["Primary Service Area", "McLean & DC Metro"],
                  ["Standards Alignment", "IICRC Certified"],
                  ["Verified Client Reviews", `${site.reviewsCount}+`],
                  ["Insurance & Licensing", "Fully Compliant"],
                ].map(([label, value], i) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between pb-3 ${i < 4 ? "border-b border-white/8" : ""}`}
                  >
                    <span>{label}</span>
                    <span className="text-accent">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 text-center">
              <p className="text-white/55">
                Ready to experience the Salem Steamer standard?
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
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
        </div>
      </section>
    </>
  );
}
