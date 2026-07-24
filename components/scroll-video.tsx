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
    let ready = false;

    const targetTime = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return 0.001;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      return Math.min(
        Math.max(progress * (video.duration - 0.05), 0.001),
        video.duration - 0.05,
      );
    };

    const seekTo = (time: number) => {
      try {
        if (Math.abs(video.currentTime - time) > 0.005) {
          video.currentTime = time;
        }
      } catch {
        // Browser may reject seeks until enough data is buffered
      }
    };

    const paintFrame = () => {
      if (cancelled || !Number.isFinite(video.duration)) return;
      smoothed = targetTime();
      seekTo(smoothed);
    };

    /** Decode + paint the first frame — needed in Safari / cold caches */
    const kickDecoder = () => {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.then === "function") {
        void playPromise
          .then(() => {
            video.pause();
            paintFrame();
          })
          .catch(() => {
            paintFrame();
          });
      } else {
        paintFrame();
      }
    };

    const markReady = () => {
      if (cancelled || ready) return;
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      ready = true;
      kickDecoder();
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      lastFrame = performance.now();
      if (!ready || video.readyState < 2) return;

      const target = targetTime();
      smoothed += (target - smoothed) * 0.16;
      if (Math.abs(target - smoothed) < 0.01) smoothed = target;
      seekTo(smoothed);
    };

    const scrub = () => {
      if (!ready || video.readyState < 2) return;
      if (performance.now() - lastFrame > 200) {
        smoothed = targetTime();
        seekTo(smoothed);
      }
    };

    const onVisible = () => {
      if (document.visibilityState === "visible" && ready) {
        kickDecoder();
      }
    };

    video.addEventListener("loadedmetadata", markReady);
    video.addEventListener("loadeddata", markReady);
    video.addEventListener("canplay", markReady);
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("scroll", scrub, { passive: true });
    window.addEventListener("resize", scrub, { passive: true });

    // Start streaming immediately so a frame shows before the full blob lands
    video.src = VIDEO;
    video.load();
    if (video.readyState >= 1) markReady();

    // Upgrade to a fully buffered blob for snappier seeks once ready
    const upgrade = async () => {
      try {
        const res = await fetch(VIDEO, { cache: "force-cache" });
        if (!res.ok || cancelled) return;
        const blob = await res.blob();
        if (cancelled) return;

        const time = video.currentTime || targetTime();
        objectUrl = URL.createObjectURL(blob);
        ready = false;
        video.src = objectUrl;
        video.load();

        const restore = () => {
          if (cancelled) return;
          ready = true;
          seekTo(time);
          kickDecoder();
        };
        video.addEventListener("loadeddata", restore, { once: true });
        if (video.readyState >= 2) restore();
      } catch {
        // Keep streaming from the original URL
      }
    };
    void upgrade();

    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", scrub);
      window.removeEventListener("resize", scrub);
      document.removeEventListener("visibilitychange", onVisible);
      video.removeEventListener("loadedmetadata", markReady);
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("canplay", markReady);
      video.pause();
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
