import { motion } from "framer-motion";
import { FileSearch, Linkedin, Globe, ArrowRight, Star, Shield, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: FileSearch,
    title: "Resume Review by Experts",
    tagline: "Honest Feedback • Real Hiring Insight",
    description: "Get your resume reviewed by real experts who understand how hiring actually works. Unbiased feedback to help you understand what's holding you back.",
    cta: "Explore",
    ctaLink: "/reviews/resume-review",
    actionCta: "Get Reviewed",
    actionLink: "/reviews/resume-review/form",
    color: "from-emerald-500 to-teal-600",
    accentIcon: Star,
    badge: "Free",
  },
  {
    icon: Linkedin,
    title: "LinkedIn & GitHub Profile Review",
    tagline: "Recruiter Perspective • Profile Rating",
    description: "Get your professional profiles reviewed the way recruiters actually see them. Receive a rating out of 10 and actionable improvement guidance.",
    cta: "Explore",
    ctaLink: "/reviews/profile-review",
    actionCta: "Get Reviewed",
    actionLink: "/reviews/profile-review/form",
    color: "from-blue-500 to-indigo-600",
    accentIcon: Eye,
    badge: "Free",
  },
  {
    icon: Globe,
    title: "Portfolio Review & Domain Support",
    tagline: "Full Analysis • Domain Guidance",
    description: "Know how strong your portfolio really is. Get expert analysis on structure, presentation, and recruiter impact, plus domain and hosting support.",
    cta: "Explore",
    ctaLink: "/reviews/portfolio-review",
    actionCta: "Get Reviewed",
    actionLink: "/reviews/portfolio-review/form",
    color: "from-violet-500 to-purple-600",
    accentIcon: Shield,
    badge: "Free",
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

const ExpertReviewsSection = () => {
  return (
    <section id="expert-reviews" className="py-28 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 tracking-wide">
            Part 2: Expert Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get <span className="text-gradient">Honest Expert Feedback</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Already have a resume, LinkedIn profile, or portfolio? Get them reviewed by experts 
            who actually work in hiring. No selling, no upselling—just honest, career-focused feedback.
          </p>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">100% Free Reviews</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Unbiased Feedback</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50">
            <Eye className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Real Hiring Experts</span>
          </div>
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
              <div className="relative h-full bg-card rounded-3xl p-8 shadow-card border border-border/50 hover:border-accent/30 transition-all duration-500 overflow-hidden group-hover:shadow-xl">
                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full shadow-lg">
                    {service.badge}
                  </span>
                </div>

                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating accent icon */}
                <div className="absolute bottom-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <service.accentIcon className="w-24 h-24 text-accent" />
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tagline.split(" • ").map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to={service.ctaLink} className="flex-1">
                      <Button 
                        variant="outline"
                        className="w-full border-accent/30 hover:bg-accent/10 hover:border-accent/50 group/btn"
                        size="lg"
                      >
                        {service.cta}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link to={service.actionLink} className="flex-1">
                      <Button 
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-90 text-primary-foreground"
                        size="lg"
                      >
                        {service.actionCta}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 rounded-2xl bg-card border border-border/50">
            <p className="text-foreground font-medium mb-2">
              "This is honest. These people know hiring. I'm safe sharing my details."
            </p>
            <p className="text-sm text-muted-foreground">
              Our only goal is to help you improve—no hidden agendas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertReviewsSection;
