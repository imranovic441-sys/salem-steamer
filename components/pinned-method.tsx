"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { images } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedMethod() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    /* ── Lenis smooth scroll ─────────────────────── */
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    /* Sync ScrollTrigger with Lenis */
    lenis.on("scroll", ScrollTrigger.update);

    /* ── GSAP scroll-driven pinning ──────────────── */
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".method",
        start: "top top",
        end: "+=2200",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      });

      gsap.to(".method-bg", {
        y: -80,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: ".method",
          start: "top top",
          end: "+=2200",
          scrub: 1,
        },
      });

      gsap.to(".step-1", {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".method",
          start: "top+=120 top",
          end: "top+=520 top",
          scrub: 1,
        },
      });
      gsap.to(".step-2", {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".method",
          start: "top+=520 top",
          end: "top+=980 top",
          scrub: 1,
        },
      });
      gsap.to(".step-3", {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".method",
          start: "top+=980 top",
          end: "top+=1440 top",
          scrub: 1,
        },
      });
      gsap.to(".step-4", {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".method",
          start: "top+=1440 top",
          end: "top+=2000 top",
          scrub: 1,
        },
      });
    }, el);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      ScrollTrigger.killAll();
      lenis.destroy();
    };
  }, []);

  return (
    <section
      ref={root}
      className="method relative overflow-hidden border-y border-white/10 bg-surface"
    >
      {/* Background depth layer */}
      <div className="method-bg absolute inset-0">
        <Image
          src={images.method}
          alt="Professional restoration work"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-24">
        {/* Header */}
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">
              Systems
            </p>
            <h2 className="mt-3 font-serif text-[clamp(1.9rem,3.2vw,2.8rem)]">
              The Salem Steamer Method.
            </h2>
            <p className="mt-3 max-w-xl text-white/70">
              Defined systems. Measurable standards. Consistent results across
              every property type.
            </p>
          </div>
          <div className="hidden text-right text-sm text-white/55 md:block">
            Built for consistency across future locations.
          </div>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* Steps column */}
          <div className="rounded-xl border border-white/12 bg-black/25 p-6 shadow-soft">
            <div className="step-1 translate-y-3 opacity-30 transition">
              <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                01
              </p>
              <h3 className="mt-2 text-lg">Assessment Protocol</h3>
              <p className="mt-2 text-white/70">
                Structured evaluation: materials, moisture mapping,
                contamination risk, scope definition.
              </p>
            </div>
            <div className="step-2 mt-8 translate-y-3 opacity-30 transition">
              <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                02
              </p>
              <h3 className="mt-2 text-lg">Controlled Restoration</h3>
              <p className="mt-2 text-white/70">
                IICRC-aligned procedures with calibrated equipment and
                controlled application methods.
              </p>
            </div>
            <div className="step-3 mt-8 translate-y-3 opacity-30 transition">
              <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                03
              </p>
              <h3 className="mt-2 text-lg">Documentation & Verification</h3>
              <p className="mt-2 text-white/70">
                Moisture readings, checkpoints, and validation for measurable
                performance.
              </p>
            </div>
            <div className="step-4 mt-8 translate-y-3 opacity-30 transition">
              <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                04
              </p>
              <h3 className="mt-2 text-lg">Client Assurance Standard</h3>
              <p className="mt-2 text-white/70">
                Clear communication, defined scope, and satisfaction
                confirmation to close the service cycle.
              </p>
            </div>
          </div>

          {/* Signal line column */}
          <div className="rounded-xl border border-white/12 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">
              Signal Line
            </p>
            <p className="mt-3 text-white/75">
              Built on standardized operating procedures designed for consistent
              execution across every service location.
            </p>
            <div className="mt-10 grid gap-3 text-sm text-white/70">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Standards Alignment</span>
                <span className="text-accent">IICRC</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Operating History</span>
                <span className="text-accent">Est. 2003</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Verified Proof</span>
                <span className="text-accent">300+ Reviews</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Discretion Capability</span>
                <span className="text-accent">Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
