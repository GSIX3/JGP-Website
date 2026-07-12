/**
 * ShuffleHero — text + animated image shuffle grid
 *
 * Copy: ShuffleHero.tsx + ShuffleHero.css
 * Requires: framer-motion
 */

import { motion } from "framer-motion";
import { useEffect, useRef, useState, type ReactElement } from "react";
import "./ShuffleHero.css";

export type ShuffleHeroProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  images?: { id: number; src: string }[];
  shuffleIntervalMs?: number;
  className?: string;
  onCtaClick?: () => void;
};

const DEFAULT_SQUARES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
  },
];

function shuffle<T>(array: T[]): T[] {
  const next = [...array];
  let currentIndex = next.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [next[currentIndex], next[randomIndex]] = [
      next[randomIndex],
      next[currentIndex],
    ];
  }

  return next;
}

function generateSquares(images: { id: number; src: string }[]) {
  return shuffle(images).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="shuffle-hero__tile"
      style={{
        backgroundImage: `url(${sq.src})`,
      }}
    />
  ));
}

function ShuffleGrid({
  images,
  shuffleIntervalMs,
}: {
  images: { id: number; src: string }[];
  shuffleIntervalMs: number;
}) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState<ReactElement[]>(() =>
    generateSquares(images),
  );

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(generateSquares(images));
      timeoutRef.current = setTimeout(shuffleSquares, shuffleIntervalMs);
    };

    shuffleSquares();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [images, shuffleIntervalMs]);

  return <div className="shuffle-hero__grid">{squares}</div>;
}

export function ShuffleHero({
  eyebrow = "Better every day",
  title = "Let's change it up a bit",
  description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in error repellat voluptatibus ad.",
  ctaLabel = "Find a class",
  ctaHref = "#",
  images = DEFAULT_SQUARES,
  shuffleIntervalMs = 3000,
  className = "",
  onCtaClick,
}: ShuffleHeroProps) {
  return (
    <section
      className={`shuffle-hero${className ? ` ${className}` : ""}`}
      aria-labelledby="shuffle-hero-title"
    >
      <div className="shuffle-hero__inner">
        <div className="shuffle-hero__copy">
          <span className="shuffle-hero__eyebrow">{eyebrow}</span>
          <h2 id="shuffle-hero-title" className="shuffle-hero__title">
            {title}
          </h2>
          <p className="shuffle-hero__description">{description}</p>
          <a
            className="shuffle-hero__cta"
            href={ctaHref}
            onClick={onCtaClick}
          >
            {ctaLabel}
          </a>
        </div>
        <ShuffleGrid images={images} shuffleIntervalMs={shuffleIntervalMs} />
      </div>
    </section>
  );
}

export default ShuffleHero;
