import { Video, TrendingUp, BarChart3, Globe, Bot, User, ArrowRight } from "lucide-react";
import serviceVideo from "@/assets/service-video.png";
import serviceStrategy from "@/assets/service-strategy.png";
import serviceMarketing from "@/assets/service-marketing.png";
import serviceWebsite from "@/assets/service-website.png";
import serviceAI from "@/assets/service-ai.png";
import serviceBranding from "@/assets/service-branding.png";

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
}: EnhancedServiceCardProps) {
  return (
    <div className="group relative bg-card rounded-3xl overflow-hidden cursor-pointer border border-border/50 hover:border-primary/60 transition-all duration-500 hover:-translate-y-4 h-full flex flex-col neon-border">
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Glow effect on hover */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/15 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-700" />
      
      {/* Illustration container */}
      {illustration && (
        <div className="relative h-48 sm:h-56 overflow-hidden flex items-center justify-center p-6 bg-gradient-to-b from-muted/30 to-transparent">
          {/* Radial glow behind image */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.15),transparent_70%)] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700" />
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float" />
            <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-accent/50 rounded-full animate-float-delayed" />
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary/30 rounded-full animate-float-slow" />
          </div>
          
          <img 
            src={illustration} 
            alt={title} 
            className="relative z-10 w-full h-full object-contain drop-shadow-2xl group-hover:scale-115 group-hover:rotate-2 transition-all duration-700 ease-out"
          />
        </div>
      )}
      
      {/* Content section */}
      <div className="p-6 pt-5 relative flex-1 flex flex-col bg-card">
        {/* Icon badge with glow */}
        <div className="absolute -top-7 left-6 w-14 h-14 rounded-2xl bg-card border-2 border-border/50 shadow-lg flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all duration-500">
            <div className="text-primary group-hover:text-primary-foreground transition-colors duration-300">
              {icon}
            </div>
          </div>
        </div>
        
        {/* Title and description */}
        <div className="mt-6 flex-1">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
            {description}
          </p>
        </div>
        
        {/* Learn more link */}
        <div className="mt-5 pt-4 border-t border-border/50 group-hover:border-primary/30 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <span className="text-primary font-semibold text-sm group-hover:tracking-wide transition-all duration-300">
              Learn More
            </span>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-500">
              <ArrowRight className="w-4 h-4 text-primary group-hover:text-primary-foreground group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const enhancedServices = [
  {
    icon: <Video className="w-5 h-5" />,
    title: "Video Editing",
    description: "Professional video editing that captures attention and drives engagement across all platforms.",
    illustration: serviceVideo,
    accentColor: "#ef4444",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Strategy Consultation",
    description: "Data-driven marketing strategies tailored to your unique business goals and audience.",
    illustration: serviceStrategy,
    accentColor: "#10b981",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Performance Marketing",
    description: "ROI-focused campaigns that deliver measurable results and sustainable growth.",
    illustration: serviceMarketing,
    accentColor: "#3b82f6",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Website Development",
    description: "Modern, responsive websites designed to convert visitors into loyal customers.",
    illustration: serviceWebsite,
    accentColor: "#8b5cf6",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "AI Agents & Automation",
    description: "Custom AI solutions that automate workflows and enhance customer experiences.",
    illustration: serviceAI,
    accentColor: "#f59e0b",
  },
  {
    icon: <User className="w-5 h-5" />,
    title: "AI-Powered Personal Branding",
    description: "Build your personal brand with AI-generated content, avatars, and automated publishing.",
    illustration: serviceBranding,
    accentColor: "#ec4899",
  },
];