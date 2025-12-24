import { Link } from "react-router-dom";
import { Facebook, Linkedin, Youtube, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const companyLinks = [
  { name: "Home", path: "/" },
  { name: "Who We Are", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  { name: "Video Editing", path: "/services" },
  { name: "Strategy Consultation", path: "/services" },
  { name: "Performance Marketing", path: "/services" },
  { name: "Website Development", path: "/services" },
];

const supportLinks = [
  { name: "FAQs", path: "/#faq" },
  { name: "Contact Us", path: "/contact" },
  { name: "About Us", path: "/about" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-muted/50 text-foreground relative overflow-hidden pb-14 md:pb-0">
      {/* Decorative Wave Illustration - hidden on mobile */}
      <div className="absolute bottom-0 left-0 w-48 md:w-80 h-32 md:h-48 pointer-events-none opacity-40 md:opacity-60 hidden sm:block">
        <svg viewBox="0 0 400 200" className="w-full h-full">
          <path
            d="M0,150 Q50,120 100,140 T200,130 T300,150 T400,140 L400,200 L0,200 Z"
            className="fill-primary/20"
          />
          <path
            d="M0,160 Q60,140 120,155 T240,145 T360,160 T400,155 L400,200 L0,200 Z"
            className="fill-primary/30"
          />
          <circle cx="60" cy="120" r="12" className="fill-primary/40" />
          <circle cx="45" cy="135" r="8" className="fill-accent/50" />
          <circle cx="80" cy="110" r="6" className="fill-primary/60" />
          <circle cx="120" cy="125" r="10" className="fill-accent/40" />
          <circle cx="100" cy="140" r="7" className="fill-primary/30" />
          <circle cx="150" cy="115" r="9" className="fill-primary/50" />
        </svg>
      </div>

      <div className="container-wide py-8 px-4 sm:px-6 md:py-12 lg:py-16">
        {/* Mobile: Logo centered at top */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left mb-8 sm:mb-0 sm:hidden">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <img src={logo} alt="Revision Wave" className="h-8 w-auto" />
            <div className="flex flex-col leading-none">
              <span className="text-[9px] font-bold tracking-wider text-primary">REVISION</span>
              <span className="text-base font-extrabold tracking-tight">WAVE</span>
            </div>
          </Link>
          <p className="text-muted-foreground text-xs max-w-[200px]">
            Modern Marketing & Branding for the AI Era.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Logo Section - Desktop only */}
          <div className="hidden sm:block lg:col-span-2 space-y-4 relative z-10">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Revision Wave" className="h-10 w-auto" />
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-bold tracking-wider text-primary">REVISION</span>
                <span className="text-lg font-extrabold tracking-tight">WAVE</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Modern Marketing & Branding for the AI Era.
            </p>
          </div>

          {/* Our Company */}
          <div>
            <h4 className="font-semibold text-xs sm:text-sm mb-3 sm:mb-4 text-foreground">Our Company</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-xs sm:text-sm mb-3 sm:mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-xs sm:text-sm mb-3 sm:mb-4 text-foreground">Support</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-border/50">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex gap-3 order-1 sm:order-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary active:bg-primary transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm text-center order-2 sm:order-1">
              ©{new Date().getFullYear()} Revision Wave. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}