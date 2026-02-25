"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/discretion", label: "Discretion" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="focus-ring group inline-flex items-baseline gap-2"
        >
          <span className="font-serif text-lg tracking-wide">
            Salem Steamer
          </span>
          <span className="text-xs text-white/55">McLean</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="focus-ring relative text-sm text-white/80 transition hover:text-white"
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-accent"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
            className="focus-ring hidden text-sm text-white/70 transition hover:text-white sm:inline-flex"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"
          >
            Request Consultation
          </Link>

          {/* Mobile hamburger */}
          <button
            className="focus-ring ml-1 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-black/50 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="focus-ring rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
