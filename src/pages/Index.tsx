import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Search, FileText, User, Video, Upload, Zap, Sparkles, Target, Users, ChevronDown, Rocket, Lightbulb, BarChart3, Shield, Award } from "lucide-react";
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
const brandingSteps = [{
  icon: Search,
  title: "Trend Research",
  description: "AI analyzes what's trending in your niche",
  subtext: "Know what works before you create"
}, {
  icon: FileText,
  title: "Script Creation",
  description: "Generate engaging scripts automatically",
  subtext: "Hooks that stop the scroll"
}, {
  icon: User,
  title: "Avatar & AI Voice",
  description: "Create your digital persona",
  subtext: "Your clone, your style"
}, {
  icon: Video,
  title: "Professional Editing",
  description: "Polished, platform-ready content",
  subtext: "Studio quality, automated"
}, {
  icon: Upload,
  title: "Auto Publishing",
  description: "Schedule and publish automatically",
  subtext: "Set it and scale it"
}];
const whyUsCards = [{
  icon: Zap,
  title: "Built to Remove Manual Work",
  description: "We eliminate 80% of your repetitive tasks. Not more tools—less friction."
}, {
  icon: Sparkles,
  title: "AI That Actually Delivers",
  description: "No gimmicks. Real AI systems that produce measurable results in weeks."
}, {
  icon: Target,
  title: "Creator-First, Always",
  description: "Your brand, your voice, your growth. We build systems around you."
}, {
  icon: Users,
  title: "One Partner, Full Stack",
  description: "Strategy to execution—no handoffs, no gaps, no excuses."
}];
// Value-focused proof points
const proofPoints = [
  { icon: Zap, text: "AI-Powered Systems" },
  { icon: Target, text: "Creator-Focused" },
  { icon: Rocket, text: "Results-Driven" },
];
export default function Index() {
  return <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <VerticalSidebarNav />
      
      {/* Hero Section - Enhanced */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 section-padding overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 gradient-mesh" />
        
        {/* Animated gradient orb */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-morph opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-morph opacity-40" style={{ animationDelay: '-4s' }} />
        
        {/* Background Effects */}
        <GlowOrbs />
        <FloatingParticles count={25} />
        
        {/* Decorative shapes */}
        <DecorativeShape variant="blob" size="lg" className="top-20 -right-20 opacity-40 animate-morph" />
        <DecorativeShape variant="ring" size="md" className="bottom-40 -left-10 opacity-30 animate-spin-slow" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <AnimatedSection animation="fade-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 shimmer border border-primary/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(var(--primary))]"></span>
                Modern Marketing & Branding
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
                AI-Powered Marketing for the{" "}
                <span className="relative">
                  <GradientText animate className="italic">New Era</GradientText>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 4 150 4 198 10" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" className="animate-draw" style={{ strokeDasharray: 200, strokeDashoffset: 0 }} />
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
                Transform your visions into waves of impact. We combine cutting-edge AI with creative strategy to deliver effortless growth without the manual grind.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <Button variant="hero" size="lg" asChild className="group shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)] transition-all duration-500">
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild className="group hover:shadow-lg transition-all duration-500 hover:border-primary/50">
                  <Link to="/services">
                    View Services
                    <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </Button>
              </div>

              {/* Value-based proof line instead of weak metrics */}
              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4 font-medium">AI-powered systems built for:</p>
                <div className="flex flex-wrap gap-3">
                  {proofPoints.map((point, index) => (
                    <div key={index} className="group flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default">
                      <point.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{point.text}</span>
                    </div>
                  ))}
                </div>
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
                  <img alt="AI Marketing Professional helping grow your business" className="w-full max-w-md mx-auto lg:max-w-lg drop-shadow-xl relative z-10" src={heroIllustration} />
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

      {/* Trust Anchor Strip */}
      <AnimatedSection animation="fade">
        <section className="py-6 bg-card border-y border-border/50 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Built by Creators & AI Specialists</span>
              </div>
              <div className="hidden md:block w-px h-5 bg-border" />
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Results-Driven Systems</span>
              </div>
              <div className="hidden md:block w-px h-5 bg-border" />
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Enhanced Marquee Strip */}
      <section className="py-5 bg-primary overflow-hidden relative shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-gradient" />
        <div className="flex whitespace-nowrap relative z-10">
          <div className="marquee flex gap-10">
            {["App Design", "Website Design", "Dashboard", "Wireframe", "AI Automation", "Personal Branding", "Video Editing", "Performance Marketing", "App Design", "Website Design", "Dashboard", "Wireframe", "AI Automation", "Personal Branding", "Video Editing", "Performance Marketing"].map((item, i) => <span key={i} className="flex items-center gap-4 text-primary-foreground font-semibold text-lg">
                {item}
                <span className="text-primary-foreground/80">
                  <Sparkles className="w-4 h-4" />
                </span>
              </span>)}
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

          <StaggeredChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" animation="fade-up" staggerDelay={100}>
            {enhancedServices.map((service, index) => <div key={index}>
                <EnhancedServiceCard {...service} />
              </div>)}
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

          <div className="relative">
            {/* Connection line across all steps */}
            <div className="hidden lg:block absolute top-[100px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {brandingSteps.map((step, index) => (
                <div key={index} className="group bg-card rounded-2xl p-6 text-center card-hover border border-border relative overflow-hidden z-10">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Large step number with animation */}
                    <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-[0_0_15px_hsl(var(--primary)/0.4)] group-hover:scale-110 group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)] transition-all duration-300">
                      {index + 1}
                    </div>
                    
                    {/* Enhanced icon with gradient background */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all group-hover:scale-110 duration-300 shadow-md">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors text-base">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{step.description}</p>
                    <p className="text-primary text-xs font-semibold">{step.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

          <StaggeredChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" animation="fade-up" staggerDelay={100}>
            {whyUsCards.map((card, index) => <div key={index} className="group bg-card rounded-2xl p-8 text-center card-hover border border-border relative overflow-hidden h-full min-h-[240px] flex flex-col">
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
              </div>)}
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
    </div>;
}