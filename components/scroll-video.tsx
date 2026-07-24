"use client";

import { useEffect, useRef } from "react";

// All-intra encode (every frame a keyframe) — required for smooth scrubbing
const VIDEO = "/hero/hero-scrub.mp4";

/**
 * Pinned full-viewport video scrubbed by page scroll — the film never
 * plays on its own; scroll position is the timeline.
 */
export function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let objectUrl: string | null = null;
    let cancelled = false;
    let raf = 0;
    let smoothed = 0;
    let lastFrame = 0;

    const targetTime = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      return progress * (video.duration - 0.05);
    };

    // Smoothed scrub — runs every frame in normal browsers
    const tick = () => {
      raf = requestAnimationFrame(tick);
      lastFrame = performance.now();
      if (!video.duration || video.readyState < 2) return;

      const target = targetTime();
      smoothed += (target - smoothed) * 0.16;
      if (Math.abs(target - smoothed) < 0.01) smoothed = target;
      if (Math.abs(video.currentTime - smoothed) > 0.005) {
        video.currentTime = smoothed;
      }
    };

    // Fallback for contexts where rAF is throttled (hidden/embedded views):
    // seek directly on the scroll event instead
    const scrub = () => {
      if (!video.duration || video.readyState < 2) return;
      if (performance.now() - lastFrame > 200) {
        video.currentTime = smoothed = targetTime();
      }
    };

    // Fully buffer the file so currentTime seeks resolve instantly
    const load = async () => {
      try {
        const res = await fetch(VIDEO);
        const blob = await res.blob();
        if (cancelled) return;
        objectUrl = URL.createObjectURL(blob);
        video.src = objectUrl;
      } catch {
        video.src = VIDEO; // stream it as a fallback
      }
      video.load();
      video.addEventListener(
        "loadeddata",
        () => {
          // Nudge off 0 so the browser paints a frame instead of the poster
          video.currentTime = smoothed = Math.max(targetTime(), 0.001);
        },
        { once: true },
      );
    };
    void load();

    window.addEventListener("scroll", scrub, { passive: true });
    window.addEventListener("resize", scrub, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", scrub);
      window.removeEventListener("resize", scrub);
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-x-0 bottom-0 top-20 z-0">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
