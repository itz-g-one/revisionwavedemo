import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    // Start exit animation
    setIsAnimating(true);
    
    // After a brief delay, update children and start enter animation
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsAnimating(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname, children]);

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-out",
        isAnimating 
          ? "opacity-0 translate-y-2" 
          : "opacity-100 translate-y-0"
      )}
    >
      {displayChildren}
    </div>
  );
}
