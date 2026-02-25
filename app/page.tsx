import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { images, serviceImages } from "@/lib/images";
import { Reveal } from "@/components/reveal";
import SplitText from "@/components/split-text";
import PinnedMethod from "@/components/pinned-method";

export default function HomePage() {
  return (
    <>
      {/* ── HERO (full-bleed cinematic) ───────────── */}
      <section className="relative min-h-[92vh] overflow-hidden">
        {/* Background image with depth layers */}
        <div className="absolute inset-0">
          <Image
            src={images.hero}
            alt="Luxury estate exterior at dusk"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            quality={90}
          />
          {/* Gradient overlays for readability + mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
          {/* Subtle warm vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(200,180,138,0.08),transparent_60%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-5 pb-16 md:pb-24">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">
              Premium Restoration Authority • Est. {site.founded}
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-[length:var(--h1)] leading-[1.05]">
              <SplitText text="Elite Expertise for Every Property, From Historic Estates to Modern Condos." />
            </h1>
            <p className="mt-6 max-w-2xl text-[length:var(--p)] leading-relaxed text-white/75">
              Salem Steamer serves McLean and the Washington, DC metropolitan
              area and is built on a simple principle: every property and every
              client deserves the highest standard of care. Our results are
              seamless and complete — the only thing left behind is your peace
              of mind.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="focus-ring inline-flex rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:opacity-90"
              >
                Request a Consultation
              </Link>
              <Link
                href="/services"
                className="focus-ring inline-flex rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm backdrop-blur-sm transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>

            {/* Badge row */}
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {(
                [
                  ["IICRC Certified Firm", "Standards-aligned execution"],
                  ["Fully Licensed", "Compliance maintained"],
                  ["300+ Verified Reviews", "Performance proven"],
                  ["Est. 2003", "Two decades of execution"],
                ] as const
              ).map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm"
                >
                  <p className="text-sm font-medium">{k}</p>
                  <p className="mt-1 text-xs text-white/55">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SHOWCASE STRIP (estate imagery) ──────── */}
      <section className="border-y border-white/8 bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={images.estate1}
                  alt="Luxury colonial estate exterior"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                    Historic Estates
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={images.estate2}
                  alt="Modern luxury interior"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                    Modern Interiors
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={images.discretion}
                  alt="Private gated residence"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                    Private Residences
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT SETS US APART ────────────────────── */}
      <section className="border-b border-white/8 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid items-start gap-12 md:grid-cols-5">
            {/* Left: Image column */}
            <Reveal>
              <div className="relative md:col-span-2">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={images.about}
                    alt="Architectural detail of luxury property"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                </div>
                {/* Floating credential badge */}
                <div className="absolute -bottom-4 -right-4 rounded-xl border border-white/12 bg-surface/90 p-4 shadow-soft backdrop-blur-md md:-right-8">
                  <p className="text-2xl font-serif">20+</p>
                  <p className="text-xs text-white/60">Years of<br />Excellence</p>
                </div>
              </div>
            </Reveal>

            {/* Right: Content */}
            <div className="md:col-span-3">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.28em] text-accent">
                  Differentiators
                </p>
                <h2 className="mt-3 font-serif text-[length:var(--h2)]">
                  What Sets Us Apart
                </h2>
              </Reveal>

              <div className="mt-8 grid gap-4">
                {[
                  {
                    t: "White-Glove Service for Every Client",
                    p: "Vetted teams, clear communication, privacy protection, and a seamless experience at any project scale.",
                  },
                  {
                    t: "Technical Expertise for Any Finish",
                    p: "Advanced remediation methods that preserve materials — from antique hardwood to modern composites.",
                  },
                  {
                    t: "A Public Adjuster, Paid by Us",
                    p: "An advocate at our cost to negotiate insurance outcomes and handle complex communications.",
                  },
                  {
                    t: "Third-Party Certified Lab Report",
                    p: "Independent verification that your environment meets stringent safety standards post-remediation.",
                  },
                  {
                    t: "Discretion Premium Available",
                    p: "Unmarked vehicles, paperless workflows, NDAs, sealed records, and privacy-grade reporting options.",
                  },
                ].map((c, i) => (
                  <Reveal key={c.t} delay={i * 0.06}>
                    <div className="group flex gap-4 rounded-xl border border-white/8 bg-white/3 p-5 transition hover:border-white/15 hover:bg-white/5">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-xs text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h3 className="text-[0.95rem] font-medium">{c.t}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                          {c.p}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PINNED METHOD STORYTELLING ────────────── */}
      <PinnedMethod />

      {/* ── SERVICES GRID (with images) ───────────── */}
      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-accent">
              Services
            </p>
            <h2 className="mt-3 font-serif text-[length:var(--h2)]">
              Restoration &amp; Environmental Care
            </h2>
            <p className="mt-3 max-w-2xl text-white/65">
              Every service pathway is built on disciplined systems, measurable
              outcomes, and verified proof of performance.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04}>
                <Link
                  href={`/services/${s.slug}`}
                  className="focus-ring group relative block overflow-hidden rounded-xl border border-white/10 transition hover:border-white/20"
                >
                  {/* Service image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={serviceImages[s.slug] || images.method}
                      alt={s.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                    {/* Arrow overlay */}
                    <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/30 text-sm text-accent opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                      →
                    </div>
                  </div>
                  {/* Content */}
                  <div className="bg-white/3 p-5">
                    <h3 className="text-[0.95rem] font-medium">{s.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                      {s.summary}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="focus-ring inline-flex rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:opacity-90"
              >
                Request a Consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TRUST / SOCIAL PROOF CLOSE ────────────── */}
      <section className="relative overflow-hidden border-t border-white/8">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={images.contact}
            alt="Luxury home foyer"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-accent">
                  Proven Performance
                </p>
                <h2 className="mt-3 font-serif text-[length:var(--h2)]">
                  {site.reviewsCount}+ Verified Reviews
                </h2>
                <p className="mt-4 max-w-lg text-white/70">
                  Our work speaks for itself. Verified reviews from homeowners,
                  property managers, and condo boards across the DC metropolitan
                  area confirm our commitment to excellence and discretion.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="focus-ring inline-flex rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:opacity-90"
                  >
                    Request a Consultation
                  </Link>
                  <a
                    href="tel:5713443837"
                    className="focus-ring inline-flex rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm backdrop-blur-sm transition hover:bg-white/10"
                  >
                    Call 24/7: {site.phone}
                  </a>
                </div>
              </div>

              {/* Review cards */}
              <div className="grid gap-3">
                {[
                  {
                    quote:
                      "Exceptional attention to detail. They treated our historic home with the care it deserved.",
                    author: "McLean Homeowner",
                  },
                  {
                    quote:
                      "Discreet, professional, and thorough. The lab report gave us total peace of mind.",
                    author: "Great Falls Property Manager",
                  },
                  {
                    quote:
                      "The public adjuster they provided saved us thousands. Can't recommend them enough.",
                    author: "Arlington Condo Board",
                  },
                ].map((r) => (
                  <div
                    key={r.author}
                    className="rounded-xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm"
                  >
                    <p className="text-sm leading-relaxed text-white/75">
                      &ldquo;{r.quote}&rdquo;
                    </p>
                    <p className="mt-3 text-xs text-accent">{r.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
