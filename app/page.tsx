import { Navigation } from "@/components/navigation";
import { ScrollVideo } from "@/components/scroll-video";
import { Hero } from "@/components/hero";
import { Specs } from "@/components/specs";
import { Engine } from "@/components/engine";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-x-clip text-ink">
      <ScrollVideo />
      <Navigation />
      {/* pt clears the fixed navbar (h-16 mobile / h-20 desktop) */}
      <div className="relative z-10 pt-16 md:pt-20">
        <Hero />
        <div className="relative">
          {/* Scrim over the film — eases in through the hero's tail,
              then holds at 15% dark for every section below */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-[20vh] bottom-0"
          >
            <div className="h-[20vh] w-full bg-gradient-to-b from-transparent to-black/70" />
            <div className="h-[calc(100%-20vh)] w-full bg-black/70" />
          </div>
          <div className="relative">
            <Specs />
            <Engine />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
