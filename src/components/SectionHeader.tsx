import { useRef, type CSSProperties, type ReactNode } from "react";
import { useScrollGrowUnderline } from "../hooks/useScrollGrowUnderline";

type SectionHeaderProps = {
  title: ReactNode;
  subtitle?: string;
  className?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const underlineStyle = useScrollGrowUnderline(headerRef, {
    fullOnArrival: true,
  });

  return (
    <div className={`section-header ${className}`.trim()} ref={headerRef}>
      <h1 style={underlineStyle as CSSProperties}>{title}</h1>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
