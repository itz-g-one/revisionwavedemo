import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Star, Zap, Rocket, Target, Lightbulb, Palette, Video } from "lucide-react";

interface EnhancedBubbleTagProps {
  label: string;
  rotation?: number;
  hoverBgColor?: string;
  hoverTextColor?: string;
  delay?: number;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  floatSpeed?: "slow" | "medium" | "fast";
  className?: string;
}

export function EnhancedBubbleTag({
  label,
  rotation = 0,
  hoverBgColor = "hsl(var(--primary))",
  hoverTextColor = "hsl(var(--primary-foreground))",
  delay = 0,
  size = "md",
  icon,
  floatSpeed = "medium",
  className,
}: EnhancedBubbleTagProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const floatDurations = {
    slow: "8s",
    medium: "5s",
    fast: "3s",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-medium cursor-pointer",
        "transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        "border-2 border-border/30",
        "animate-bubble-in",
        sizeClasses[size],
        className
      )}
      style={{
        transform: `rotate(${rotation}deg) scale(${isHovered ? 1.1 : 1}) translateY(${isHovered ? '-4px' : '0'})`,
        backgroundColor: isHovered ? hoverBgColor : "hsl(var(--background))",
        color: isHovered ? hoverTextColor : "hsl(var(--foreground))",
        animationDelay: `${delay}s`,
        boxShadow: isHovered 
          ? `0 12px 30px -5px ${hoverBgColor}50` 
          : "0 4px 15px -3px hsl(var(--foreground) / 0.08)",
        animation: `bubble-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s backwards, float ${floatDurations[floatSpeed]} ease-in-out infinite ${delay + 0.5}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && <span className="opacity-75">{icon}</span>}
      {label}
    </span>
  );
}

// Enhanced tags data for CTA section
export const enhancedTags = [
  { 
    text: "Website Design", 
    rotation: -8, 
    hoverBgColor: "#3b82f6",
    size: "lg" as const,
    icon: <Palette className="w-4 h-4" />,
    floatSpeed: "slow" as const,
  },
  { 
    text: "AI Automation", 
    rotation: 6, 
    hoverBgColor: "#10b981",
    size: "md" as const,
    icon: <Zap className="w-3.5 h-3.5" />,
    floatSpeed: "medium" as const,
  },
  { 
    text: "Branding", 
    rotation: -4, 
    hoverBgColor: "#f59e0b",
    size: "sm" as const,
    floatSpeed: "fast" as const,
  },
  { 
    text: "Content Strategy", 
    rotation: 8, 
    hoverBgColor: "#ef4444",
    size: "md" as const,
    icon: <Target className="w-3.5 h-3.5" />,
    floatSpeed: "slow" as const,
  },
  { 
    text: "Video Production", 
    rotation: -6, 
    hoverBgColor: "#8b5cf6",
    size: "lg" as const,
    icon: <Video className="w-4 h-4" />,
    floatSpeed: "medium" as const,
  },
  { 
    text: "Personal Branding", 
    rotation: 5, 
    hoverBgColor: "#ec4899",
    size: "md" as const,
    floatSpeed: "fast" as const,
  },
  { 
    text: "Performance Ads", 
    rotation: -7, 
    hoverBgColor: "#06b6d4",
    size: "sm" as const,
    icon: <Rocket className="w-3 h-3" />,
    floatSpeed: "slow" as const,
  },
  { 
    text: "Social Media", 
    rotation: 4, 
    hoverBgColor: "#f97316",
    size: "md" as const,
    floatSpeed: "medium" as const,
  },
  { 
    text: "SEO Strategy", 
    rotation: -5, 
    hoverBgColor: "#84cc16",
    size: "sm" as const,
    floatSpeed: "fast" as const,
  },
  { 
    text: "Growth Hacking", 
    rotation: 7, 
    hoverBgColor: "#14b8a6",
    size: "lg" as const,
    icon: <Sparkles className="w-4 h-4" />,
    floatSpeed: "slow" as const,
  },
  { 
    text: "Email Marketing", 
    rotation: -3, 
    hoverBgColor: "#a855f7",
    size: "sm" as const,
    floatSpeed: "medium" as const,
  },
  { 
    text: "Analytics", 
    rotation: 6, 
    hoverBgColor: "#0ea5e9",
    size: "md" as const,
    floatSpeed: "fast" as const,
  },
];
