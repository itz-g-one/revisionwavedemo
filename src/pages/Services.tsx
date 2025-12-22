import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ServiceCard, services } from "@/components/services/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedSection, StaggeredChildren } from "@/components/ui/animated-section";
import { Check } from "lucide-react";

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
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 section-padding">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium mb-2 inline-block">— Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              AI-Powered Solutions for <span className="text-primary italic">Modern Growth</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              From strategy to execution, we provide comprehensive digital marketing services 
              powered by the latest AI technologies.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <StaggeredChildren
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            animation="fade-up"
            staggerDelay={100}
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary text-sm font-medium mb-2 inline-block">— Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How We <span className="text-primary italic">Work</span>
            </h2>
          </AnimatedSection>

          <StaggeredChildren
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            animation="fade-up"
            staggerDelay={100}
          >
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-6 card-hover border border-border h-full">
                  <span className="text-5xl font-bold text-primary/20">{step.step}</span>
                  <h3 className="font-bold text-foreground mt-4 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30"></div>
                )}
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-left">
              <span className="text-primary text-sm font-medium mb-2 inline-block">— What's Included</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Everything You Need to <span className="text-primary italic">Succeed</span>
              </h2>
              <ul className="space-y-4">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-secondary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="bg-secondary-foreground/10 rounded-3xl p-8">
                <div className="text-center">
                  <div className="text-sm text-secondary-foreground/60 mb-2">Starting from</div>
                  <div className="text-5xl font-bold text-primary mb-4">$1,500</div>
                  <div className="text-secondary-foreground/60 mb-6">per month</div>
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <Link to="/contact">Request a Quote</Link>
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
