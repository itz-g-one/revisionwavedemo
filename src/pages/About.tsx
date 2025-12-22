import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Target, Users, Lightbulb, Award } from "lucide-react";

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
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <span className="text-primary text-sm font-medium mb-2 inline-block">— Who We Are</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Visions into <span className="text-primary italic">Waves of Impact</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Revision Wave is an AI-enabled digital marketing and personal branding agency. 
              We help creators, coaches, and businesses grow with automation-first strategies 
              that eliminate the manual grind.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-secondary-foreground/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="text-primary text-sm font-medium mb-2 inline-block">— Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Born from the Future of <span className="text-primary italic">Marketing</span>
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
            </div>
            <div className="bg-off-white rounded-3xl p-8 animate-slide-in-right">
              <div className="aspect-video bg-secondary rounded-2xl flex items-center justify-center">
                <span className="text-secondary-foreground/60 text-sm">Company Video Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium mb-2 inline-block">— Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Drives <span className="text-primary italic">Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center card-hover border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
