import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedSection, StaggeredChildren } from "@/components/ui/animated-section";
import { FloatingParticles, GlowOrbs } from "@/components/ui/floating-particles";
import { GradientText } from "@/components/ui/gradient-text";
import { Target, Users, Lightbulb, Award } from "lucide-react";
import aboutIllustration from "@/assets/about-illustration.png";
import teamIllustration from "@/assets/team-illustration.png";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy we create is focused on delivering measurable outcomes for your business.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We work as an extension of your team.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of trends and leverage the latest AI technologies for your benefit.",
  },
  {
    icon: Award,
    title: "Excellence Always",
    description: "Quality is non-negotiable. We deliver premium work, every time.",
  },
];

const stats = [
  { number: "50+", label: "Clients Served" },
  { number: "200+", label: "Projects Completed" },
  { number: "95%", label: "Client Satisfaction" },
  { number: "3x", label: "Average ROI" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 section-padding">
        <GlowOrbs />
        <FloatingParticles count={12} />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-left">
              <span className="text-primary text-sm font-medium mb-2 inline-block">— Who We Are</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Visions into <GradientText animate className="italic">Waves of Impact</GradientText>
              </h1>
              <p className="text-lg text-muted-foreground">
                Revision Wave is an AI-enabled digital marketing and personal branding agency. 
                We help creators, coaches, and businesses grow with automation-first strategies 
                that eliminate the manual grind.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
                <img 
                  src={teamIllustration} 
                  alt="Our Creative Team" 
                  className="w-full max-w-md mx-auto lg:max-w-lg drop-shadow-2xl relative z-10"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary" />
        <div className="container-wide relative z-10">
          <StaggeredChildren
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            animation="scale"
            staggerDelay={100}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">{stat.number}</div>
                <div className="text-secondary-foreground/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding relative">
        <FloatingParticles count={8} className="opacity-50" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-left">
              <span className="text-primary text-sm font-medium mb-2 inline-block">— Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Born from the Future of <GradientText animate className="italic">Marketing</GradientText>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We started Revision Wave with a simple observation: the marketing industry was 
                  stuck in the past. Businesses were spending countless hours on repetitive tasks 
                  that AI could handle in seconds.
                </p>
                <p>
                  Our mission became clear—bridge the gap between cutting-edge AI technology and 
                  practical marketing execution. Today, we help businesses of all sizes leverage 
                  AI-powered systems to grow faster, smarter, and more efficiently.
                </p>
                <p>
                  From AI-generated content and automated publishing to intelligent analytics and 
                  personalized customer experiences, we're redefining what's possible in digital marketing.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="relative">
                <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-primary/15 rounded-full blur-2xl" />
                <div className="bg-off-white rounded-3xl p-6 relative z-10">
                  <img 
                    src={aboutIllustration} 
                    alt="Marketing Analytics Professional" 
                    className="w-full rounded-2xl drop-shadow-lg"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary text-sm font-medium mb-2 inline-block">— Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Drives <span className="text-primary italic">Us</span>
            </h2>
          </AnimatedSection>

          <StaggeredChildren
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            animation="fade-up"
            staggerDelay={100}
          >
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center card-hover border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection animation="scale">
        <CTASection />
      </AnimatedSection>

      {/* Footer */}
      <Footer />
    </div>
  );
}
