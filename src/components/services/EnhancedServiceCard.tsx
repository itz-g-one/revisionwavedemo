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
    <div className="group relative bg-card rounded-3xl overflow-hidden cursor-pointer border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col">
      {/* Glow effect on hover */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Illustration container */}
      {illustration && (
        <div className="relative h-48 sm:h-52 overflow-hidden bg-gradient-to-br from-off-white via-background to-muted/50 flex items-center justify-center p-6">
          {/* Soft circular glow behind image */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/15 via-primary/5 to-transparent opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700" />
          
          {/* Corner accents */}
          <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-primary/20 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-primary/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <img 
            src={illustration} 
            alt={title} 
            className="relative z-10 w-full h-full object-contain drop-shadow-lg group-hover:scale-110 group-hover:drop-shadow-2xl transition-all duration-500"
          />
        </div>
      )}
      
      {/* Content section */}
      <div className="p-6 pt-5 relative flex-1 flex flex-col">
        {/* Icon badge */}
        <div className="absolute -top-7 left-6 w-14 h-14 rounded-2xl bg-card border-2 border-border/50 shadow-lg flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary group-hover:to-primary/90 transition-all duration-300">
            <div className="text-primary group-hover:text-primary-foreground transition-colors">
              {icon}
            </div>
          </div>
        </div>
        
        {/* Title and description */}
        <div className="mt-6 flex-1">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Learn more link */}
        <div className="mt-5 pt-4 border-t border-border/50 group-hover:border-primary/20 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-primary font-semibold text-sm group-hover:text-primary/80 transition-colors">
              Learn More
            </span>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
              <ArrowRight className="w-4 h-4 text-primary group-hover:text-primary-foreground group-hover:translate-x-0.5 transition-all" />
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