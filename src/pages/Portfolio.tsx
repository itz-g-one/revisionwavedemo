import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedSection, StaggeredChildren } from "@/components/ui/animated-section";

const categories = ["All", "Branding", "Web Design", "Marketing", "Video"];

const projects = [
  {
    id: 1,
    title: "TechFlow Brand Identity",
    category: "Branding",
    description: "Complete brand overhaul for a SaaS startup",
    color: "bg-primary",
  },
  {
    id: 2,
    title: "Wellness App Website",
    category: "Web Design",
    description: "E-commerce platform for wellness products",
    color: "bg-secondary",
  },
  {
    id: 3,
    title: "Coach Marketing Campaign",
    category: "Marketing",
    description: "Lead generation for a business coach",
    color: "bg-primary/80",
  },
  {
    id: 4,
    title: "Content Creator Rebrand",
    category: "Branding",
    description: "Personal branding for a YouTube creator",
    color: "bg-secondary/80",
  },
  {
    id: 5,
    title: "Product Launch Videos",
    category: "Video",
    description: "Video series for product launch",
    color: "bg-primary/60",
  },
  {
    id: 6,
    title: "Agency Website Redesign",
    category: "Web Design",
    description: "Modern website for marketing agency",
    color: "bg-secondary/60",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 section-padding">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium mb-2 inline-block">— Our Work</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Projects That Make <span className="text-primary italic">Waves</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of successful projects across branding, web design, marketing, and video.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter */}
      <section className="section-padding pt-0">
        <div className="container-wide">
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </AnimatedSection>

          {/* Projects Grid */}
          <StaggeredChildren
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            animation="scale"
            staggerDelay={100}
            key={activeCategory}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
              >
                <div className={`${project.color} rounded-2xl aspect-[4/3] relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center p-6">
                      <h3 className="text-lg font-bold text-background mb-2">{project.title}</h3>
                      <p className="text-background/80 text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </StaggeredChildren>

          {/* More Projects CTA */}
          <AnimatedSection className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Request Full Portfolio</Link>
            </Button>
          </AnimatedSection>
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
