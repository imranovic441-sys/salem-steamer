/**
 * Centralized image URLs for the site.
 * All images from Unsplash — free for commercial use.
 * Replace with your own assets in production.
 */
export const images = {
  /** Hero — dark, cinematic luxury estate at dusk */
  hero: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80&auto=format&fit=crop",

  /** Estate exterior — grand colonial home */
  estate1:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",

  /** Estate interior — luxury living room, warm tones */
  estate2:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop",

  /** Method / restoration — professional at work */
  method:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=80&auto=format&fit=crop",

  /** About — elegant architectural detail */
  about:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80&auto=format&fit=crop",

  /** Discretion — private gated estate */
  discretion:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80&auto=format&fit=crop",

  /** Contact — luxury home entry / foyer */
  contact:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80&auto=format&fit=crop",

  /** Water damage — flooding / water */
  waterDamage:
    "https://images.unsplash.com/photo-1525438160292-a4a860951571?w=800&q=80&auto=format&fit=crop",

  /** Mold — close up microscopic / lab */
  mold: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80&auto=format&fit=crop",

  /** Carpet care — luxury carpet / rug */
  carpet:
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80&auto=format&fit=crop",

  /** Tile — marble / stone surface */
  tile: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80&auto=format&fit=crop",

  /** Air duct — HVAC / ventilation */
  airDuct:
    "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80&auto=format&fit=crop",

  /** Fire — smoke / aftermath */
  fire: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop",
} as const;

/** Map service slugs to images */
export const serviceImages: Record<string, string> = {
  "water-damage-restoration": images.waterDamage,
  "mold-testing-remediation": images.mold,
  "carpet-upholstery-restoration": images.carpet,
  "hard-surface-tile-renewal": images.tile,
  "air-duct-dryer-vent": images.airDuct,
  "odor-neutralization": images.method,
  "fire-smoke-remediation": images.fire,
};
