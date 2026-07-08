import { useEffect, useState, type CSSProperties, type RefObject } from "react";

const MIN_WIDTH = 48;

function getMaxWidth() {
  if (typeof window === "undefined") return 200;
  if (window.innerWidth < 480) return 110;
  if (window.innerWidth < 768) return 150;
  return 200;
}
type ScrollGrowUnderlineOptions = {
  /** When true, underline is fully expanded once the heading scrolls into view */
  fullOnArrival?: boolean;
};

export function useScrollGrowUnderline(
  targetRef: RefObject<HTMLElement | null>,
  options?: ScrollGrowUnderlineOptions,
): CSSProperties {
  const [width, setWidth] = useState(MIN_WIDTH);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    const update = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const maxWidth = getMaxWidth();

      if (options?.fullOnArrival) {
        const hasArrived =
          rect.top <= viewportHeight * 0.82 && rect.bottom > viewportHeight * 0.15;

        if (hasArrived) {
          setWidth(maxWidth);
          return;
        }
      }

      const start = viewportHeight * 0.95;
      const end = viewportHeight * 0.35;
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end)),
      );

      setWidth(MIN_WIDTH + progress * (maxWidth - MIN_WIDTH));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetRef, options?.fullOnArrival]);

  return { "--underline-width": `${width}px` } as CSSProperties;
}
