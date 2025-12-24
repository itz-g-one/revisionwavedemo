import { Video, TrendingUp, BarChart3, Globe, Bot, User } from "lucide-react";
import serviceVideo from "@/assets/service-video.png";
import serviceStrategy from "@/assets/service-strategy.png";
import serviceMarketing from "@/assets/service-marketing.png";
import serviceWebsite from "@/assets/service-website.png";
import serviceAI from "@/assets/service-ai.png";
import serviceBranding from "@/assets/service-branding.png";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  illustration?: string;
}

export function ServiceCard({ icon, title, description, illustration }: ServiceCardProps) {
  return (
    <div className="bg-card rounded-2xl overflow-hidden card-hover group cursor-pointer border border-border hover:border-primary/30 transition-all">
      {illustration && (
        <div className="relative h-52 overflow-hidden bg-muted/30 flex items-center justify-center p-4">
          <img 
            src={illustration} 
            alt={title} 
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        <div className="mt-4 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          Learn More →
        </div>
      </div>
    </div>
  );
}

export const services = [
  {
    icon: <Video className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />,
    title: "Video Editing",
    description: "Professional video editing that captures attention and drives engagement across all platforms.",
    illustration: serviceVideo,
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />,
    title: "Strategy Consultation",
    description: "Data-driven marketing strategies tailored to your unique business goals and audience.",
    illustration: serviceStrategy,
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />,
    title: "Performance Marketing",
    description: "ROI-focused campaigns that deliver measurable results and sustainable growth.",
    illustration: serviceMarketing,
  },
  {
    icon: <Globe className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />,
    title: "Website Development",
    description: "Modern, responsive websites designed to convert visitors into loyal customers.",
    illustration: serviceWebsite,
  },
  {
    icon: <Bot className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />,
    title: "AI Agents & Automation",
    description: "Custom AI solutions that automate workflows and enhance customer experiences.",
    illustration: serviceAI,
  },
  {
    icon: <User className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />,
    title: "AI-Powered Personal Branding",
    description: "Build your personal brand with AI-generated content, avatars, and automated publishing.",
    illustration: serviceBranding,
  },
];
