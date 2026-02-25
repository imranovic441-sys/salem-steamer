import Image from "next/image";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { images } from "@/lib/images";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a consultation or reach Salem Steamer for emergency restoration services in the DC metro area. Call ${site.phone}.`,
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero banner ─────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src={images.contact}
            alt="Luxury home foyer"
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
              Get in Touch
            </p>
            <h1 className="mt-3 font-serif text-[length:var(--h1)] leading-[1.08]">
              Request a Consultation
            </h1>
            <p className="mt-5 max-w-2xl text-[length:var(--p)] leading-relaxed text-white/75">
              Describe your situation. We&apos;ll respond with a clear,
              structured approach — no obligation, no pressure. For emergencies,
              call us 24/7.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Form + sidebar ──────────────────────── */}
      <section className="border-b border-white/8 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-8 md:grid-cols-5">
            {/* Contact form */}
            <Reveal>
              <div className="rounded-xl border border-white/10 bg-white/3 p-6 md:col-span-3">
                <form className="grid gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm text-white/70"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="focus-ring w-full rounded-lg border border-white/12 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/35 transition focus:border-accent/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm text-white/70"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="focus-ring w-full rounded-lg border border-white/12 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/35 transition focus:border-accent/50"
                        placeholder="(xxx) xxx-xxxx"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm text-white/70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="focus-ring w-full rounded-lg border border-white/12 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/35 transition focus:border-accent/50"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-sm text-white/70"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="focus-ring w-full rounded-lg border border-white/12 bg-black/40 px-4 py-3 text-sm text-white transition focus:border-accent/50"
                    >
                      <option value="">Select a service</option>
                      <option>Water Damage Restoration</option>
                      <option>Mold Testing &amp; Remediation</option>
                      <option>Carpet &amp; Upholstery Restoration</option>
                      <option>Hard Surface &amp; Tile Renewal</option>
                      <option>Air Duct &amp; Dryer Vent Care</option>
                      <option>Odor Neutralization</option>
                      <option>Fire / Smoke Remediation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm text-white/70"
                    >
                      Tell Us About Your Situation
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="focus-ring w-full rounded-lg border border-white/12 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/35 transition focus:border-accent/50"
                      placeholder="Describe your situation, property type, timeline, and any special requirements..."
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 text-sm text-white/55">
                      <input
                        type="checkbox"
                        name="discretion"
                        className="h-4 w-4 rounded border-white/20 bg-black/30"
                      />
                      I require the Discretion Premium
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="focus-ring inline-flex w-full justify-center rounded-lg bg-white px-5 py-3.5 text-sm font-medium text-black transition hover:opacity-90 md:w-auto"
                  >
                    Submit Consultation Request
                  </button>
                </form>
              </div>
            </Reveal>

            {/* Contact info sidebar */}
            <Reveal delay={0.1}>
              <div className="space-y-4 md:col-span-2">
                {/* Emergency CTA */}
                <div className="relative overflow-hidden rounded-xl border border-white/10">
                  <div className="absolute inset-0">
                    <Image
                      src={images.waterDamage}
                      alt="Emergency water damage"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-black/75" />
                  </div>
                  <div className="relative p-6">
                    <h2 className="text-lg font-medium">Emergency? Call 24/7</h2>
                    <p className="mt-2 text-sm text-white/65">
                      Water, fire, or mold emergencies require immediate
                      response. Don&apos;t wait.
                    </p>
                    <a
                      href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
                      className="focus-ring mt-4 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                    >
                      {site.phone}
                    </a>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/3 p-6">
                  <h2 className="font-medium">Service Area</h2>
                  <p className="mt-2 text-sm text-white/65">
                    {site.area.join(" • ")}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/3 p-6">
                  <h2 className="font-medium">Email</h2>
                  <a
                    href={`mailto:${site.email}`}
                    className="focus-ring mt-2 block text-sm text-accent transition hover:text-white"
                  >
                    {site.email}
                  </a>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/3 p-6">
                  <h2 className="font-medium">Office Hours</h2>
                  <div className="mt-2 grid gap-1 text-sm text-white/60">
                    <div className="flex justify-between">
                      <span>Mon – Fri</span>
                      <span>8:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM – 3:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergency</span>
                      <span className="text-accent">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
