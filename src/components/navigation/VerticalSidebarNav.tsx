import { useState, useEffect, useCallback } from "react";
import { Home, Zap, Sparkles, Trophy, MessageSquare, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavSection {
  id: string;
  icon: React.ElementType;
  label: string;
}

const sections: NavSection[] = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "services", icon: Zap, label: "Services" },
  { id: "personal-branding", icon: Sparkles, label: "Branding" },
  { id: "why-us", icon: Trophy, label: "Why Us" },
  { id: "contact", icon: MessageSquare, label: "Contact" },
  { id: "faq", icon: HelpCircle, label: "FAQs" },
];

// Simplified sections for mobile (5 items)
const mobileSections: NavSection[] = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "services", icon: Zap, label: "Services" },
  { id: "why-us", icon: Trophy, label: "Why Us" },
  { id: "contact", icon: MessageSquare, label: "Contact" },
  { id: "faq", icon: HelpCircle, label: "FAQs" },
];

export function VerticalSidebarNav() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Fade in on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Track scroll for hiding on top
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
          threshold: 0.2,
          rootMargin: "-10% 0px -30% 0px",
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
      {/* Desktop Vertical Sidebar - Minimal & Clean */}
      <nav
        className={cn(
          "fixed right-3 lg:right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center transition-all duration-500",
          isVisible && hasScrolled ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        )}
        aria-label="Section navigation"
      >
        <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-1 border border-border/40 shadow-sm">
          <div className="flex flex-col gap-0.5 relative">
            {sections.map((section, index) => {
              const isActive = activeSection === section.id;
              const Icon = section.icon;

              return (
                <div key={section.id} className="relative group">
                  {/* Tooltip */}
                  <div
                    className={cn(
                      "absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md whitespace-nowrap",
                      "bg-secondary text-secondary-foreground text-[11px] font-medium shadow-md",
                      "opacity-0 translate-x-1 pointer-events-none transition-all duration-150",
                      "group-hover:opacity-100 group-hover:translate-x-0"
                    )}
                  >
                    {section.label}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                      <div className="border-[5px] border-transparent border-l-secondary" />
                    </div>
                  </div>

                  {/* Icon Button */}
                  <button
                    onClick={() => handleClick(section.id)}
                    aria-label={`Navigate to ${section.label} section`}
                    className={cn(
                      "w-7 h-7 rounded-xl flex items-center justify-center transition-all duration-200",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
                      isActive
                        ? "bg-primary shadow-sm"
                        : "bg-transparent hover:bg-muted"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-3.5 h-3.5 transition-colors duration-200",
                        isActive ? "text-secondary" : "text-muted-foreground group-hover:text-foreground"
                      )}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                  </button>

                  {/* Connector dot between items */}
                  {index < sections.length - 1 && (
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-0.5 h-1 bg-border/50 rounded-full" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - Clean & Minimal */}
      <nav
        className={cn(
          "fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-300",
          "bg-card/95 backdrop-blur-sm border-t border-border/30",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ boxShadow: "0 -2px 10px rgba(0,0,0,0.05)" }}
        aria-label="Mobile section navigation"
      >
        <div className="flex items-center justify-around h-12 px-2 max-w-md mx-auto">
          {mobileSections.map((section) => {
            const isActive = activeSection === section.id;
            const Icon = section.icon;

            return (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                aria-label={`Navigate to ${section.label} section`}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 py-1 px-3 rounded-lg transition-all duration-200",
                  "focus:outline-none focus-visible:ring-1 focus-visible:ring-primary",
                  isActive ? "bg-primary/10" : ""
                )}
              >
                <Icon
                  className={cn(
                    "w-4 h-4 transition-colors duration-200",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span
                  className={cn(
                    "text-[8px] font-medium transition-colors duration-200",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {section.label}
                </span>
              </button>
            );
          })}
        </div>
        {/* iOS safe area */}
        <div className="h-[env(safe-area-inset-bottom)] bg-card" />
      </nav>
    </>
  );
}