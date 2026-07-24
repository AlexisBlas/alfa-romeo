export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-64px)] w-full flex-col md:min-h-[calc(100dvh-80px)]">
      <div className="relative flex w-full flex-1 flex-col px-page lg:flex-row">
        {/* Left copy */}
        <div className="relative z-10 flex w-full flex-1 flex-col items-start pt-6 pb-14 md:pt-8 md:pb-16 lg:w-1/2 lg:flex-none lg:pr-8">
          <div className="animate-fade-up flex flex-col items-start gap-6 md:gap-9">
            <div className="flex flex-col items-start gap-3 md:gap-5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span aria-hidden className="h-0.5 w-6 shrink-0 bg-amber" />
                <span className="font-mono text-[12px] tracking-[2px] text-amber underline decoration-solid underline-offset-2 md:text-[13px]">
                  CARS
                </span>
                <span className="font-mono text-[12px] tracking-[2px] text-amber md:text-[13px]">
                  01
                </span>
                <span className="font-mono text-[12px] text-white/60 md:text-[13px]">
                  /
                </span>
                <span className="font-mono text-[12px] tracking-[1px] text-white/60 md:text-[13px]">
                  2025 SEASON
                </span>
              </div>

              <div className="w-full max-w-[22rem] sm:max-w-none">
                <h1 className="font-display text-[clamp(2.6rem,12vw,7rem)] leading-[0.93] tracking-[-0.03em] text-white md:text-[clamp(3.5rem,9vw,7.5rem)]">
                  ICONIC
                </h1>

                <div className="mt-0.5 flex h-[clamp(2.6rem,12vw,7rem)] items-center gap-3 overflow-visible md:gap-5">
                  <div className="aspect-[48/99] h-full shrink-0 overflow-clip">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/headline-the.svg"
                      alt=""
                      width={48}
                      height={99}
                      className="block size-full object-fill brightness-0 invert"
                    />
                  </div>
                  {/* Scale past the em-box so Alfa Slab caps match the BY SVG height */}
                  <p className="font-display text-[calc(clamp(2.6rem,12vw,7rem)*1.4)] leading-none tracking-[-0.03em] text-racing-red">
                    DESIGN.
                  </p>
                </div>

                <p className="mt-3 max-w-[20rem] font-body text-[clamp(1rem,3.8vw,1.4rem)] leading-[1.35] tracking-[0.3px] text-white/90 sm:max-w-none">
                  An automotive icon that transformed performance into art.
                </p>
              </div>
            </div>

            <a
              href="#specs"
              className="inline-flex items-center justify-center bg-amber px-6 py-3.5 font-condensed text-[13px] font-bold tracking-[2px] text-cta-ink transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-amber-hot active:scale-[0.98] md:px-7 md:py-4 md:text-[14px]"
            >
              EXPLORE THE CAR
            </a>
          </div>

          {/* Mobile telemetry — pinned to the bottom of the hero */}
          <div className="mt-auto flex w-full flex-col gap-5 pt-10 lg:hidden">
            <div className="flex w-full items-end justify-between gap-4">
              <div className="bg-amber px-2.5 py-1">
                <span className="font-bebas text-[16px] tracking-[1px] text-cta-ink">
                  № 23
                </span>
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <span className="font-mono text-[9px] tracking-[1.5px] text-amber">
                  — Model
                </span>
                <span className="font-bebas text-[1.5rem] tracking-[1px] text-white">
                  33 Stradale
                </span>
                <span className="font-mono text-[9px] tracking-[1px] text-white/60">
                  LAP 42 / 58 · P1
                </span>
              </div>
            </div>
            <div aria-hidden className="h-[4px] w-full bg-amber" />
          </div>
        </div>

        {/* Desktop telemetry / annotations */}
        <div className="relative hidden min-h-[calc(100dvh-80px)] w-full flex-1 lg:block">
          <div className="animate-fade-up delay-2 absolute left-0 top-12 bg-amber px-3 py-1.5">
            <span className="font-bebas text-[18px] tracking-[1px] text-cta-ink">
              № 23
            </span>
          </div>

          <div className="animate-fade-up delay-2 absolute right-0 top-10 flex flex-col items-end gap-1">
            <span className="font-mono text-[9px] tracking-[1.5px] text-amber">
              — Model
            </span>
            <span className="font-bebas text-[clamp(1.75rem,4vw,2.25rem)] tracking-[1px] text-white">
              33 Stradale
            </span>
            <span className="font-mono text-[9px] tracking-[1px] text-white/60">
              LAP 42 / 58 · P1
            </span>
          </div>

          <p
            aria-hidden
            className="animate-fade-in delay-3 pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] whitespace-nowrap font-mono text-[8px] tracking-[2px] text-white/30"
          >
            APEX F1 · 2025 CHAMPIONSHIP SEASON
          </p>

          <div
            aria-hidden
            className="animate-fade-up delay-3 absolute bottom-14 left-0 w-[min(100%,34rem)]"
          >
            <div className="h-[5px] w-full bg-amber" />
            <div className="mt-4 h-0.5 w-full bg-amber/30" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 md:bottom-4">
        <span className="font-mono text-[9px] tracking-[2px] text-white/60">
          SCROLL TO DRIVE
        </span>
      </div>
    </section>
  );
}
