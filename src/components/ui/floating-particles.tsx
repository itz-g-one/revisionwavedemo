import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

// Reduced particle count for mobile, static positioning to avoid repaints
export function FloatingParticles({ count = 20, className = "" }: FloatingParticlesProps) {
  // Reduce count on mobile for performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const actualCount = isMobile ? Math.min(count, 8) : Math.min(count, 12);
  
  // Memoize particles to avoid recalculation
  const particles = useMemo(() => {
    const result: Particle[] = [];
    for (let i = 0; i < actualCount; i++) {
      result.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 2,
      });
    }
    return result;
  }, [actualCount]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/15 will-change-auto"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
}

// Simplified glow orbs - static, no animations for better performance
export function GlowOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
      {/* Large primary orb - static, reduced blur on mobile */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-2xl md:blur-3xl" />
      
      {/* Secondary orb - static */}
      <div className="absolute top-1/2 -left-40 w-60 h-60 bg-secondary/20 rounded-full blur-2xl md:blur-3xl" />
    </div>
  );
}
