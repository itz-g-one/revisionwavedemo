import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
  isActive?: boolean;
}

export function HomeIcon({ className, isActive }: IconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className={cn("w-4 h-4", className)}
    >
      <path 
        d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V15C15 14.4477 14.5523 14 14 14H10C9.44772 14 9 14.4477 9 15V21H4C3.44772 21 3 20.5523 3 20V10.5Z" 
        fill={isActive ? "currentColor" : "none"}
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <circle cx="12" cy="8" r="1.5" fill={isActive ? "hsl(var(--secondary))" : "currentColor"} />
    </svg>
  );
}

export function ServicesIcon({ className, isActive }: IconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className={cn("w-4 h-4", className)}
    >
      <rect 
        x="3" y="3" 
        width="7" height="7" 
        rx="1.5" 
        fill={isActive ? "currentColor" : "none"}
        stroke="currentColor" 
        strokeWidth="2"
      />
      <rect 
        x="14" y="3" 
        width="7" height="7" 
        rx="1.5" 
        fill={isActive ? "currentColor" : "none"}
        stroke="currentColor" 
        strokeWidth="2"
      />
      <rect 
        x="3" y="14" 
        width="7" height="7" 
        rx="1.5" 
        fill={isActive ? "currentColor" : "none"}
        stroke="currentColor" 
        strokeWidth="2"
      />
      <circle 
        cx="17.5" cy="17.5" 
        r="3.5" 
        fill={isActive ? "currentColor" : "none"}
        stroke="currentColor" 
        strokeWidth="2"
      />
    </svg>
  );
}

export function BrandingIcon({ className, isActive }: IconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className={cn("w-4 h-4", className)}
    >
      {/* Person/Profile icon for personal branding */}
      <circle 
        cx="12" cy="8" 
        r="4" 
        fill={isActive ? "currentColor" : "none"}
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20" 
        fill={isActive ? "currentColor" : "none"}
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <circle cx="17" cy="6" r="2" fill={isActive ? "hsl(var(--secondary))" : "currentColor"} />
    </svg>
  );
}

export function WhyUsIcon({ className, isActive }: IconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className={cn("w-4 h-4", className)}
    >
      {/* Trophy/Award icon */}
      <path 
        d="M6 4H18V8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8V4Z" 
        fill={isActive ? "currentColor" : "none"}
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M6 6H4C3.44772 6 3 6.44772 3 7V8C3 9.65685 4.34315 11 6 11" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M18 6H20C20.5523 6 21 6.44772 21 7V8C21 9.65685 19.6569 11 18 11" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M12 14V17" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M8 21H16" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M10 17H14V21H10V17Z" 
        fill={isActive ? "currentColor" : "none"}
        stroke="currentColor" 
        strokeWidth="2"
      />
      <circle cx="12" cy="8" r="1.5" fill={isActive ? "hsl(var(--secondary))" : "currentColor"} />
    </svg>
  );
}

export function ContactIcon({ className, isActive }: IconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className={cn("w-4 h-4", className)}
    >
      <path 
        d="M21 5H3C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18V6C22 5.44772 21.5523 5 21 5Z" 
        fill={isActive ? "currentColor" : "none"}
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M2 6L12 13L22 6" 
        stroke={isActive ? "hsl(var(--secondary))" : "currentColor"} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="1.5" fill={isActive ? "hsl(var(--secondary))" : "currentColor"} />
    </svg>
  );
}

export function FAQIcon({ className, isActive }: IconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className={cn("w-4 h-4", className)}
    >
      <circle 
        cx="12" cy="12" 
        r="10" 
        fill={isActive ? "currentColor" : "none"}
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.3062 14.1652 11.4175 13 11.8293V13" 
        stroke={isActive ? "hsl(var(--secondary))" : "currentColor"} 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <circle cx="12" cy="17" r="1" fill={isActive ? "hsl(var(--secondary))" : "currentColor"} />
    </svg>
  );
}
