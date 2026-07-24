"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollCount } from "@/components/scroll-count";

const EASE = [0.22, 1, 0.36, 1] as const;

type ParallaxImageProps = {
  src: string;
  alt: string;
  speed: number;
  className?: string;
};

/** Floats against scroll — Kling renders drop into public/engine/. */
function ParallaxImage({ src, alt, speed, className }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [missing, setMissing] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`${className ?? ""} overflow-hidden shadow-[0_30px_80px_rgba(4,5,8,0.35)] will-change-transform`}
    >
      {missing ? (
        <div className="frost-panel-dark flex size-full flex-col items-center justify-center gap-2 p-6 text-center">
          <span className="font-mono text-[9px] tracking-[2px] text-amber-hot">
            KLING RENDER
          </span>
          <span className="font-mono text-[9px] tracking-[1.5px] text-white/60">
            {src}
          </span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="size-full object-cover"
          onError={() => setMissing(true)}
        />
      )}
    </motion.div>
  );
}

const CALLOUTS = [
  { text: "TWIN IHI TURBOCHARGERS", position: "left-0 top-[4%]" },
  { text: "DRY SUMP LUBRICATION", position: "right-[12%] top-[38%]" },
  { text: "8,000 RPM REDLINE", position: "left-[2%] bottom-[8%]" },
] as const;

export function Engine() {
  return (
    <section id="engine" className="w-full px-page pb-24 pt-8 md:pb-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="frost-panel-dark max-w-[44rem] p-7 md:p-10"
      >
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-0.5 w-6 bg-amber" />
          <span className="font-mono text-[13px] tracking-[2px] text-amber">
            POWERTRAIN
          </span>
          <span className="font-mono text-[13px] tracking-[2px] text-amber">
            03
          </span>
          <span className="font-mono text-[13px] text-white/60">/</span>
          <span className="font-mono text-[13px] tracking-[1px] text-white/60">
            NETTUNO-DERIVED V6
          </span>
        </div>

        <h2 className="mt-8 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] text-white">
          THE BEATING
          <br />
          <span className="text-racing-red">HEART.</span>
        </h2>
      </motion.div>

      {/* Floating collage — images drift at different speeds */}
      <div className="relative mt-16 h-[110vh] min-h-[720px] w-full overflow-visible md:mt-24">
        <ParallaxImage
          src="/engine/engine-main.png"
          alt="Alfa Romeo twin-turbo V6 engine, studio lit"
          speed={-120}
          className="absolute right-[15%] top-0 aspect-square w-[56%] md:w-[43%]"
        />
        <ParallaxImage
          src="/engine/engine-detail.png"
          alt="Macro detail of the intake plenum and turbo plumbing"
          speed={180}
          className="absolute left-0 top-[14%] aspect-[4/5] w-[46%] md:w-[34%]"
        />
        <ParallaxImage
          src="/engine/exhaust-glow.png"
          alt="Titanium exhaust tips glowing after a hot lap"
          speed={260}
          className="absolute bottom-[4%] left-[13%] aspect-square w-[42%] md:left-[19%] md:w-[30%]"
        />

        {/* Spec callouts */}
        {CALLOUTS.map((callout, i) => (
          <motion.div
            key={callout.text}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 * i }}
            className={`absolute ${callout.position} hidden items-center gap-3 md:flex`}
          >
            <span aria-hidden className="h-px w-10 bg-amber-hot" />
            <span className="frost-panel-dark px-3 py-2 font-mono text-[9px] tracking-[2px] text-white">
              {callout.text}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Closing stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="frost-panel-dark mt-20 flex flex-wrap items-baseline justify-between gap-8 p-7 md:mt-28 md:p-10"
      >
        {[
          { to: 620, unit: "CV" },
          { to: 730, unit: "NM" },
          { to: 333, unit: "KM/H" },
        ].map((stat) => (
          <p
            key={stat.unit}
            className="font-bebas text-[clamp(2.5rem,7vw,5.5rem)] leading-none tracking-[1px] text-white"
          >
            <ScrollCount to={stat.to} />
            <span className="ml-2 text-[0.4em] text-amber-hot">
              {stat.unit}
            </span>
          </p>
        ))}
        <p className="max-w-[20rem] font-mono text-[9px] leading-[1.8] tracking-[1.5px] text-white/60">
          FICTIONAL CONCEPT CASE — PORTFOLIO WORK. NOT AFFILIATED WITH ALFA
          ROMEO.
        </p>
      </motion.div>
    </section>
  );
}
