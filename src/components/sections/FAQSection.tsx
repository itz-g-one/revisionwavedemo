import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Revision Wave offer?",
    answer: "We offer a comprehensive suite of AI-powered marketing services including video editing, strategy consultation, performance marketing, website development, AI agents & automation, and AI-powered personal branding. Each service is designed to help you grow efficiently without the manual grind.",
  },
  {
    question: "How does AI-powered personal branding work?",
    answer: "Our AI-powered personal branding system follows a 5-step process: Trend Research to identify what's working, Script Creation using AI, Avatar & AI Voice generation, Professional Editing, and Auto Publishing. This creates a consistent content pipeline with minimal effort on your part.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary based on project scope. Simple campaigns can launch in 1-2 weeks, while comprehensive branding and automation systems typically take 4-6 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "How do you use AI in your services?",
    answer: "We leverage AI across all our services - from content generation and video editing to analytics and automation. This allows us to deliver faster results, reduce costs, and provide insights that wouldn't be possible with traditional methods alone.",
  },
  {
    question: "What industries do you work with?",
    answer: "We work with creators, coaches, consultants, and growing businesses across various industries. Our AI-powered approach adapts to different niches while maintaining the personal touch that makes brands memorable.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-dark-section text-dark-section-foreground section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium mb-2 inline-block">— FAQs</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Questions? <span className="text-primary italic">Look here.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-dark-section-foreground/5 rounded-xl border-none px-6 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground transition-colors"
              >
                <AccordionTrigger className="text-left font-medium py-5 hover:no-underline data-[state=open]:text-primary-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm pb-5 opacity-90">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
