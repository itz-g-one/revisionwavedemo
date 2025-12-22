import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Search, FileText, User, Video, Upload, Zap, Sparkles, Target, Users } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceCard, services } from "@/components/services/ServiceCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedSection, StaggeredChildren } from "@/components/ui/animated-section";
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

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 section-padding overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <AnimatedSection animation="fade-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Modern Marketing & Branding
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                AI-Powered Marketing for the{" "}
                <span className="text-primary italic">New Era</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg mb-8">
                Transform your visions into waves of impact. We combine cutting-edge AI with creative strategy to deliver effortless growth without the manual grind.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Get a Quote</Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/services">
                    View Services
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            {/* Right Column - Illustration */}
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="absolute top-10 right-10 bg-card rounded-xl shadow-card px-4 py-2 animate-float">
                    <span className="text-sm font-medium text-foreground">UI/UX Designer</span>
                  </div>
                  <div className="absolute bottom-20 left-0 bg-secondary text-secondary-foreground rounded-xl shadow-card px-4 py-2 animate-float-delayed">
                    <span className="text-sm font-medium">Product Designer</span>
                  </div>
                  <img
                    src={heroIllustration}
                    alt="AI Marketing Professional"
                    className="w-full max-w-md mx-auto lg:max-w-lg"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <AnimatedSection animation="fade">
        <section className="py-6 bg-secondary">
          <div className="container-wide">
            <div className="flex flex-wrap items-center justify-center gap-4 text-secondary-foreground">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
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
      <section className="py-4 bg-primary overflow-hidden">
        <div className="flex whitespace-nowrap">
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
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary text-sm font-medium mb-2 inline-block">— Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What We <span className="text-primary italic">Offer</span>
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
              <ServiceCard key={index} {...service} />
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* AI-Powered Personal Branding Section */}
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary text-sm font-medium mb-2 inline-block">— Featured System</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              AI-Powered <span className="text-primary italic">Personal Branding</span>
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
                className="bg-card rounded-2xl p-6 text-center card-hover border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xs font-bold text-primary mb-2">Step {index + 1}</div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Why Revision Wave */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary text-sm font-medium mb-2 inline-block">— Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why <span className="text-primary italic">Revision Wave</span>?
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
                className="bg-card rounded-2xl p-6 text-center card-hover border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <card.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm">{card.description}</p>
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
