import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Expert perspectives on restoration, remediation, and environmental care from Salem Steamer.",
};

const posts = [
  {
    slug: "understanding-water-damage-categories",
    title: "Understanding Water Damage Categories (I, II, III)",
    excerpt:
      "Not all water damage is equal. Learn the IICRC classification system and why proper categorization determines the entire restoration protocol.",
    date: "2025-12-15",
    image: images.waterDamage,
    tag: "Water Damage",
  },
  {
    slug: "mold-testing-vs-air-quality-testing",
    title: "Mold Testing vs. Air Quality Testing: What You Actually Need",
    excerpt:
      "Homeowners often confuse these two assessments. Here's what each measures, when each is appropriate, and what the results actually mean.",
    date: "2025-11-28",
    image: images.mold,
    tag: "Mold",
  },
  {
    slug: "insurance-claims-restoration",
    title: "Navigating Insurance Claims for Restoration Work",
    excerpt:
      "A public adjuster can transform your experience. Learn how having an advocate — at no cost to you — changes the claims dynamic.",
    date: "2025-11-10",
    image: images.estate2,
    tag: "Insurance",
  },
  {
    slug: "why-discretion-matters",
    title: "Why Discretion Matters in High-Value Property Restoration",
    excerpt:
      "For certain properties and clients, privacy isn't a preference — it's a requirement. How our discretion premium works.",
    date: "2025-10-22",
    image: images.discretion,
    tag: "Discretion",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* ── Hero banner ──────────────────────────────── */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden">
        <Image
          src={images.about}
          alt="Insights"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/70 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-14">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-accent">
              Knowledge
            </p>
            <h1 className="mt-3 font-serif text-[length:var(--h1)] leading-[1.08]">
              Insights
            </h1>
            <p className="mt-4 max-w-2xl text-white/75">
              Expert perspectives on restoration, remediation, and environmental
              care — written for informed homeowners and property managers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Featured article ────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <Link href="#" className="group block">
            <article className="relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[21/9]">
                <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm">
                  Featured · {posts[0].tag}
                </span>
                <h2 className="mt-3 max-w-2xl font-serif text-2xl md:text-3xl leading-snug">
                  {posts[0].title}
                </h2>
                <p className="mt-2 max-w-xl text-white/70">
                  {posts[0].excerpt}
                </p>
              </div>
            </article>
          </Link>
        </Reveal>

        {/* ── Article grid ──────────────────────────── */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.slice(1).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.06]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/80 backdrop-blur-md">
                    {post.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <time className="text-xs text-white/45">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="mt-2 text-lg leading-snug">{post.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-white/65 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-sm text-accent transition group-hover:translate-x-1">
                    Read article →
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ── CTA ───────────────────────────────────── */}
        <Reveal delay={0.3}>
          <div className="relative mt-16 overflow-hidden rounded-2xl">
            <Image
              src={images.estate1}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <div className="relative z-10 px-8 py-14 text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-accent">
                Questions?
              </p>
              <h2 className="mt-3 font-serif text-2xl md:text-3xl">
                Have a Question About Restoration?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-white/65">
                Our team is available to discuss your property&apos;s needs —
                no obligation, complete confidentiality.
              </p>
              <Link
                href="/contact"
                className="focus-ring mt-6 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
