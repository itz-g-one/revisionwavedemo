import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import revisionWaveLogo from "@/assets/revision-wave-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-2xl mx-auto">
        <nav 
          className="flex items-center justify-between h-12 px-3 md:px-5 rounded-full bg-secondary/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-secondary-foreground/5"
        >
          {/* Left - Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={revisionWaveLogo} 
              alt="Revision Wave" 
              className="w-10 h-10 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Center - Navigation Links */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-medium transition-all duration-300 ease-out relative py-1 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-secondary-foreground/80 hover:text-primary"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                )}
              </Link>
            ))}
          </div>

          {/* Right - CTA Button */}
          <div className="hidden lg:block">
            <Button 
              className="rounded-full px-4 h-8 bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition-all duration-300 ease-out hover:scale-105 shadow-[0_0_15px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] border-none" 
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-4 w-4 text-secondary-foreground" />
            ) : (
              <Menu className="h-4 w-4 text-secondary-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-3 rounded-[32px] bg-secondary shadow-[0_8px_32px_rgba(0,0,0,0.15)] p-6 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-all duration-300 py-3 px-4 rounded-xl ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                className="mt-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 h-12 shadow-none border-none" 
                asChild
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
