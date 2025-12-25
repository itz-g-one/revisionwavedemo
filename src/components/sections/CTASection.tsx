import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { EnhancedBubbleTag, enhancedTags } from "@/components/ui/enhanced-bubble-tag";
import { DecorativeShape } from "@/components/ui/floating-icons";

export function CTASection() {
  return (
    <section className="section-padding bg-off-white relative overflow-hidden">
      {/* Decorative background elements */}
      <DecorativeShape variant="blob" size="lg" className="-top-20 -left-20 opacity-50" />
      <DecorativeShape variant="ring" size="md" className="-bottom-10 -right-10 opacity-40" />
      <DecorativeShape variant="circle" size="sm" className="top-1/4 right-1/4 opacity-30" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />
      
      <div className="container-wide text-center relative z-10">
        {/* Decorative sparkle above heading */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center animate-bounce-subtle">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
          Let's Create an <span className="text-primary italic">Amazing</span>
          <br />
          <span className="text-primary italic">Project</span> Together!
        </h2>

        {/* Enhanced CTA Button with glow */}
        <div className="relative inline-flex flex-col items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-full animate-pulse-glow scale-150" />
            <Button variant="dark" size="lg" className="gap-3 relative group px-8 py-6 text-base" asChild>
              <Link to="/contact">
                <span>Start Your Free Strategy Call</span>
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center transition-all group-hover:translate-x-1 group-hover:scale-110">
                  <ArrowRight className="w-5 h-5 text-primary-foreground" />
                </div>
              </Link>
            </Button>
          </div>
          <span className="text-sm text-muted-foreground">No pressure. Free strategy discussion.</span>
        </div>

        {/* Enhanced Bubble Tags with varied sizes, icons, and float speeds */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-12 max-w-5xl mx-auto">
          {enhancedTags.map((tag, index) => (
            <EnhancedBubbleTag
              key={index}
              label={tag.text}
              rotation={tag.rotation}
              hoverBgColor={tag.hoverBgColor}
              hoverTextColor="#ffffff"
              delay={index * 0.08}
              size={tag.size}
              icon={tag.icon}
              floatSpeed={tag.floatSpeed}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
