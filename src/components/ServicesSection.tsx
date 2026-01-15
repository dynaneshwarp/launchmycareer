import { motion } from "framer-motion";
import { FileText, Linkedin, Github, Globe, ArrowRight, Sparkles, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: FileText,
    title: "Building Strong Resumes",
    tagline: "Proof-Driven • ATS-Friendly • Project-Focused",
    description: "We handcraft resumes from scratch based on your real projects. Every bullet point is written to pass ATS systems and impress recruiters who validate skills.",
    outcome: "Resumes that prove your work, not just list it",
    cta: "Explore the Process",
    link: "/services/resume-building",
    color: "from-blue-500 to-blue-600",
    accentIcon: Target,
  },
  {
    icon: Globe,
    title: "Optimizing LinkedIn & GitHub",
    tagline: "Professional • Proof-Based • Recruiter-Focused",
    description: "Transform your public profiles into recruiter magnets. We organize your work, add proof links, and make your profiles speak for you before you even apply.",
    outcome: "Profiles that validate your resume instantly",
    cta: "See How We Build It",
    link: "/services/linkedin-github",
    color: "from-sky-500 to-cyan-600",
    accentIcon: Eye,
  },
  {
    icon: Sparkles,
    title: "Creating Portfolio Websites",
    tagline: "Digital Resume • Full Ownership • Recruiter-Ready",
    description: "A portfolio is your digital proof of work. We build professional, custom websites that showcase your projects, skills, and career story—all under your ownership.",
    outcome: "A digital resume that sets you apart",
    cta: "View Full Service",
    link: "/services/portfolio-websites",
    color: "from-violet-500 to-purple-600",
    accentIcon: Globe,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 tracking-wide">
            Career-Building Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Your <span className="text-gradient">Career Journey</span>, Step by Step
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From resume to public profile to portfolio—we help you build visible, verifiable proof 
            that makes recruiters take you seriously. Each service builds on the next.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Step indicator for desktop */}
              <div className="hidden lg:flex absolute -top-4 left-8 z-20">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Connector line for desktop */}
              {index < services.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+0.5rem)] w-[calc(2rem-1rem)] h-[2px] bg-gradient-to-r from-primary/30 to-primary/10 z-10" />
              )}

              <div className="relative h-full bg-card rounded-3xl p-8 shadow-card border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden group-hover:shadow-xl">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating accent icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <service.accentIcon className="w-24 h-24 text-primary" />
                </div>

                <div className="relative z-10">
                  {/* Mobile step indicator */}
                  <div className="lg:hidden flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">Step {index + 1} of 3</span>
                  </div>

                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tagline.split(" • ").map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-foreground font-medium mb-8 p-4 rounded-xl bg-muted/50 border border-border/50">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">{service.outcome}</span>
                  </div>

                  <Link to={service.link}>
                    <Button 
                      className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground group/btn"
                      size="lg"
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Career flow indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-sm font-medium">
            <span className="text-primary">Resume</span>
            <span className="mx-3">→</span>
            <span className="text-primary">Public Proof</span>
            <span className="mx-3">→</span>
            <span className="text-primary">Digital Presence</span>
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            The complete career-building journey for fresh graduates
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
