import { useState, useEffect, useCallback } from "react";
import { Home, Briefcase, Sparkles, Award, Mail, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavSection {
  id: string;
  icon: React.ElementType;
  label: string;
}

const sections: NavSection[] = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "services", icon: Briefcase, label: "Services" },
  { id: "personal-branding", icon: Sparkles, label: "Personal Branding" },
  { id: "why-us", icon: Award, label: "Why Us" },
  { id: "contact", icon: Mail, label: "Contact" },
  { id: "faq", icon: HelpCircle, label: "FAQs" },
];

// Simplified sections for mobile (5 items)
const mobileSections: NavSection[] = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "services", icon: Briefcase, label: "Services" },
  { id: "why-us", icon: Award, label: "Why Us" },
  { id: "contact", icon: Mail, label: "Contact" },
  { id: "faq", icon: HelpCircle, label: "FAQs" },
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
      const offset = 80; // Account for fixed header
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
      {/* Desktop Vertical Sidebar */}
      <nav
        className={cn(
          "fixed right-5 lg:right-10 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center transition-all duration-500",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        )}
        aria-label="Section navigation"
      >
        {/* Connecting line */}
        <div 
          className="absolute top-3 bottom-3 w-[3px] rounded-full bg-gradient-to-b from-primary via-primary/50 to-secondary"
          style={{ zIndex: -1 }}
        />

        <div className="flex flex-col gap-4">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            const Icon = section.icon;

            return (
              <div key={section.id} className="relative group">
                {/* Tooltip */}
                <div
                  className={cn(
                    "absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-md whitespace-nowrap",
                    "bg-secondary text-secondary-foreground text-sm font-medium",
                    "opacity-0 translate-x-2 pointer-events-none transition-all duration-200",
                    "group-hover:opacity-100 group-hover:translate-x-0"
                  )}
                >
                  {section.label}
                  {/* Arrow */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                    <div className="border-8 border-transparent border-l-secondary" />
                  </div>
                </div>

                {/* Icon Button */}
                <button
                  onClick={() => handleClick(section.id)}
                  aria-label={`Navigate to ${section.label} section`}
                  role="button"
                  tabIndex={0}
                  className={cn(
                    "w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    isActive
                      ? "bg-primary border-2 border-primary shadow-lg scale-110"
                      : "bg-card border-2 border-border opacity-70 hover:opacity-100 hover:bg-primary/10 hover:border-primary hover:scale-105"
                  )}
                  style={{
                    boxShadow: isActive
                      ? "0 4px 12px hsla(45, 100%, 51%, 0.4)"
                      : undefined,
                  }}
                >
                  <Icon
                    className={cn(
                      "w-4 h-4 lg:w-5 lg:h-5 transition-colors duration-300",
                      isActive ? "text-secondary" : "text-muted-foreground group-hover:text-secondary"
                    )}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-500",
          "bg-card/95 backdrop-blur-md border-t border-border shadow-lg",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        aria-label="Mobile section navigation"
      >
        <div className="flex items-center justify-around h-16 px-2">
          {mobileSections.map((section) => {
            const isActive = activeSection === section.id;
            const Icon = section.icon;

            return (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                aria-label={`Navigate to ${section.label} section`}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 py-2 px-3 rounded-lg transition-all duration-300",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  isActive
                    ? "text-secondary"
                    : "text-muted-foreground"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                    isActive
                      ? "bg-primary scale-110"
                      : "bg-transparent"
                  )}
                  style={{
                    boxShadow: isActive
                      ? "0 2px 8px hsla(45, 100%, 51%, 0.4)"
                      : undefined,
                  }}
                >
                  <Icon
                    className={cn(
                      "w-4 h-4 transition-colors duration-300",
                      isActive ? "text-secondary" : "text-muted-foreground"
                    )}
                  />
                </div>
                <span
                  className={cn(
                    "text-[10px] font-medium transition-colors duration-300",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {section.label.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>
        {/* Safe area for iOS */}
        <div className="h-safe-area-inset-bottom bg-card" />
      </nav>
    </>
  );
}