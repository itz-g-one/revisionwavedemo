import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <nav 
          className="flex items-center justify-between h-[72px] md:h-[80px] px-6 md:px-8 rounded-[50px] bg-secondary shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
        >
          {/* Left - Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">R</span>
            </div>
            <span className="text-lg font-semibold text-secondary-foreground tracking-tight">Revision.</span>
          </Link>

          {/* Center - Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[15px] font-medium transition-all duration-300 ease-out relative ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-secondary-foreground/80 hover:text-secondary-foreground"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right - CTA Button */}
          <div className="hidden lg:block">
            <Button 
              className="rounded-full px-6 py-2 h-11 bg-primary text-primary-foreground font-medium text-[15px] hover:bg-primary/90 transition-all duration-300 ease-out hover:scale-[1.02] shadow-none border-none" 
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-secondary-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-secondary-foreground" />
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
