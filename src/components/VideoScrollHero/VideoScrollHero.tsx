/**
 * VideoScrollHero — portable scroll-scale video hero
 *
 * Copy this folder into another project:
 *   VideoScrollHero.tsx
 *   VideoScrollHero.css
 *   index.ts (optional)
 *
 * Requires: framer-motion
 * Color theme matches MealtimeHero (forest + lime on cream).
 */

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./VideoScrollHero.css";

export type VideoScrollHeroProps = {
  videoSrc?: string;
  posterSrc?: string;
  enableAnimations?: boolean;
  className?: string;
  startScale?: number;
  eyebrow?: string;
  title?: string;
  titleAccent?: string;
  subtitle?: string;
};

export function VideoScrollHero({
  videoSrc = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  posterSrc,
  enableAnimations = true,
  className = "",
  startScale = 0.25,
  eyebrow = "AI Meal Planning",
  title = "Elevate Your Mealtime",
  titleAccent = "with AI",
  subtitle = "Scroll to watch the experience expand — effortless planning, healthier eating.",
}: VideoScrollHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [scrollScale, setScrollScale] = useState(startScale);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      void video.play().catch(() => {
        /* Autoplay may be blocked; muted + playsInline usually works */
      });
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    return () => video.removeEventListener("loadeddata", tryPlay);
  }, [videoSrc]);

  useEffect(() => {
    if (!enableAnimations || shouldReduceMotion) {
      setScrollScale(1);
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const maxScroll = Math.max(1, containerHeight - windowHeight);
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollScale(startScale + progress * (1 - startScale));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableAnimations, shouldReduceMotion, startScale]);

  const shouldAnimate = enableAnimations && !shouldReduceMotion;

  return (
    <section
      className={`video-scroll-hero${className ? ` ${className}` : ""}`}
      aria-labelledby="video-scroll-hero-title"
    >
      <div ref={containerRef} className="video-scroll-hero__track">
        <div className="video-scroll-hero__sticky">
          <div
            className="video-scroll-hero__stage"
            style={{
              transform: shouldAnimate ? `scale(${scrollScale})` : "scale(1)",
            }}
          >
            <video
              ref={videoRef}
              className="video-scroll-hero__video"
              autoPlay
              loop
              muted
              playsInline
              poster={posterSrc}
              preload="auto"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <motion.div
              className="video-scroll-hero__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              <div className="video-scroll-hero__copy">
                {eyebrow ? (
                  <motion.span
                    className="video-scroll-hero__eyebrow"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.55,
                      duration: 0.7,
                      type: "spring",
                      stiffness: 200,
                      damping: 24,
                    }}
                  >
                    {eyebrow}
                  </motion.span>
                ) : null}

                <motion.h1
                  id="video-scroll-hero-title"
                  className="video-scroll-hero__title"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                  }}
                >
                  {title}
                  {titleAccent ? (
                    <span className="video-scroll-hero__title-accent">
                      {titleAccent}
                    </span>
                  ) : null}
                </motion.h1>

                <motion.p
                  className="video-scroll-hero__subtitle"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.9,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                  }}
                >
                  {subtitle}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoScrollHero;
