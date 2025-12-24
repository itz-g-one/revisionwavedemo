import { Video, TrendingUp, BarChart3, Globe, Bot, User, Sparkles } from "lucide-react";
import serviceVideo from "@/assets/service-video.png";
import serviceStrategy from "@/assets/service-strategy.png";
import serviceMarketing from "@/assets/service-marketing.png";
import serviceWebsite from "@/assets/service-website.png";
import serviceAI from "@/assets/service-ai.png";
import serviceBranding from "@/assets/service-branding.png";
import { cn } from "@/lib/utils";

interface EnhancedServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  illustration?: string;
  accentColor?: string;
}

export function EnhancedServiceCard({ 
  icon, 
  title, 
  description, 
  illustration,
  accentColor = "hsl(var(--primary))"
}: EnhancedServiceCardProps) {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      {/* Decorative elements */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
      </div>
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Illustration container with circular background */}
      {illustration && (
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-muted/50 via-background to-muted/30 flex items-center justify-center p-6">
          {/* Circular background shape */}
          <div 
            className="absolute inset-6 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          />
          
          {/* Decorative dots */}
          <div className="absolute top-4 left-4 flex gap-1">
            <span className="w-2 h-2 rounded-full bg-primary/30" />
            <span className="w-2 h-2 rounded-full bg-primary/20" />
            <span className="w-2 h-2 rounded-full bg-primary/10" />
          </div>
          <div className="absolute bottom-4 right-4 flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/20 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          {/* Small sparkle decorations */}
          <div className="absolute top-6 right-8 w-2 h-2 text-primary opacity-50">✦</div>
          <div className="absolute bottom-8 left-6 w-2 h-2 text-primary opacity-40">✦</div>
          
          <img 
            src={illustration} 
            alt={title} 
            className="relative z-10 w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      
      {/* Content section */}
      <div className="p-6 relative">
        {/* Icon with enhanced styling */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary/90 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25">
          <div className="text-primary group-hover:text-primary-foreground transition-colors">
            {icon}
          </div>
        </div>
        
        {/* Title and description */}
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Learn more link */}
        <div className="mt-4 flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span>Learn More</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export const enhancedServices = [
  {
    icon: <Video className="w-6 h-6" />,
    title: "Video Editing",
    description: "Professional video editing that captures attention and drives engagement across all platforms.",
    illustration: serviceVideo,
    accentColor: "#ef4444",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Strategy Consultation",
    description: "Data-driven marketing strategies tailored to your unique business goals and audience.",
    illustration: serviceStrategy,
    accentColor: "#10b981",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Performance Marketing",
    description: "ROI-focused campaigns that deliver measurable results and sustainable growth.",
    illustration: serviceMarketing,
    accentColor: "#3b82f6",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Website Development",
    description: "Modern, responsive websites designed to convert visitors into loyal customers.",
    illustration: serviceWebsite,
    accentColor: "#8b5cf6",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI Agents & Automation",
    description: "Custom AI solutions that automate workflows and enhance customer experiences.",
    illustration: serviceAI,
    accentColor: "#f59e0b",
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "AI-Powered Personal Branding",
    description: "Build your personal brand with AI-generated content, avatars, and automated publishing.",
    illustration: serviceBranding,
    accentColor: "#ec4899",
  },
];
