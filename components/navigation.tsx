const LINKS = [
  { label: "TEAM", href: "#team" },
  { label: "RACES", href: "#races" },
  { label: "CARS", href: "#cars", active: true },
  { label: "DRIVERS", href: "#drivers" },
  { label: "PARTNERS", href: "#partners" },
] as const;

export function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 flex h-20 w-full items-center border-b border-white/10 bg-[#040508] px-page">
      <a
        href="/"
        className="font-bebas shrink-0 text-[30px] tracking-[3px] text-white"
      >
        Garaje
      </a>

      <div className="mx-auto hidden h-full min-w-0 flex-1 items-center justify-center gap-[clamp(1.25rem,3vw,2.75rem)] md:flex">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`relative flex h-full items-center font-condensed text-[13px] font-semibold tracking-[2.5px] transition-colors duration-300 ${
              link.active
                ? "text-white"
                : "text-white/50 hover:text-white"
            }`}
          >
            {link.label}
            {link.active ? (
              <span
                aria-hidden
                className="absolute bottom-0 left-1/2 h-0.5 w-11 -translate-x-1/2 bg-amber-hot"
              />
            ) : null}
          </a>
        ))}
      </div>

      <a
        href="#tickets"
        className="ml-auto inline-flex shrink-0 items-center justify-center bg-amber px-7 py-3.5 font-condensed text-[13px] font-bold tracking-[2px] text-cta-ink transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-amber-hot active:scale-[0.98] md:ml-0"
      >
        GET TICKETS
      </a>
    </header>
  );
}
