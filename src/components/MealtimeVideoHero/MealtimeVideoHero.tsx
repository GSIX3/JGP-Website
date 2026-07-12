/**
 * MealtimeVideoHero — collage hero + scroll-expand video
 *
 * Combines MealtimeHero with VideoScrollHero:
 * the green “Happy Users” box is replaced by the video start state;
 * scrolling expands that video into the full video hero.
 *
 * Copy folder + install framer-motion. Video: public/videos/hero.mp4
 */

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./MealtimeVideoHero.css";

export type MealtimeVideoHeroProps = {
  videoSrc?: string;
  enableAnimations?: boolean;
  title?: string;
  subtitle?: string;
  demoLabel?: string;
  demoHref?: string;
  ctaLabel?: string;
  ctaHref?: string;
  habitsStat?: string;
  groceriesStat?: string;
  videoEyebrow?: string;
  videoTitle?: string;
  videoTitleAccent?: string;
  videoSubtitle?: string;
  images?: {
    habits?: string;
    ramen?: string;
    groceries?: string;
    garden?: string;
  };
  onDemoClick?: () => void;
  onCtaClick?: () => void;
};

type Rect = { left: number; top: number; width: number; height: number };

const DEFAULT_IMAGES = {
  habits:
    "https://images.unsplash.com/photo-1654578513266-728fbe673710?auto=format&fit=crop&w=800&q=80",
  ramen:
    "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",
  groceries:
    "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?auto=format&fit=crop&w=800&q=80",
  garden:
    "https://images.unsplash.com/photo-1523348837708-15d4a54fcf0f?auto=format&fit=crop&w=700&q=80",
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function IconBasket() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 9h16l-1.2 9.2a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8L4 9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 9V7a4 4 0 0 1 8 0v2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 13h6M9 16h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCarrot() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9.5 8.5c2.8-2.8 8.2-1.4 8.2-1.4s1.4 5.4-1.4 8.2c-2.5 2.5-6.2 3.2-8.5 1.8L5 19.5 4.5 15c-1.4-2.3-.7-6 1.8-8.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 5.5 16 4M16.5 7.5 18.5 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCherry() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8.5" cy="15.5" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="14.5" cy="16.5" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M8.5 12.3C9.2 8.5 12 5 16.5 4.2c.2 1.8-.2 3.6-1.2 5.1"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBread() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 11c0-3.2 3.1-5.5 7-5.5s7 2.3 7 5.5v5.2a2.3 2.3 0 0 1-2.3 2.3H7.3A2.3 2.3 0 0 1 5 16.2V11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 9.2c.3-.1.7-.2 1.1-.2M12 8.8c.4 0 .8.05 1.2.15M15.7 9.2c.3.1.6.2.8.35"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function MealtimeVideoHero({
  videoSrc = "/videos/hero.mp4",
  enableAnimations = true,
  title = "Elevate Your Mealtime with AI-Powered Personalization",
  subtitle = "Effortless Planning, Healthier Eating",
  demoLabel = "Try Our Demo",
  demoHref = "#demo",
  ctaLabel = "Start For Free",
  ctaHref = "#start",
  habitsStat = "95% Improved Eating Habits",
  groceriesStat = "25% Saved on Groceries",
  videoEyebrow = "AI Meal Planning",
  videoTitle = "Elevate Your Mealtime",
  videoTitleAccent = "with AI",
  videoSubtitle = "Scroll to watch the experience expand — effortless planning, healthier eating.",
  images,
  onDemoClick,
  onCtaClick,
}: MealtimeVideoHeroProps) {
  const img = { ...DEFAULT_IMAGES, ...images };
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [flyStyle, setFlyStyle] = useState<CSSProperties>({
    opacity: 0,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const tryPlay = () => {
      void video.play().catch(() => {});
    };
    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    return () => video.removeEventListener("loadeddata", tryPlay);
  }, [videoSrc]);

  useEffect(() => {
    const animate = enableAnimations && !shouldReduceMotion;

    const update = () => {
      const track = trackRef.current;
      const sticky = stickyRef.current;
      const slot = slotRef.current;
      if (!track || !sticky || !slot) return;

      const trackRect = track.getBoundingClientRect();
      const stickyRect = sticky.getBoundingClientRect();
      const maxScroll = Math.max(1, track.offsetHeight - window.innerHeight);
      const scrolled = Math.max(0, -trackRect.top);
      const raw = Math.min(scrolled / maxScroll, 1);
      const t = animate ? easeInOutCubic(raw) : 1;
      setProgress(t);

      const slotRect = slot.getBoundingClientRect();
      /* Keep video at full slot size — grow downward only, never over buttons */
      const start: Rect = {
        left: slotRect.left - stickyRect.left,
        top: slotRect.top - stickyRect.top,
        width: slotRect.width,
        height: slotRect.height,
      };

      const targetWidth = Math.min(window.innerWidth * 0.9, 64 * 16);
      const targetHeight = window.innerHeight * 0.68;
      const end: Rect = {
        width: targetWidth,
        height: targetHeight,
        left: (stickyRect.width - targetWidth) / 2,
        top: (stickyRect.height - targetHeight) / 2,
      };

      const radiusStart = 28;
      const radiusEnd = 32;

      setFlyStyle({
        left: lerp(start.left, end.left, t),
        top: lerp(start.top, end.top, t),
        width: lerp(start.width, end.width, t),
        height: lerp(start.height, end.height, t),
        borderRadius: lerp(radiusStart, radiusEnd, t),
        border: "none",
        outline: "none",
        boxShadow: "none",
        opacity: 1,
        zIndex: t > 0.08 ? 8 : 4,
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [enableAnimations, shouldReduceMotion]);

  const collageOpacity = Math.max(0, 1 - progress * 1.35);
  const collageScale = lerp(1, 0.94, progress);
  const overlayOpacity = Math.max(0, (progress - 0.35) / 0.45);

  return (
    <section className="mvh" aria-labelledby="mvh-title">
      <div ref={trackRef} className="mvh__track">
        <div ref={stickyRef} className="mvh__sticky">
          <div
            className="mvh__collage-layer"
            style={{
              opacity: collageOpacity,
              transform: `scale(${collageScale})`,
              visibility: collageOpacity < 0.02 ? "hidden" : "visible",
            }}
          >
            <header className="mvh__header">
              <span className="mvh__float mvh__float--basket">
                <IconBasket />
              </span>
              <span className="mvh__float mvh__float--carrot">
                <IconCarrot />
              </span>
              <span className="mvh__float mvh__float--cherry">
                <IconCherry />
              </span>
              <span className="mvh__float mvh__float--bread">
                <IconBread />
              </span>
              <h1 id="mvh-title" className="mvh__title">
                {title}
              </h1>
              <p className="mvh__subtitle">{subtitle}</p>
            </header>

            <div className="mvh__collage">
              <div className="mvh__photo-wrap mvh__photo-wrap--ramen">
                <img
                  className="mvh__photo"
                  src={img.ramen}
                  alt="Bowl of noodle soup with greens"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <article className="mvh__card mvh__card--habits">
                <p className="mvh__card-label">{habitsStat}</p>
                <img
                  className="mvh__card-media"
                  src={img.habits}
                  alt="Fresh vegetables in a reusable mesh bag"
                  loading="lazy"
                  decoding="async"
                />
              </article>

              <div className="mvh__cta-col">
                <a
                  className="mvh__btn mvh__btn--ghost"
                  href={demoHref}
                  onClick={onDemoClick}
                >
                  {demoLabel}
                </a>
                <a
                  className="mvh__btn mvh__btn--solid"
                  href={ctaHref}
                  onClick={onCtaClick}
                >
                  {ctaLabel}
                </a>
                {/* Replaces the green “30 000 + Happy Users” box */}
                <div
                  ref={slotRef}
                  className="mvh__video-slot"
                  aria-hidden="true"
                />
              </div>

              <article className="mvh__card mvh__card--groceries">
                <img
                  className="mvh__card-media"
                  src={img.groceries}
                  alt="Grocery tote with fresh produce and bread"
                  loading="lazy"
                  decoding="async"
                />
                <p className="mvh__card-label">{groceriesStat}</p>
              </article>

              <div className="mvh__photo-wrap mvh__photo-wrap--garden">
                <img
                  className="mvh__photo"
                  src={img.garden}
                  alt="Harvesting leafy greens from a garden planter"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="mvh__video-fly" style={flyStyle}>
            <video
              ref={videoRef}
              className="mvh__video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>

            <div
              className="mvh__video-overlay"
              style={{ opacity: overlayOpacity }}
            >
              <div className="mvh__video-copy">
                <motion.span
                  className="mvh__eyebrow"
                  initial={false}
                  animate={{ opacity: overlayOpacity }}
                >
                  {videoEyebrow}
                </motion.span>
                <h2 className="mvh__video-title">
                  {videoTitle}
                  <span className="mvh__video-title-accent">
                    {videoTitleAccent}
                  </span>
                </h2>
                <p className="mvh__video-subtitle">{videoSubtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
