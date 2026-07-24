"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

type ScrollCountProps = {
  to: number;
  decimals?: number;
  commas?: boolean;
  prefix?: string;
  suffix?: string;
  className?: string;
};

function formatValue(
  value: number,
  decimals: number,
  commas: boolean,
): string {
  const rounded =
    decimals > 0
      ? value.toFixed(decimals)
      : String(Math.round(value));

  if (!commas) return rounded;

  const [whole, fraction] = rounded.split(".");
  const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return fraction !== undefined ? `${withCommas}.${fraction}` : withCommas;
}

/**
 * Maps the element's scroll progress into a live count from 0 → `to`.
 * Scrubs both ways so scrolling back winds the number down.
 */
export function ScrollCount({
  to,
  decimals = 0,
  commas = false,
  prefix = "",
  suffix = "",
  className,
}: ScrollCountProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(
    `${prefix}${formatValue(0, decimals, commas)}${suffix}`,
  );

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const value = useTransform(scrollYProgress, [0, 1], [0, to]);

  useMotionValueEvent(value, "change", (latest) => {
    setDisplay(
      `${prefix}${formatValue(latest, decimals, commas)}${suffix}`,
    );
  });

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
