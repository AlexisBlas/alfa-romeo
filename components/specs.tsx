"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const SPECS = [
  { value: "V6 90°", unit: "BITURBO", label: "ENGINE — 2,993 CC" },
  { value: "620", unit: "CV", label: "POWER @ 7,500 RPM" },
  { value: "730", unit: "NM", label: "TORQUE @ 3,000 RPM" },
  { value: "<3.0", unit: "S", label: "0–100 KM/H" },
  { value: "333", unit: "KM/H", label: "TOP SPEED" },
  { value: "1,500", unit: "KG", label: "DRY WEIGHT" },
  { value: "8", unit: "SPEED DCT", label: "GEARBOX — RWD" },
  { value: "33", unit: "UNITS", label: "CARBON MONOCOQUE" },
] as const;

export function Specs() {
  return (
    <section id="specs" className="w-full px-page py-24 md:py-36">
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
            SPECIFICATIONS
          </span>
          <span className="font-mono text-[13px] tracking-[2px] text-amber">
            02
          </span>
          <span className="font-mono text-[13px] text-white/60">/</span>
          <span className="font-mono text-[13px] tracking-[1px] text-white/60">
            DATA SHEET
          </span>
        </div>

        <h2 className="mt-8 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] text-white">
          NUMBERS
          <br />
          <span className="text-racing-red">WITH SOUL.</span>
        </h2>

        <p className="mt-6 max-w-[32rem] font-body text-[clamp(1rem,1.6vw,1.2rem)] leading-[1.5] tracking-[0.3px] text-white/70">
          Every figure below was tuned by hand in Arese. Not to win
          spreadsheets — to make the hair on your arms stand up at 7,500 rpm.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-2 gap-3 md:mt-20 md:gap-4 lg:grid-cols-4">
        {SPECS.map((spec, i) => (
          <motion.div
            key={spec.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.05 * i }}
            className="frost-panel-dark p-6 md:p-8"
          >
            <p className="font-bebas text-[clamp(2rem,4vw,3.25rem)] leading-none tracking-[1px] text-white">
              {spec.value}{" "}
              <span className="text-[0.45em] text-amber-hot">{spec.unit}</span>
            </p>
            <p className="mt-3 font-mono text-[9px] tracking-[1.5px] text-white/60">
              {spec.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
