import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/35">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <p className="font-serif text-lg">Salem Steamer</p>
          <p className="mt-2 text-sm text-white/60">
            Premium restoration authority serving the DC metropolitan area.
          </p>
        </div>

        {/* Navigation */}
        <div className="text-sm text-white/70">
          <p className="text-xs uppercase tracking-[0.22em] text-white/55">
            Navigation
          </p>
          <div className="mt-3 grid gap-2">
            <Link
              href="/services"
              className="focus-ring transition hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/discretion"
              className="focus-ring transition hover:text-white"
            >
              Discretion
            </Link>
            <Link
              href="/about"
              className="focus-ring transition hover:text-white"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="focus-ring transition hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="text-sm text-white/70">
          <p className="text-xs uppercase tracking-[0.22em] text-white/55">
            Contact
          </p>
          <p className="mt-3">{site.area.join(" • ")}</p>
          <p className="mt-2">
            <a
              className="focus-ring transition hover:text-white"
              href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
            >
              {site.phone}
            </a>
          </p>
          <p className="mt-1">
            <a
              className="focus-ring transition hover:text-white"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.legalName}. Restoration is not a
        task. It is a standard.
      </div>
    </footer>
  );
}
