import { useState } from "react";
import { cn } from "@/lib/utils";

interface BubbleTagProps {
  label: string;
  rotation?: number;
  hoverBgColor?: string;
  hoverTextColor?: string;
  delay?: number;
  className?: string;
}

export function BubbleTag({
  label,
  rotation = 0,
  hoverBgColor = "hsl(var(--primary))",
  hoverTextColor = "hsl(var(--primary-foreground))",
  delay = 0,
  className,
}: BubbleTagProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={cn(
        "inline-block px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer",
        "transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        "border-2 border-border/30 shadow-md",
        "animate-bubble-in",
        className
      )}
      style={{
        transform: `rotate(${rotation}deg) scale(${isHovered ? 1.1 : 1})`,
        backgroundColor: isHovered ? hoverBgColor : "hsl(var(--background))",
        color: isHovered ? hoverTextColor : "hsl(var(--foreground))",
        animationDelay: `${delay}s`,
        boxShadow: isHovered 
          ? `0 8px 25px -5px ${hoverBgColor}40` 
          : "0 4px 15px -3px hsl(var(--foreground) / 0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </span>
  );
}
