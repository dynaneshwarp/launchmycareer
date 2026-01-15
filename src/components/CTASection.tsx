import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Ready to Start?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Take the First Step Towards Your <span className="text-gradient">Dream Career</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Whether you're ready to get started or just want to ask a few questions, 
            we're here to help you build visible proof that gets you noticed.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Get Started Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-3xl p-8 shadow-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 mx-auto">
                <Sparkles className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ready to Begin?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Fill out our onboarding form and let's start building your career toolkit together.
              </p>
              <Button asChild variant="hero" size="lg" className="w-full">
                <Link to="/get-started">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Free Guidance Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-3xl p-8 shadow-card border border-border/50 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                <MessageSquare className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Have Questions?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Not sure where to start? Reach out for free, no-pressure career guidance.
              </p>
              <Button asChild variant="outline" size="lg" className="w-full border-accent/30 hover:bg-accent/5 hover:border-accent/50">
                <Link to="/free-guidance">
                  Get Free Guidance
                  <MessageSquare className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-muted-foreground mt-10"
          >
            No sales pressure. No spam. Just honest help for your career journey.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
