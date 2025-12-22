import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BubbleTag } from "@/components/ui/bubble-tag";

const tags = [
  { text: "Website Design", rotation: -8, hoverBgColor: "#3b82f6" },
  { text: "AI Automation", rotation: 6, hoverBgColor: "#10b981" },
  { text: "Branding", rotation: -4, hoverBgColor: "#f59e0b" },
  { text: "Content Strategy", rotation: 8, hoverBgColor: "#ef4444" },
  { text: "Video Production", rotation: -6, hoverBgColor: "#8b5cf6" },
  { text: "Personal Branding", rotation: 5, hoverBgColor: "#ec4899" },
  { text: "Performance Ads", rotation: -7, hoverBgColor: "#06b6d4" },
  { text: "Social Media", rotation: 4, hoverBgColor: "#f97316" },
];

export function CTASection() {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-wide text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
          Let's Create an <span className="text-primary italic">Amazing</span>
          <br />
          <span className="text-primary italic">Project</span> Together!
        </h2>

        <Button variant="dark" size="lg" className="gap-2" asChild>
          <Link to="/contact">
            Contact Us Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>

        {/* Bubble Tags */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 max-w-4xl mx-auto">
          {tags.map((tag, index) => (
            <BubbleTag
              key={index}
              label={tag.text}
              rotation={tag.rotation}
              hoverBgColor={tag.hoverBgColor}
              hoverTextColor="#ffffff"
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
