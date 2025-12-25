import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
const faqs = [{
  question: "What services does Revision Wave offer?",
  answer: "We offer a comprehensive suite of AI-powered marketing services including video editing, strategy consultation, performance marketing, website development, AI agents & automation, and AI-powered personal branding. Each service is designed to help you grow efficiently without the manual grind."
}, {
  question: "How does AI-powered personal branding work?",
  answer: "Our AI-powered personal branding system follows a 5-step process: Trend Research to identify what's working, Script Creation using AI, Avatar & AI Voice generation, Professional Editing, and Auto Publishing. This creates a consistent content pipeline with minimal effort on your part."
}, {
  question: "Is AI-generated content safe for brands?",
  answer: "Absolutely. We use AI as a tool to enhance your authentic voice, not replace it. All content goes through quality checks and maintains your brand's tone and values. Our AI systems are trained on best practices and constantly refined to deliver brand-safe, engaging content."
}, {
  question: "How long before I see results?",
  answer: "Most clients see initial engagement improvements within 2-4 weeks. Full system optimization typically shows significant growth metrics by week 6-8. We track everything and provide transparent reporting so you know exactly what's working."
}, {
  question: "What is your typical project timeline?",
  answer: "Timelines vary based on project scope. Simple campaigns can launch in 1-2 weeks, while comprehensive branding and automation systems typically take 4-6 weeks. We'll provide a detailed timeline during our initial consultation."
}, {
  question: "What industries do you work with?",
  answer: "We work with creators, coaches, consultants, and growing businesses across various industries. Our AI-powered approach adapts to different niches while maintaining the personal touch that makes brands memorable."
}];
export function FAQSection() {
  return <section className="bg-background section-padding relative overflow-hidden">
      {/* Decorative coral wave shape in top right */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M100,0 C150,0 200,50 200,100 C200,50 150,0 100,0" fill="hsl(var(--primary))" opacity="0.8" />
          <path d="M120,0 C170,20 200,70 200,120 C200,60 160,10 120,0" fill="hsl(var(--primary))" opacity="0.6" />
        </svg>
      </div>

      {/* Decorative swirl in bottom left */}
      <div className="absolute bottom-20 left-8 w-16 h-16 md:w-24 md:h-24 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
        </svg>
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-[1fr,380px] gap-12 lg:gap-16">
          {/* Left Column - FAQ */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10">
              Frequently<br />
              <span className="text-foreground">asked questions</span>
            </h2>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border-l-4 border-l-border border-y-0 border-r-0 bg-card rounded-none px-0 data-[state=open]:border-l-primary data-[state=open]:bg-primary/5 transition-all duration-300">
                  <AccordionTrigger className="text-left font-semibold py-5 px-5 hover:no-underline text-foreground hover:text-primary transition-all duration-300 [&[data-state=open]>svg]:rotate-45 [&[data-state=open]]:text-primary [&>svg]:transition-transform">
                    <span className="text-base pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 pt-0">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>

          {/* Right Column - Contact Card */}
          <div className="lg:pt-24">
            <div className="bg-card border border-border rounded-2xl p-8 text-center py-[70px]">
              {/* Icon */}
              <div className="w-14 h-14 bg-foreground rounded-lg flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-7 h-7 text-background" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                Do you have more questions?
              </h3>
              
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                End-to-end marketing and branding solutions in a single platform. Meet the right team to help realize your vision.
              </p>

              <Button asChild className="w-full rounded-lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}