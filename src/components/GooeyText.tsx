import { useEffect, useRef } from "react";
import "../styles/gooeyText.css";

interface GooeyTextProps {
  text: string;
  morphTime?: number;
  className?: string;
  textClassName?: string;
}

export default function GooeyText({
  text,
  morphTime = 1,
  className = "",
  textClassName = "",
}: GooeyTextProps) {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const filterId = useRef(
    `gooey-filter-${Math.random().toString(36).slice(2)}`,
  );
  const prevTextRef = useRef(text);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (text1Ref.current) text1Ref.current.textContent = text;
    if (text2Ref.current) text2Ref.current.textContent = text;
  }, []);

  useEffect(() => {
    if (text === prevTextRef.current) return;
    const oldText = prevTextRef.current;
    const newText = text;
    prevTextRef.current = text;

    if (!text1Ref.current || !text2Ref.current) return;
    text1Ref.current.textContent = oldText;
    text2Ref.current.textContent = newText;

    const startTime = performance.now();

    const setMorph = (fraction: number) => {
      if (!text1Ref.current || !text2Ref.current) return;
      text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const inverseFraction = 1 - fraction;
      text1Ref.current.style.filter = `blur(${Math.min(8 / inverseFraction - 8, 100)}px)`;
      text1Ref.current.style.opacity = `${Math.pow(inverseFraction, 0.4) * 100}%`;
    };

    function animate(now: number) {
      const elapsed = (now - startTime) / 1000;
      const fraction = elapsed / morphTime;

      if (fraction >= 1) {
        if (text1Ref.current && text2Ref.current) {
          text1Ref.current.textContent = newText;
          text1Ref.current.style.filter = "";
          text1Ref.current.style.opacity = "100%";
          text2Ref.current.style.filter = "";
          text2Ref.current.style.opacity = "0%";
        }
        return;
      }

      setMorph(Math.max(fraction, 0.001));
      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, morphTime]);

  return (
    <div className={`gooey-text-wrapper ${className}`}>
      <svg className="gooey-svg-filter" aria-hidden="true" focusable="false">
        <defs>
          <filter id={filterId.current}>
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
      <div
        className="gooey-text-inner"
        style={{ filter: `url(#${filterId.current})` }}
      >
        <span className={`gooey-text-sizer ${textClassName}`} aria-hidden="true">
          {text}
        </span>
        <span ref={text1Ref} className={`gooey-text-span ${textClassName}`} />
        <span ref={text2Ref} className={`gooey-text-span ${textClassName}`} />
      </div>
    </div>
  );
}
