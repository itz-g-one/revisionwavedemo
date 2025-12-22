import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const tags = [
  { text: "Website Design", variant: "primary" },
  { text: "AI Automation", variant: "secondary" },
  { text: "Branding", variant: "primary" },
  { text: "Content Strategy", variant: "secondary" },
  { text: "Video Production", variant: "primary" },
  { text: "Personal Branding", variant: "secondary" },
  { text: "Performance Ads", variant: "primary" },
  { text: "Social Media", variant: "secondary" },
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

        {/* Floating Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 max-w-3xl mx-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`floating-tag ${
                tag.variant === "primary"
                  ? "floating-tag-primary"
                  : "floating-tag-secondary"
              } animate-float`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {tag.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
