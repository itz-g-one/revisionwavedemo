import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ServiceCard, services } from "@/components/services/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedSection, StaggeredChildren } from "@/components/ui/animated-section";
import { FloatingParticles, GlowOrbs } from "@/components/ui/floating-particles";
import { GradientText } from "@/components/ui/gradient-text";
import { Check, ArrowRight } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We learn about your business, goals, and challenges to create a tailored strategy.",
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Our team crafts a comprehensive plan leveraging AI tools and proven methodologies.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "We execute the strategy with precision, setting up automation and content systems.",
  },
  {
    step: "04",
    title: "Optimize & Scale",
    description: "Continuous optimization based on data insights to maximize your results.",
  },
];

const includedItems = [
  "Dedicated account manager",
  "Custom AI tool setup & training",
  "Weekly performance reports",
  "Unlimited revisions",
  "24/7 priority support",
  "Quarterly strategy reviews",
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 section-padding">
        <GlowOrbs />
        <FloatingParticles count={12} />
        <div className="container-wide relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium mb-2 inline-block">— Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              AI-Powered Solutions for <GradientText animate className="italic">Modern Growth</GradientText>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              From strategy to execution, we provide comprehensive digital marketing services 
              powered by the latest AI technologies.
            </p>
            <Button variant="hero" size="lg" asChild className="group">
              <Link to="/contact">
                Get Started
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-off-white relative">
        <FloatingParticles count={8} className="opacity-30" />
        <div className="container-wide relative z-10">
          <StaggeredChildren
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            animation="fade-up"
            staggerDelay={100}
          >
            {services.map((service, index) => (
              <div key={index} className="card-glow rounded-2xl">
                <ServiceCard {...service} />
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding relative">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary text-sm font-medium mb-2 inline-block">— Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How We <GradientText animate className="italic">Work</GradientText>
            </h2>
          </AnimatedSection>

          <StaggeredChildren
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            animation="fade-up"
            staggerDelay={100}
          >
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-card rounded-2xl p-6 card-hover border border-border h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">{step.step}</span>
                    <h3 className="font-bold text-foreground mt-4 mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-primary/20"></div>
                )}
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary/90" />
        <FloatingParticles count={10} className="opacity-20" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-left">
              <span className="text-primary text-sm font-medium mb-2 inline-block">— What's Included</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Everything You Need to <span className="text-primary italic">Succeed</span>
              </h2>
              <ul className="space-y-4">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-button">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-secondary-foreground/90 group-hover:text-secondary-foreground transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="bg-secondary-foreground/10 rounded-3xl p-8 backdrop-blur-sm border border-secondary-foreground/10">
                <div className="text-center">
                  <div className="text-sm text-secondary-foreground/60 mb-2">Starting from</div>
                  <div className="text-5xl font-bold text-primary mb-4 text-glow">$1,500</div>
                  <div className="text-secondary-foreground/60 mb-6">per month</div>
                  <Button variant="hero" size="lg" className="w-full group" asChild>
                    <Link to="/contact">
                      Request a Quote
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
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
