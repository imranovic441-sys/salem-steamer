"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** Parallax intensity (default: 20 = 20px travel) */
  intensity?: number;
  /** Overlay darkness 0-1 (default: 0.5) */
  overlay?: number;
  priority?: boolean;
};

export default function ParallaxMedia({
  src,
  alt,
  className = "",
  intensity = 20,
  overlay = 0.5,
  priority = false,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 scale-110"
        initial={reduce ? false : { y: intensity }}
        whileInView={reduce ? {} : { y: -intensity }}
        viewport={{ once: false, margin: "0px 0px -20% 0px" }}
        transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority={priority}
        />
      </motion.div>
      {overlay > 0 && (
        <div
          className="absolute inset-0"
          style={{ background: `rgba(0,0,0,${overlay})` }}
        />
      )}
    </div>
  );
}
