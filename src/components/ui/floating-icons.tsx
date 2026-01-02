import { Laptop, BarChart3, Lightbulb, Star, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingIconProps {
  className?: string;
}

// Reduced icons for better performance
const icons = [
  { Icon: Laptop, position: "top-4 -left-4" },
  { Icon: BarChart3, position: "top-8 -right-8" },
  { Icon: Sparkles, position: "bottom-1/4 -right-6" },
];

export function FloatingIcons({ className }: FloatingIconProps) {
  return (
    <>
      {icons.map(({ Icon, position }, index) => (
        <div
          key={index}
          className={cn(
            "absolute w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20",
            "opacity-80 hidden md:flex",
            position,
            className
          )}
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

// Reduced dots count and hidden on mobile
export function DecorativeDots({ count = 10, className }: DecorativeDotsProps) {
  // Pre-compute positions for consistency
  const positions = [
    { left: '15%', top: '20%' },
    { left: '35%', top: '45%' },
    { left: '55%', top: '15%' },
    { left: '75%', top: '60%' },
    { left: '25%', top: '80%' },
    { left: '85%', top: '35%' },
    { left: '10%', top: '55%' },
    { left: '65%', top: '85%' },
    { left: '45%', top: '70%' },
    { left: '90%', top: '10%' },
  ];
  
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none hidden md:block", className)}>
      {positions.slice(0, count).map((pos, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/15"
          style={pos}
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
    "absolute pointer-events-none hidden md:block",
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
      className={cn(baseClasses, "bg-primary/5 rounded-[40%_60%_60%_40%/60%_40%_60%_40%]")}
    />
  );
}
