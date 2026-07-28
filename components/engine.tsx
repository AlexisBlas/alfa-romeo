"use client";

import { useEffect, useRef, useState } from "react";
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
  const [travel, setTravel] = useState(speed);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [travel, -travel]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setTravel(mq.matches ? speed * 0.2 : speed);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [speed]);

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
  // Right side, against engine-detail
  { text: "TWIN IHI TURBOCHARGERS", position: "left-[56%] top-[8%]" },
  // Just right of engine-main
  { text: "DRY SUMP LUBRICATION", position: "left-[39%] top-[42%]" },
  // Just right of exhaust-glow
  { text: "8,000 RPM REDLINE", position: "left-[50%] bottom-[10%]" },
] as const;

export function Engine() {
  return (
    <section id="engine" className="w-full px-page pb-16 pt-6 md:pb-36 md:pt-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="frost-panel-dark max-w-[44rem]"
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span aria-hidden className="h-0.5 w-6 shrink-0 bg-amber" />
          <span className="font-mono text-[12px] tracking-[2px] text-amber md:text-[13px]">
            POWERTRAIN
          </span>
          <span className="font-mono text-[12px] tracking-[2px] text-amber md:text-[13px]">
            03
          </span>
          <span className="font-mono text-[12px] text-white/60 md:text-[13px]">
            /
          </span>
          <span className="font-mono text-[12px] tracking-[1px] text-white/60 md:text-[13px]">
            NETTUNO-DERIVED V6
          </span>
        </div>

        <h2 className="mt-6 font-display text-[clamp(2.25rem,10vw,5rem)] leading-[0.95] tracking-[-0.02em] text-white md:mt-8">
          THE BEATING
          <br />
          <span className="text-racing-red">HEART.</span>
        </h2>
      </motion.div>

      {/* Mobile: stacked collage. Desktop: absolute floating collage. */}
      <div className="relative mt-10 flex flex-col gap-4 md:mt-24 md:block md:h-[110vh] md:min-h-[720px] md:gap-0 md:overflow-visible">
        <ParallaxImage
          src="/engine/engine-main.png"
          alt="Alfa Romeo twin-turbo V6 engine, studio lit"
          speed={-120}
          className="relative aspect-square w-[85%] md:absolute md:left-0 md:top-[14%] md:w-[37%]"
        />
        <ParallaxImage
          src="/engine/engine-detail.png"
          alt="Macro detail of the intake plenum and turbo plumbing"
          speed={180}
          className="relative aspect-square w-[74%] md:absolute md:right-[calc(38%+60px)] md:top-0 md:w-[32%]"
        />
        <ParallaxImage
          src="/engine/exhaust-glow.png"
          alt="Titanium exhaust tips glowing after a hot lap"
          speed={260}
          className="relative ml-auto aspect-square w-[70%] md:absolute md:bottom-[4%] md:left-[19%] md:ml-0 md:w-[30%]"
        />

        {/* Spec callouts — desktop only */}
        {CALLOUTS.map((callout, i) => (
          <motion.div
            key={callout.text}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 * i }}
            className={`absolute ${callout.position} hidden items-center gap-2 md:flex`}
          >
            <span aria-hidden className="h-px w-8 bg-amber-hot" />
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
        className="frost-panel-dark mt-12 flex flex-wrap items-baseline justify-between gap-6 md:mt-28 md:gap-8"
      >
        {[
          { to: 620, unit: "CV" },
          { to: 730, unit: "NM" },
          { to: 333, unit: "KM/H" },
        ].map((stat) => (
          <p
            key={stat.unit}
            className="font-bebas text-[clamp(2rem,12vw,5.5rem)] leading-none tracking-[1px] text-white"
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
