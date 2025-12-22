import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "scale" | "fade";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
}

const animationClasses: Record<AnimationType, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  scale: {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  fade: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
};

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });

  const { hidden, visible } = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? visible : hidden,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

interface StaggeredChildrenProps {
  children: ReactNode[];
  className?: string;
  childClassName?: string;
  animation?: AnimationType;
  staggerDelay?: number;
  threshold?: number;
}

export function StaggeredChildren({
  children,
  className,
  childClassName,
  animation = "fade-up",
  staggerDelay = 100,
  threshold = 0.1,
}: StaggeredChildrenProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });

  const { hidden, visible } = animationClasses[animation];

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={cn(
            "transition-all duration-700 ease-out",
            isVisible ? visible : hidden,
            childClassName
          )}
          style={{ transitionDelay: `${index * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
