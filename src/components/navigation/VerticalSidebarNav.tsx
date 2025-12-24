import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface NavSection {
  id: string;
  emoji: string;
  label: string;
}

const sections: NavSection[] = [
  { id: "hero", emoji: "🏠", label: "Home" },
  { id: "services", emoji: "⚡", label: "Services" },
  { id: "personal-branding", emoji: "✨", label: "Branding" },
  { id: "why-us", emoji: "🏆", label: "Why Us" },
  { id: "contact", emoji: "💬", label: "Contact" },
  { id: "faq", emoji: "❓", label: "FAQs" },
];

// Simplified sections for mobile (5 items)
const mobileSections: NavSection[] = [
  { id: "hero", emoji: "🏠", label: "Home" },
  { id: "services", emoji: "⚡", label: "Services" },
  { id: "why-us", emoji: "🏆", label: "Why Us" },
  { id: "contact", emoji: "💬", label: "Contact" },
  { id: "faq", emoji: "❓", label: "FAQs" },
];

export function VerticalSidebarNav() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isVisible, setIsVisible] = useState(false);

  // Fade in on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        {
          threshold: 0.3,
          rootMargin: "-20% 0px -20% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleClick = useCallback((id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      {/* Desktop Vertical Sidebar - Compact & Elegant */}
      <nav
        className={cn(
          "fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center transition-all duration-500",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        )}
        aria-label="Section navigation"
      >
        {/* Glass container */}
        <div className="bg-card/80 backdrop-blur-md rounded-full p-1.5 border border-border/50 shadow-lg">
          {/* Connecting line inside */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 rounded-full bg-gradient-to-b from-primary/30 via-primary/20 to-secondary/30" />
          
          <div className="flex flex-col gap-1 relative">
            {sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <div key={section.id} className="relative group">
                  {/* Tooltip */}
                  <div
                    className={cn(
                      "absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md whitespace-nowrap",
                      "bg-secondary text-secondary-foreground text-xs font-medium",
                      "opacity-0 translate-x-1 pointer-events-none transition-all duration-200",
                      "group-hover:opacity-100 group-hover:translate-x-0"
                    )}
                  >
                    {section.label}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                      <div className="border-4 border-transparent border-l-secondary" />
                    </div>
                  </div>

                  {/* Icon Button - Smaller */}
                  <button
                    onClick={() => handleClick(section.id)}
                    aria-label={`Navigate to ${section.label} section`}
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
                      isActive
                        ? "bg-primary shadow-md scale-105"
                        : "bg-transparent hover:bg-primary/10 hover:scale-105"
                    )}
                    style={{
                      boxShadow: isActive
                        ? "0 2px 8px hsla(45, 100%, 51%, 0.35)"
                        : undefined,
                    }}
                  >
                    <span className={cn(
                      "text-sm transition-transform duration-300",
                      isActive ? "scale-110" : "grayscale-[30%] group-hover:grayscale-0"
                    )}>
                      {section.emoji}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - Compact */}
      <nav
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-500",
          "bg-card/95 backdrop-blur-md border-t border-border/50 shadow-lg",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        aria-label="Mobile section navigation"
      >
        <div className="flex items-center justify-around h-14 px-1">
          {mobileSections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                aria-label={`Navigate to ${section.label} section`}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 py-1.5 px-2 rounded-lg transition-all duration-300",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                )}
              >
                <div
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300",
                    isActive ? "bg-primary scale-110" : "bg-transparent"
                  )}
                  style={{
                    boxShadow: isActive
                      ? "0 2px 6px hsla(45, 100%, 51%, 0.35)"
                      : undefined,
                  }}
                >
                  <span className={cn(
                    "text-sm transition-transform duration-300",
                    isActive ? "scale-105" : "grayscale-[30%]"
                  )}>
                    {section.emoji}
                  </span>
                </div>
                <span
                  className={cn(
                    "text-[9px] font-medium transition-colors duration-300",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {section.label}
                </span>
              </button>
            );
          })}
        </div>
        <div className="h-safe-area-inset-bottom bg-card" />
      </nav>
    </>
  );
}