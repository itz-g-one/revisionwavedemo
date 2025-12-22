import { Video, TrendingUp, BarChart3, Globe, Bot, User } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-card rounded-2xl p-6 card-hover group cursor-pointer border border-border hover:border-primary/30 transition-all">
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      <div className="mt-4 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        Learn More →
      </div>
    </div>
  );
}

export const services = [
  {
    icon: <Video className="w-6 h-6 text-primary" />,
    title: "Video Editing",
    description: "Professional video editing that captures attention and drives engagement across all platforms.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "Strategy Consultation",
    description: "Data-driven marketing strategies tailored to your unique business goals and audience.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Performance Marketing",
    description: "ROI-focused campaigns that deliver measurable results and sustainable growth.",
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Website Development",
    description: "Modern, responsive websites designed to convert visitors into loyal customers.",
  },
  {
    icon: <Bot className="w-6 h-6 text-primary" />,
    title: "AI Agents & Automation",
    description: "Custom AI solutions that automate workflows and enhance customer experiences.",
  },
  {
    icon: <User className="w-6 h-6 text-primary" />,
    title: "AI-Powered Personal Branding",
    description: "Build your personal brand with AI-generated content, avatars, and automated publishing.",
  },
];
