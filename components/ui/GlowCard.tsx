import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps extends HTMLAttributes<HTMLDivElement> {
  glowColor?: string;
}

const GlowCard = forwardRef<HTMLDivElement, GlowCardProps>(
  ({ className, glowColor = "rgba(0,212,255,0.15)", children, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative rounded-xl border border-white/[0.06] bg-[#111318] p-6",
        className
      )}
      style={style}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 blur-xl transition-opacity duration-300"
        style={{ background: glowColor }}
      />
      {children}
    </div>
  )
);
GlowCard.displayName = "GlowCard";

export { GlowCard, type GlowCardProps };
