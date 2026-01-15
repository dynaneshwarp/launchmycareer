import { motion } from "framer-motion";
import { CheckCircle2, Eye, TrendingUp, Award } from "lucide-react";

const reasons = [
  {
    icon: Eye,
    title: "Recruiters Trust What They See",
    description: "Hiring managers spend more time evaluating visible work than reading claims on paper.",
  },
  {
    icon: TrendingUp,
    title: "Evidence Beats Words",
    description: "Portfolios, GitHub repositories, and LinkedIn activity act as real-world evidence of your capabilities.",
  },
  {
    icon: Award,
    title: "Stand Out from the Crowd",
    description: "While others list skills, you'll demonstrate them—making you memorable to employers.",
  },
  {
    icon: CheckCircle2,
    title: "Convert Learning into Proof",
    description: "We help you transform your education and projects into tangible, shareable proof of expertise.",
  },
];

const WhyProofSection = () => {
  return (
    <section id="why-proof" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Why Proof Matters in Corporate Life
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              In today's competitive job market, simply listing skills on your resume isn't enough. Recruiters and hiring managers want to see tangible evidence of what you can do. That's where proof-based career building comes in.
            </p>
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
              <p className="text-foreground font-medium italic">
                "Show, don't tell. In the corporate world, your visible work speaks louder than any claim you could make on paper."
              </p>
            </div>
          </motion.div>

          {/* Right content - Reasons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className="flex gap-4 p-5 rounded-xl bg-card shadow-soft border border-border/50 hover:shadow-card hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyProofSection;
