import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  from?: string;
  to?: string;
}

const GradientText = forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, from = "#00D4FF", to = "#FFFFFF", children, style, ...props }, ref) => (
    <span
      ref={ref}
      className={cn("bg-clip-text text-transparent", className)}
      style={{
        backgroundImage: `linear-gradient(to right, ${from}, ${to})`,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  )
);
GradientText.displayName = "GradientText";

export { GradientText, type GradientTextProps };
