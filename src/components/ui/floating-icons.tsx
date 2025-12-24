import { Laptop, BarChart3, Lightbulb, Star, Sparkles, Zap, Rocket, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingIconProps {
  className?: string;
}

const icons = [
  { Icon: Laptop, position: "top-4 -left-4", delay: "0s", duration: "4s" },
  { Icon: BarChart3, position: "top-8 -right-8", delay: "1s", duration: "5s" },
  { Icon: Lightbulb, position: "-bottom-4 left-8", delay: "0.5s", duration: "4.5s" },
  { Icon: Star, position: "top-1/3 -left-12", delay: "1.5s", duration: "3.5s" },
  { Icon: Sparkles, position: "bottom-1/4 -right-6", delay: "0.8s", duration: "4.2s" },
  { Icon: Zap, position: "top-1/4 right-4", delay: "2s", duration: "3.8s" },
];

export function FloatingIcons({ className }: FloatingIconProps) {
  return (
    <>
      {icons.map(({ Icon, position, delay, duration }, index) => (
        <div
          key={index}
          className={cn(
            "absolute w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center backdrop-blur-sm border border-primary/20",
            "animate-float opacity-80",
            position,
            className
          )}
          style={{
            animationDelay: delay,
            animationDuration: duration,
          }}
        >
          <Icon className="w-5 h-5 text-primary" />
        </div>
      ))}
    </>
  );
}

interface DecorativeDotsProps {
  count?: number;
  className?: string;
}

export function DecorativeDots({ count = 20, className }: DecorativeDotsProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

interface DecoratveShapeProps {
  variant?: "circle" | "ring" | "blob";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function DecorativeShape({ variant = "circle", className, size = "md" }: DecoratveShapeProps) {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-40 h-40",
    lg: "w-64 h-64",
  };

  const baseClasses = cn(
    "absolute pointer-events-none",
    sizeClasses[size],
    className
  );

  if (variant === "circle") {
    return <div className={cn(baseClasses, "rounded-full bg-primary/5")} />;
  }

  if (variant === "ring") {
    return (
      <div className={cn(baseClasses, "rounded-full border-2 border-primary/10")} />
    );
  }

  return (
    <div
      className={cn(baseClasses, "bg-primary/5")}
      style={{
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
      }}
    />
  );
}
