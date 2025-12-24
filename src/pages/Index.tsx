import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Search, FileText, User, Video, Upload, Zap, Sparkles, Target, Users, ChevronDown, Trophy, Rocket, ThumbsUp, Lightbulb, BarChart3 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EnhancedServiceCard, enhancedServices } from "@/components/services/EnhancedServiceCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedSection, StaggeredChildren } from "@/components/ui/animated-section";
import { FloatingParticles, GlowOrbs } from "@/components/ui/floating-particles";
import { FloatingIcons, DecorativeShape } from "@/components/ui/floating-icons";
import { GradientText } from "@/components/ui/gradient-text";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { VerticalSidebarNav } from "@/components/navigation/VerticalSidebarNav";
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
  { value: 150, suffix: "+", label: "Projects Completed", icon: Trophy },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: ThumbsUp },
  { value: 50, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 5, suffix: "x", label: "Average ROI", icon: Rocket },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <VerticalSidebarNav />
      
      {/* Hero Section - Enhanced */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 section-padding overflow-hidden">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-off-white to-primary/5" />
        
        {/* Background Effects */}
        <GlowOrbs />
        <FloatingParticles count={20} />
        
        {/* Decorative shapes */}
        <DecorativeShape variant="blob" size="lg" className="top-20 -right-20 opacity-30" />
        <DecorativeShape variant="ring" size="md" className="bottom-40 -left-10 opacity-20" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <AnimatedSection animation="fade-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 shimmer">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Modern Marketing & Branding
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
                AI-Powered Marketing for the{" "}
                <GradientText animate className="italic">New Era</GradientText>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg mb-8">
                Transform your visions into waves of impact. We combine cutting-edge AI with creative strategy to deliver effortless growth without the manual grind.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <Button variant="hero" size="lg" asChild className="group animate-pulse-glow shadow-lg hover:shadow-xl transition-shadow">
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild className="group hover:shadow-md transition-shadow">
                  <Link to="/services">
                    View Services
                    <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </Button>
              </div>

              {/* Enhanced Stats Row with icons and hover effects */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="group text-center sm:text-left p-3 rounded-xl hover:bg-card hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <stat.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-primary">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground ml-10 sm:ml-0">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right Column - Enhanced Illustration */}
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="relative">
                {/* Glow effect behind character */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>
                
                <div className="relative">
                  {/* Floating icons around the character */}
                  <FloatingIcons />
                  
                  {/* Floating tag badges */}
                  <div className="absolute top-4 right-0 bg-card/90 backdrop-blur-sm rounded-xl shadow-lg px-4 py-2.5 animate-float border border-border/50 z-20">
                    <span className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      AI Marketing
                    </span>
                  </div>
                  <div className="absolute bottom-32 -left-4 bg-secondary text-secondary-foreground rounded-xl shadow-lg px-4 py-2.5 animate-float-delayed z-20">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Rocket className="w-4 h-4" />
                      Growth Expert
                    </span>
                  </div>
                  <div className="absolute bottom-12 right-4 bg-primary text-primary-foreground rounded-xl shadow-lg px-4 py-2.5 animate-bounce-subtle z-20">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Creative
                    </span>
                  </div>
                  
                  {/* Character shadow */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-6 bg-foreground/8 blur-xl rounded-full" />
                  
                  {/* Hero illustration */}
                  <img
                    src={heroIllustration}
                    alt="AI Marketing Professional helping grow your business"
                    className="w-full max-w-md mx-auto lg:max-w-lg drop-shadow-xl relative z-10"
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

      {/* Enhanced Marquee Strip */}
      <section className="py-5 bg-primary overflow-hidden relative shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-gradient" />
        <div className="flex whitespace-nowrap relative z-10">
          <div className="marquee flex gap-10">
            {["App Design", "Website Design", "Dashboard", "Wireframe", "AI Automation", "Personal Branding", "Video Editing", "Performance Marketing", "App Design", "Website Design", "Dashboard", "Wireframe", "AI Automation", "Personal Branding", "Video Editing", "Performance Marketing"].map((item, i) => (
              <span key={i} className="flex items-center gap-4 text-primary-foreground font-semibold text-lg">
                {item}
                <span className="text-primary-foreground/80">
                  <Sparkles className="w-4 h-4" />
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="section-padding relative">
        <FloatingParticles count={10} className="opacity-50" />
        <DecorativeShape variant="circle" size="lg" className="-top-20 -right-20 opacity-20" />
        <DecorativeShape variant="blob" size="md" className="bottom-0 -left-20 opacity-15" />
        
        <div className="container-wide relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-medium mb-2 inline-block">— Our Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              What We <GradientText animate className="italic">Offer</GradientText>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Comprehensive AI-powered marketing solutions designed to accelerate your growth
            </p>
          </AnimatedSection>

          <StaggeredChildren
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            animation="fade-up"
            staggerDelay={100}
          >
            {enhancedServices.map((service, index) => (
              <div key={index}>
                <EnhancedServiceCard {...service} />
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* AI-Powered Personal Branding Section - Enhanced */}
      <section id="personal-branding" className="section-padding bg-off-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
        <DecorativeShape variant="ring" size="lg" className="top-10 -right-20 opacity-20" />
        
        <div className="container-wide relative z-10">
          <AnimatedSection className="text-center mb-16">
            {/* Decorative element above heading */}
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
            </div>
            <span className="text-primary text-sm font-medium mb-2 inline-block">— Featured System</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              AI-Powered <GradientText animate className="italic">Personal Branding</GradientText>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
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
                  {/* Large step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Enhanced icon with gradient background */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all group-hover:scale-110 duration-300 shadow-md">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>

                {/* Connection line - dashed */}
                {index < brandingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-primary/40" />
                )}
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Why Revision Wave - Enhanced */}
      <section id="why-us" className="section-padding relative">
        <GlowOrbs />
        <DecorativeShape variant="blob" size="lg" className="-bottom-20 -right-20 opacity-20" />
        
        <div className="container-wide relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-medium mb-2 inline-block">— Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Why <GradientText animate className="italic">Revision Wave</GradientText>?
            </h2>
          </AnimatedSection>

          <StaggeredChildren
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            animation="fade-up"
            staggerDelay={100}
          >
            {whyUsCards.map((card, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 text-center card-hover border border-border relative overflow-hidden"
              >
                {/* Animated border gradient on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/20" />
                </div>
                
                {/* Background pattern on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
                  backgroundSize: '16px 16px'
                }} />
                
                <div className="relative z-10">
                  {/* Enhanced icon circle with pulse glow */}
                  <div className="relative mx-auto w-fit mb-5">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow" />
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-button relative">
                      <card.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* CTA/Contact Section */}
      <section id="contact">
        <AnimatedSection animation="scale">
          <CTASection />
        </AnimatedSection>
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <AnimatedSection animation="fade-up">
          <FAQSection />
        </AnimatedSection>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}