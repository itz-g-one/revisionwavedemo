import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Search, FileText, User, Video, Upload, Zap, Sparkles, Target, Users, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceCard, services } from "@/components/services/ServiceCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedSection, StaggeredChildren } from "@/components/ui/animated-section";
import { FloatingParticles, GlowOrbs } from "@/components/ui/floating-particles";
import { GradientText } from "@/components/ui/gradient-text";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import heroIllustration from "@/assets/hero-illustration.png";

const brandingSteps = [
  { icon: Search, title: "Trend Research", description: "AI analyzes what's trending in your niche" },
  { icon: FileText, title: "Script Creation", description: "Generate engaging scripts automatically" },
  { icon: User, title: "Avatar & AI Voice", description: "Create your digital persona" },
  { icon: Video, title: "Professional Editing", description: "Polished, platform-ready content" },
  { icon: Upload, title: "Auto Publishing", description: "Schedule and publish automatically" },
];

const whyUsCards = [
  { icon: Zap, title: "Automation-First Systems", description: "Reduce manual work by 80% with smart automation" },
  { icon: Sparkles, title: "AI-Driven Growth", description: "Leverage cutting-edge AI for faster results" },
  { icon: Target, title: "Creator-Focused Execution", description: "Strategies tailored for personal brands" },
  { icon: Users, title: "End-to-End Delivery", description: "From strategy to execution, we handle it all" },
];

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "x", label: "Average ROI" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 section-padding overflow-hidden">
        {/* Background Effects */}
        <GlowOrbs />
        <FloatingParticles count={15} />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <AnimatedSection animation="fade-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 shimmer">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Modern Marketing & Branding
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                AI-Powered Marketing for the{" "}
                <GradientText animate className="italic">New Era</GradientText>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg mb-8">
                Transform your visions into waves of impact. We combine cutting-edge AI with creative strategy to deliver effortless growth without the manual grind.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="hero" size="lg" asChild className="group animate-pulse-glow">
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild className="group">
                  <Link to="/services">
                    View Services
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center sm:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-primary">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right Column - Illustration */}
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="relative">
                {/* Animated glow ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-primary/20 animate-spin-slow" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border border-primary/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
                
                <div className="absolute -top-8 -right-8 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
                <div className="relative">
                  <div className="absolute top-10 right-10 bg-card rounded-xl shadow-card px-4 py-2 animate-float border border-border gradient-border">
                    <span className="text-sm font-medium text-foreground">✨ AI Marketing</span>
                  </div>
                  <div className="absolute bottom-20 left-0 bg-secondary text-secondary-foreground rounded-xl shadow-card px-4 py-2 animate-float-delayed">
                    <span className="text-sm font-medium">🚀 Growth Expert</span>
                  </div>
                  <div className="absolute bottom-10 right-0 bg-primary text-primary-foreground rounded-xl shadow-card px-4 py-2 animate-bounce-subtle">
                    <span className="text-sm font-medium">💡 Creative</span>
                  </div>
                  <img
                    src={heroIllustration}
                    alt="AI Marketing Professional"
                    className="w-full max-w-md mx-auto lg:max-w-lg drop-shadow-2xl"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground animate-bounce-subtle">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <AnimatedSection animation="fade">
        <section className="py-6 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary" />
          <div className="container-wide relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-4 text-secondary-foreground">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>
              <span className="text-sm font-medium">
                Trusted by creators, coaches, and growing businesses worldwide
              </span>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Marquee Strip */}
      <section className="py-4 bg-primary overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-gradient" />
        <div className="flex whitespace-nowrap relative z-10">
          <div className="marquee flex gap-8">
            {["App Design", "Website Design", "Dashboard", "Wireframe", "AI Automation", "Personal Branding", "Video Editing", "Performance Marketing", "App Design", "Website Design", "Dashboard", "Wireframe", "AI Automation", "Personal Branding", "Video Editing", "Performance Marketing"].map((item, i) => (
              <span key={i} className="flex items-center gap-4 text-primary-foreground font-medium">
                {item}
                <span className="text-primary-foreground/60">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding relative">
        <FloatingParticles count={10} className="opacity-50" />
        <div className="container-wide relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary text-sm font-medium mb-2 inline-block">— Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What We <GradientText animate className="italic">Offer</GradientText>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Comprehensive AI-powered marketing solutions designed to accelerate your growth
            </p>
          </AnimatedSection>

          <StaggeredChildren
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
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

      {/* AI-Powered Personal Branding Section */}
      <section className="section-padding bg-off-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
        <div className="container-wide relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary text-sm font-medium mb-2 inline-block">— Featured System</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              AI-Powered <GradientText animate className="italic">Personal Branding</GradientText>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Build your personal brand on autopilot with our 5-step AI system
            </p>
          </AnimatedSection>

          <StaggeredChildren
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
            animation="scale"
            staggerDelay={100}
          >
            {brandingSteps.map((step, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 text-center card-hover border border-border relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-xs font-bold text-primary mb-2">Step {index + 1}</div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>

                {/* Connection line */}
                {index < brandingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                )}
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Why Revision Wave */}
      <section className="section-padding relative">
        <GlowOrbs />
        <div className="container-wide relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary text-sm font-medium mb-2 inline-block">— Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why <GradientText animate className="italic">Revision Wave</GradientText>?
            </h2>
          </AnimatedSection>

          <StaggeredChildren
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            animation="fade-up"
            staggerDelay={100}
          >
            {whyUsCards.map((card, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 text-center card-hover border border-border relative overflow-hidden"
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/20 animate-spin-slow" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-button">
                    <card.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-muted-foreground text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection animation="scale">
        <CTASection />
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection animation="fade-up">
        <FAQSection />
      </AnimatedSection>

      {/* Footer */}
      <Footer />
    </div>
  );
}
