import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { images } from "@/lib/images";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Discretion",
  description:
    "Privacy-first restoration operations: unmarked vehicles, paperless workflows, NDAs, sealed records, and privacy-grade reporting.",
};

export default function DiscretionPage() {
  return (
    <>
      {/* ── Hero banner ─────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src={images.discretion}
            alt="Private luxury gated estate"
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
              Privacy-First Operations
            </p>
            <h1 className="mt-3 max-w-3xl font-serif text-[length:var(--h1)] leading-[1.08]">
              Discretion Premium
            </h1>
            <p className="mt-5 max-w-2xl text-[length:var(--p)] leading-relaxed text-white/75">
              For clients who require an elevated level of privacy — public
              figures, diplomatic residences, high-value estates, and sensitive
              environments — Salem Steamer offers a discretion premium that
              governs every aspect of the engagement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Capabilities grid ───────────────────── */}
      <section className="border-b border-white/8 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Unmarked Vehicles",
                body: "Service vehicles arrive without company branding. No signage, no visibility to neighbors or media.",
                icon: "🚐",
              },
              {
                title: "Paperless Workflows",
                body: "Digital-only documentation with encrypted transmission. No physical records left on-site.",
                icon: "📱",
              },
              {
                title: "Non-Disclosure Agreements",
                body: "Formal NDAs executed before project commencement for all team members and subcontractors.",
                icon: "📋",
              },
              {
                title: "Sealed Project Records",
                body: "Documentation stored under restricted access protocols. Available only to authorized parties.",
                icon: "🔒",
              },
              {
                title: "Vetted Team Assignment",
                body: "Pre-screened, background-checked technicians assigned specifically to discretion-tier engagements.",
                icon: "👤",
              },
              {
                title: "Privacy-Grade Reporting",
                body: "Reports delivered through secure channels with redacted identifiers where requested.",
                icon: "📊",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="group h-full rounded-xl border border-white/10 bg-white/3 p-6 transition hover:border-white/18 hover:bg-white/5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-lg">
                    {item.icon}
                  </div>
                  <h2 className="font-medium">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who requests this ───────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.estate1}
            alt="Luxury estate"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-accent">
                  Client Profiles
                </p>
                <h2 className="mt-3 font-serif text-[length:var(--h2)]">
                  Who Requests Discretion?
                </h2>
                <p className="mt-3 text-white/65">
                  Our discretion premium is regularly engaged by:
                </p>
              </div>
              <div className="grid gap-2">
                {[
                  "High-profile homeowners and public figures",
                  "Diplomatic and embassy residences",
                  "Property managers of luxury communities",
                  "Real estate professionals during transactions",
                  "Insurance adjusters handling sensitive claims",
                  "Corporate facilities requiring confidentiality",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/3 px-4 py-3 backdrop-blur-sm"
                  >
                    <span className="text-accent">•</span>
                    <span className="text-sm text-white/75">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-16 text-center">
              <p className="text-white/55">
                Inquire about our discretion premium for your project.
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
