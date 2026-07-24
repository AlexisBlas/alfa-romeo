"use client";

import { motion } from "framer-motion";
import { ScrollCount } from "@/components/scroll-count";

const EASE = [0.22, 1, 0.36, 1] as const;

type Spec = {
  unit: string;
  label: string;
  to: number;
  decimals?: number;
  commas?: boolean;
  prefix?: string;
  suffix?: string;
};

const SPECS: Spec[] = [
  {
    to: 90,
    prefix: "V6 ",
    suffix: "°",
    unit: "BITURBO",
    label: "ENGINE — 2,993 CC",
  },
  { to: 620, unit: "CV", label: "POWER @ 7,500 RPM" },
  { to: 730, unit: "NM", label: "TORQUE @ 3,000 RPM" },
  { to: 3.0, decimals: 1, prefix: "<", unit: "S", label: "0–100 KM/H" },
  { to: 333, unit: "KM/H", label: "TOP SPEED" },
  { to: 1500, commas: true, unit: "KG", label: "DRY WEIGHT" },
  { to: 8, unit: "SPEED DCT", label: "GEARBOX — RWD" },
  { to: 33, unit: "UNITS", label: "CARBON MONOCOQUE" },
];

export function Specs() {
  return (
    <section id="specs" className="w-full px-page py-16 md:py-36">
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
            SPECIFICATIONS
          </span>
          <span className="font-mono text-[12px] tracking-[2px] text-amber md:text-[13px]">
            02
          </span>
          <span className="font-mono text-[12px] text-white/60 md:text-[13px]">
            /
          </span>
          <span className="font-mono text-[12px] tracking-[1px] text-white/60 md:text-[13px]">
            DATA SHEET
          </span>
        </div>

        <h2 className="mt-6 font-display text-[clamp(2.25rem,10vw,5rem)] leading-[0.95] tracking-[-0.02em] text-white md:mt-8">
          NUMBERS
          <br />
          <span className="text-racing-red">WITH SOUL.</span>
        </h2>

        <p className="mt-5 max-w-[32rem] font-body text-[clamp(0.95rem,3.5vw,1.2rem)] leading-[1.5] tracking-[0.3px] text-white/70 md:mt-6">
          Every figure below was tuned by hand in Arese. Not to win
          spreadsheets — to make the hair on your arms stand up at 7,500 rpm.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 md:mt-20 md:gap-4 lg:grid-cols-4">
        {SPECS.map((spec, i) => (
          <motion.div
            key={spec.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.05 * i }}
            className="frost-panel-dark min-w-0"
          >
            <p className="font-bebas text-[clamp(1.65rem,8vw,3.25rem)] leading-none tracking-[1px] text-white">
              <ScrollCount
                to={spec.to}
                decimals={spec.decimals}
                commas={spec.commas}
                prefix={spec.prefix}
                suffix={spec.suffix}
              />{" "}
              <span className="text-[0.45em] text-amber-hot">{spec.unit}</span>
            </p>
            <p className="mt-2 font-mono text-[8px] leading-relaxed tracking-[1.5px] text-white/60 md:mt-3 md:text-[9px]">
              {spec.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
