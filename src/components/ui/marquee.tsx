import * as React from "react";
import { cn } from "../../lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: number;
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn("z-10 mt-10 w-full overflow-hidden sm:mt-16", className)}
      {...props}
    >
      <div className="relative flex w-full overflow-hidden py-8">
        <div
          className={cn(
            "flex w-max",
            pauseOnHover && "hover:[animation-play-state:paused]",
          )}
          style={
            {
              "--duration": `${speed}s`,
              animation: `marquee var(--duration) linear infinite ${direction === "right" ? "reverse" : "normal"}`,
            } as React.CSSProperties
          }
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}
