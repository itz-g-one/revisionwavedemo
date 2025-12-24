import { useCallback } from "react";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import {
  BrandingIcon,
  ContactIcon,
  FAQIcon,
  HomeIcon,
  ServicesIcon,
  WhyUsIcon,
} from "./icons/SidebarIcons";

interface NavSection {
  id: string;
  Icon: React.FC<{ className?: string; isActive?: boolean }>;
  label: string;
}

const sections: NavSection[] = [
  { id: "hero", Icon: HomeIcon, label: "Home" },
  { id: "services", Icon: ServicesIcon, label: "Services" },
  { id: "personal-branding", Icon: BrandingIcon, label: "Branding" },
  { id: "why-us", Icon: WhyUsIcon, label: "Why Us" },
  { id: "contact", Icon: ContactIcon, label: "Contact" },
  { id: "faq", Icon: FAQIcon, label: "FAQs" },
];

const mobileSections: NavSection[] = [
  { id: "hero", Icon: HomeIcon, label: "Home" },
  { id: "services", Icon: ServicesIcon, label: "Services" },
  { id: "why-us", Icon: WhyUsIcon, label: "Why Us" },
  { id: "contact", Icon: ContactIcon, label: "Contact" },
  { id: "faq", Icon: FAQIcon, label: "FAQs" },
];

export function VerticalSidebarNav() {
  const { activeId: activeSection, setActiveId: setActiveSection } = useScrollSpy(
    sections.map((s) => s.id),
    { offset: 120 }
  );

  const handleClick = useCallback(
    (id: string) => {
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
    },
    [setActiveSection]
  );

  return (
    <>
      {/* Desktop Vertical Sidebar */}
      <nav
        className={cn(
          "fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center",
          "opacity-100 translate-x-0"
        )}
        aria-label="Section navigation"
      >
        <div className="bg-card/80 backdrop-blur-md rounded-2xl p-1.5 border border-border/50 shadow-lg">
          <div className="flex flex-col gap-1">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              const { Icon } = section;

              return (
                <div key={section.id} className="relative group">
                  {/* Tooltip */}
                  <div
                    className={cn(
                      "absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1.5 rounded-lg whitespace-nowrap",
                      "bg-popover text-popover-foreground text-xs font-medium shadow-lg border border-border/50",
                      "opacity-0 -translate-x-2 pointer-events-none transition-all duration-200",
                      "group-hover:opacity-100 group-hover:translate-x-0"
                    )}
                  >
                    {section.label}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                      <div className="border-[6px] border-transparent border-l-popover" />
                    </div>
                  </div>

                  {/* Icon Button */}
                  <button
                    onClick={() => handleClick(section.id)}
                    aria-label={`Navigate to ${section.label} section`}
                    className={cn(
                      "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md scale-105"
                        : "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
                    )}
                  >
                    <Icon isActive={isActive} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav
        className={cn(
          "fixed bottom-0 left-0 right-0 z-40 md:hidden",
          "bg-card/95 backdrop-blur-md border-t border-border/40"
        )}
        style={{ boxShadow: "0 -4px 20px rgba(0,0,0,0.08)" }}
        aria-label="Mobile section navigation"
      >
        <div className="flex items-center justify-around h-14 px-2 max-w-md mx-auto">
          {mobileSections.map((section) => {
            const isActive = activeSection === section.id;
            const { Icon } = section;

            return (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                aria-label={`Navigate to ${section.label} section`}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 py-1.5 px-3 rounded-xl transition-all duration-200",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon isActive={isActive} className="w-5 h-5" />
                <span
                  className={cn(
                    "text-[10px] font-medium transition-colors duration-200",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {section.label}
                </span>
              </button>
            );
          })}
        </div>
        <div className="h-[env(safe-area-inset-bottom)] bg-card" />
      </nav>
    </>
  );
}
