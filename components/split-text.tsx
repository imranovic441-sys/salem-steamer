"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function SplitText({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  if (reduce) return <span>{text}</span>;

  return (
    <span className="inline-block">
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="mr-2 inline-block"
          initial={{ y: "0.55em", opacity: 0 }}
          whileInView={{ y: "0em", opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.2, 0.8, 0.2, 1],
            delay: i * 0.03,
          }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}
