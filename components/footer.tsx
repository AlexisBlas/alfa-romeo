const COLUMNS = [
  {
    title: "TEAM",
    links: ["About", "Drivers", "Engineering", "Careers"],
  },
  {
    title: "SEASON",
    links: ["Races", "Standings", "Tickets", "Hospitality"],
  },
  {
    title: "FOLLOW",
    links: ["Instagram", "YouTube", "X / Twitter", "Newsletter"],
  },
] as const;

export function Footer() {
  return (
    <footer className="w-full px-page pb-8 pt-16 text-white md:pt-20">
      <div className="flex flex-col justify-between gap-12 md:flex-row">
        <div className="max-w-[22rem]">
          <p className="font-bebas text-[36px] tracking-[3px]">Garaje</p>
          <p className="mt-4 font-body text-[15px] leading-[1.6] text-white/50">
            A love letter to the machines that turned racing into art. Fictional
            concept case for portfolio purposes.
          </p>
        </div>

        <div className="flex flex-wrap gap-14 md:gap-20">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="font-mono text-[10px] tracking-[2px] text-amber">
                {column.title}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-condensed text-[14px] font-semibold tracking-[1.5px] text-white/60 transition-colors duration-300 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
        <p className="font-mono text-[9px] tracking-[1.5px] text-white/40">
          © 2026 GARAJE — FICTIONAL PORTFOLIO CASE. NOT AFFILIATED WITH ALFA
          ROMEO.
        </p>
        <a
          href="https://humbol.studio"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[9px] tracking-[1.5px] text-white/40 transition-colors duration-300 hover:text-amber"
        >
          BUILT BY HUMBOL STUDIOS
        </a>
      </div>
    </footer>
  );
}
