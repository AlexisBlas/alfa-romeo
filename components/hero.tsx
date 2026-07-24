export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-80px)] w-full">
      <div className="flex w-full flex-col px-page lg:flex-row">
        {/* Left copy — frosted panel over the film */}
        <div className="flex w-full flex-col items-start pt-8 pb-12 md:pb-16 lg:w-1/2 lg:pr-8">
          <div className="animate-fade-up flex flex-col items-start gap-7 md:gap-9">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-0.5 w-6 bg-amber" />
              <span className="font-mono text-[13px] tracking-[2px] text-amber underline decoration-solid underline-offset-2">
                CARS
              </span>
              <span className="font-mono text-[13px] tracking-[2px] text-amber">
                01
              </span>
              <span className="font-mono text-[13px] text-white/60">/</span>
              <span className="font-mono text-[13px] tracking-[1px] text-white/60">
                2025 SEASON
              </span>
            </div>

            <div className="w-full">
              <h1 className="font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.93] tracking-[-0.03em] text-white">
                ICONIC
              </h1>

              <div className="mt-0.5 flex items-start gap-4 md:gap-5">
                <div className="mt-2.5 h-[clamp(4rem,7vw,5.6rem)] w-[clamp(2rem,3.5vw,2.7rem)] shrink-0 overflow-clip">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/headline-the.svg"
                    alt=""
                    width={48}
                    height={99}
                    className="size-full brightness-0 invert"
                  />
                </div>
                <p className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.93] tracking-[-0.03em] text-racing-red">
                  DESIGN.
                </p>
              </div>

              <p className="mt-3 font-body text-[clamp(1.05rem,1.8vw,1.4rem)] leading-[1.35] tracking-[0.3px] text-white/90">
                An automotive icon that transformed performance into art.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#specs"
                className="inline-flex items-center justify-center bg-amber px-7 py-4 font-condensed text-[14px] font-bold tracking-[2px] text-cta-ink transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-amber-hot active:scale-[0.98]"
              >
                EXPLORE THE CAR
              </a>
            </div>
          </div>
        </div>

        {/* Right telemetry / annotations */}
        <div className="relative min-h-[320px] w-full flex-1 lg:min-h-[calc(100dvh-80px)]">
          <div className="animate-fade-up delay-2 absolute left-0 top-8 bg-amber px-3 py-1.5 md:top-12">
            <span className="font-bebas text-[18px] tracking-[1px] text-cta-ink">
              № 23
            </span>
          </div>

          <div className="animate-fade-up delay-2 absolute right-0 top-8 flex flex-col items-end gap-1 md:top-10">
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
            className="animate-fade-in delay-3 pointer-events-none absolute right-0 top-1/2 hidden origin-center -translate-y-1/2 rotate-90 whitespace-nowrap font-mono text-[8px] tracking-[2px] text-white/30 lg:block"
          >
            APEX F1 · 2025 CHAMPIONSHIP SEASON
          </p>

          <div
            aria-hidden
            className="animate-fade-up delay-3 absolute bottom-10 left-0 w-[min(100%,34rem)] md:bottom-14"
          >
            <div className="h-[5px] w-full bg-amber" />
            <div className="mt-4 h-0.5 w-full bg-amber/30" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <span className="font-mono text-[9px] tracking-[2px] text-white/60">
          SCROLL TO DRIVE
        </span>
      </div>
    </section>
  );
}
