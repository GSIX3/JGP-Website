/**
 * MealtimeHero — portable collage hero
 *
 * Copy this folder into another project:
 *   MealtimeHero.tsx
 *   MealtimeHero.css
 *   index.ts (optional)
 *
 * Usage:
 *   import MealtimeHero from "./components/MealtimeHero";
 *   <MealtimeHero />
 *
 * No Tailwind required. Pass props to customize copy, links, and images.
 */

import "./MealtimeHero.css";

export type MealtimeHeroProps = {
  title?: string;
  subtitle?: string;
  demoLabel?: string;
  demoHref?: string;
  ctaLabel?: string;
  ctaHref?: string;
  usersCount?: string;
  usersLabel?: string;
  habitsStat?: string;
  groceriesStat?: string;
  images?: {
    habits?: string;
    ramen?: string;
    groceries?: string;
    garden?: string;
  };
  onDemoClick?: () => void;
  onCtaClick?: () => void;
};

const DEFAULT_IMAGES = {
  /* Hand + green mesh produce bag */
  habits:
    "https://images.unsplash.com/photo-1654578513266-728fbe673710?auto=format&fit=crop&w=800&q=80",
  /* Asian noodle / ramen bowl */
  ramen:
    "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",
  /* Grocery tote with bread & greens */
  groceries:
    "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?auto=format&fit=crop&w=800&q=80",
  /* Harvesting leafy greens from a planter */
  garden:
    "https://images.unsplash.com/photo-1523348837708-15d4a54fcf0f?auto=format&fit=crop&w=700&q=80",
};

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

export default function MealtimeHero({
  title = "Elevate Your Mealtime with AI-Powered Personalization",
  subtitle = "Effortless Planning, Healthier Eating",
  demoLabel = "Try Our Demo",
  demoHref = "#demo",
  ctaLabel = "Start For Free",
  ctaHref = "#start",
  usersCount = "30 000 +",
  usersLabel = "Happy Users",
  habitsStat = "95% Improved Eating Habits",
  groceriesStat = "25% Saved on Groceries",
  images,
  onDemoClick,
  onCtaClick,
}: MealtimeHeroProps) {
  const img = { ...DEFAULT_IMAGES, ...images };

  return (
    <section className="mealtime-hero" aria-labelledby="mealtime-hero-title">
      <div className="mealtime-hero__inner">
        <header className="mealtime-hero__header">
          <span className="mealtime-hero__float mealtime-hero__float--basket">
            <IconBasket />
          </span>
          <span className="mealtime-hero__float mealtime-hero__float--carrot">
            <IconCarrot />
          </span>
          <span className="mealtime-hero__float mealtime-hero__float--cherry">
            <IconCherry />
          </span>
          <span className="mealtime-hero__float mealtime-hero__float--bread">
            <IconBread />
          </span>

          <h1 id="mealtime-hero-title" className="mealtime-hero__title">
            {title}
          </h1>
          <p className="mealtime-hero__subtitle">{subtitle}</p>
        </header>

        <div className="mealtime-hero__collage">
          <div className="mealtime-hero__photo-wrap mealtime-hero__photo-wrap--ramen">
            <img
              className="mealtime-hero__photo"
              src={img.ramen}
              alt="Bowl of noodle soup with greens"
              loading="lazy"
              decoding="async"
            />
          </div>

          <article className="mealtime-hero__card mealtime-hero__card--habits">
            <p className="mealtime-hero__card-label">{habitsStat}</p>
            <img
              className="mealtime-hero__card-media"
              src={img.habits}
              alt="Fresh vegetables in a reusable mesh bag"
              loading="lazy"
              decoding="async"
            />
          </article>

          <div className="mealtime-hero__cta-col">
            <a
              className="mealtime-hero__btn mealtime-hero__btn--ghost"
              href={demoHref}
              onClick={onDemoClick}
            >
              {demoLabel}
            </a>
            <a
              className="mealtime-hero__btn mealtime-hero__btn--solid"
              href={ctaHref}
              onClick={onCtaClick}
            >
              {ctaLabel}
            </a>
            <div className="mealtime-hero__stat">
              <span className="mealtime-hero__stat-value">{usersCount}</span>
              <span className="mealtime-hero__stat-label">{usersLabel}</span>
            </div>
          </div>

          <article className="mealtime-hero__card mealtime-hero__card--groceries">
            <img
              className="mealtime-hero__card-media"
              src={img.groceries}
              alt="Grocery tote with fresh produce and bread"
              loading="lazy"
              decoding="async"
            />
            <p className="mealtime-hero__card-label">{groceriesStat}</p>
          </article>

          <div className="mealtime-hero__photo-wrap mealtime-hero__photo-wrap--garden">
            <img
              className="mealtime-hero__photo"
              src={img.garden}
              alt="Harvesting leafy greens from a garden planter"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
