import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Sparkles, Clock, Bot, Users, Briefcase, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What services does Revision Wave offer?",
    answer: "We offer a comprehensive suite of AI-powered marketing services including video editing, strategy consultation, performance marketing, website development, AI agents & automation, and AI-powered personal branding. Each service is designed to help you grow efficiently without the manual grind.",
    icon: Briefcase,
  },
  {
    question: "How does AI-powered personal branding work?",
    answer: "Our AI-powered personal branding system follows a 5-step process: Trend Research to identify what's working, Script Creation using AI, Avatar & AI Voice generation, Professional Editing, and Auto Publishing. This creates a consistent content pipeline with minimal effort on your part.",
    icon: Bot,
  },
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary based on project scope. Simple campaigns can launch in 1-2 weeks, while comprehensive branding and automation systems typically take 4-6 weeks. We'll provide a detailed timeline during our initial consultation.",
    icon: Clock,
  },
  {
    question: "How do you use AI in your services?",
    answer: "We leverage AI across all our services - from content generation and video editing to analytics and automation. This allows us to deliver faster results, reduce costs, and provide insights that wouldn't be possible with traditional methods alone.",
    icon: Sparkles,
  },
  {
    question: "What industries do you work with?",
    answer: "We work with creators, coaches, consultants, and growing businesses across various industries. Our AI-powered approach adapts to different niches while maintaining the personal touch that makes brands memorable.",
    icon: Users,
  },
];

export function FAQSection() {
  return (
    <section className="bg-dark-section text-dark-section-foreground section-padding relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--dark-section-foreground)) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-14">
          {/* Decorative icon */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
          </div>
          <span className="text-primary text-sm font-medium mb-2 inline-block">— FAQs</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Questions? <span className="text-primary italic">Look here.</span>
          </h2>
          <p className="text-dark-section-foreground/70 mt-4 max-w-xl mx-auto">
            Find answers to common questions about our services and process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group bg-dark-section-foreground/5 backdrop-blur-sm rounded-2xl border border-dark-section-foreground/10 overflow-hidden data-[state=open]:bg-primary data-[state=open]:border-primary data-[state=open]:shadow-lg data-[state=open]:shadow-primary/20 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold py-5 px-6 hover:no-underline data-[state=open]:text-primary-foreground group-hover:text-primary data-[state=open]:group-hover:text-primary-foreground transition-colors">
                  <div className="flex items-center gap-4">
                    {/* Icon for each question */}
                    <div className="w-10 h-10 rounded-xl bg-dark-section-foreground/10 group-data-[state=open]:bg-primary-foreground/20 flex items-center justify-center shrink-0 transition-colors">
                      <faq.icon className="w-5 h-5 text-primary group-data-[state=open]:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-base">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <div className="pl-14">
                    {/* Small decorative element before answer */}
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-full min-h-[20px] bg-primary-foreground/30 rounded-full mt-1" />
                      <p className="text-sm leading-relaxed opacity-90">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}