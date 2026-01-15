import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is Launch My Career free?",
      answer: "We offer free initial guidance to help you understand where you stand. Our goal is to provide accessible career support for fresh graduates. Contact us to learn more about our offerings.",
    },
    {
      question: "Can you help if I don't have a resume?",
      answer: "Absolutely! Many of our users start with no resume at all. We guide you step-by-step to create a strong, professional resume from scratch—even if you have limited experience.",
    },
    {
      question: "Can you help if I don't have LinkedIn or GitHub profiles?",
      answer: "Yes! We'll help you set up and optimize both platforms from the ground up. You don't need any prior profiles—we'll guide you through creating them professionally.",
    },
    {
      question: "Do you guarantee jobs or placements?",
      answer: "No, we do not guarantee jobs or placements. We focus on helping you present your skills professionally through resumes, portfolios, and profiles. The hiring decision ultimately depends on many factors beyond presentation.",
    },
    {
      question: "Who is this platform for?",
      answer: "Launch My Career is designed for fresh graduates, final-year college students, and early-career professionals (0–3 years experience) who want to build a strong professional presence.",
    },
    {
      question: "How is this different from training institutes?",
      answer: "We don't sell courses or training programs. Instead, we focus purely on helping you showcase the skills you already have (or are learning) through proper documentation—resumes, portfolios, and professional profiles.",
    },
    {
      question: "How do I get started?",
      answer: "Simply scroll to our contact section and fill out the form. Tell us about your current situation and career goals, and we'll reach out with personalized guidance. Even if you're starting from zero, we're here to help.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Honest answers to your most common questions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 shadow-soft data-[state=open]:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
