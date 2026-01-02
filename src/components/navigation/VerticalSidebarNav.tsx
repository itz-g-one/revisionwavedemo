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
      {/* Desktop Vertical Sidebar - Compact */}
      <nav
        className={cn(
          "fixed right-3 lg:right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center",
          "opacity-100 translate-x-0"
        )}
        aria-label="Section navigation"
      >
        <div className="bg-secondary/95 rounded-full p-1 shadow-lg">
          <div className="flex flex-col gap-0.5">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              const { Icon } = section;

              return (
                <div key={section.id} className="relative group">
                  {/* Tooltip */}
                  <div
                    className={cn(
                      "absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-lg whitespace-nowrap",
                      "bg-secondary text-secondary-foreground text-[10px] font-medium shadow-lg",
                      "opacity-0 -translate-x-2 pointer-events-none transition-all duration-200",
                      "group-hover:opacity-100 group-hover:translate-x-0"
                    )}
                  >
                    {section.label}
                  </div>

                  {/* Icon Button */}
                  <button
                    onClick={() => handleClick(section.id)}
                    aria-label={`Navigate to ${section.label} section`}
                    className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      isActive
                        ? "bg-primary text-primary-foreground scale-110"
                        : "bg-transparent text-secondary-foreground/70 hover:text-secondary-foreground hover:bg-secondary-foreground/10"
                    )}
                  >
                    <Icon isActive={isActive} className="w-3.5 h-3.5" />
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
          "fixed bottom-0 left-0 right-0 z-40 md:hidden",
          "bg-secondary"
        )}
        style={{ boxShadow: "0 -2px 12px rgba(0,0,0,0.1)" }}
        aria-label="Mobile section navigation"
      >
        <div className="flex items-center justify-around h-12 px-1 max-w-md mx-auto">
          {mobileSections.map((section) => {
            const isActive = activeSection === section.id;
            const { Icon } = section;

            return (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                aria-label={`Navigate to ${section.label} section`}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 py-1 px-2 rounded-lg transition-all duration-300",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  isActive
                    ? "text-primary"
                    : "text-secondary-foreground/60 hover:text-secondary-foreground"
                )}
              >
                <Icon isActive={isActive} className="w-4 h-4" />
                <span
                  className={cn(
                    "text-[9px] font-medium transition-colors duration-200",
                    isActive ? "text-primary" : "text-secondary-foreground/60"
                  )}
                >
                  {section.label}
                </span>
              </button>
            );
          })}
        </div>
        <div className="h-[env(safe-area-inset-bottom)] bg-secondary" />
      </nav>
    </>
  );
}
