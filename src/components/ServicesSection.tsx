import { motion } from "framer-motion";
import { FileText, Linkedin, Globe, ArrowRight, Sparkles, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: FileText,
    title: "Resume Building",
    points: [
      "Handcrafted from your real projects",
      "ATS-optimized & recruiter-approved",
      "Proof-driven, not filler content",
    ],
    summary: "Resumes that prove your work, not just list it.",
    cta: "Explore the Process",
    link: "/services/resume-building",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Linkedin,
    title: "LinkedIn & GitHub Optimization",
    points: [
      "Profile aligned with your resume",
      "Recruiter-focused presentation",
      "Proof links & skill validation added",
    ],
    summary: "Profiles that validate your resume instantly.",
    cta: "See How We Build It",
    link: "/services/linkedin-github",
    color: "from-sky-500 to-cyan-600",
  },
  {
    icon: Sparkles,
    title: "Portfolio Websites",
    points: [
      "Custom-built, recruiter-ready design",
      "Showcases projects & career story",
      "Full ownership — your digital resume",
    ],
    summary: "A digital presence that sets you apart.",
    cta: "View Full Service",
    link: "/services/portfolio-websites",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Video,
    title: "Mock Interview Guidance",
    points: [
      "Real interview simulation",
      "Personalized expert feedback",
      "Confidence & communication coaching",
    ],
    summary: "Prepare to perform, not just participate.",
    cta: "Book Mock Interview",
    link: "/free-guidance",
    color: "from-amber-500 to-orange-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 tracking-wide">
            Career-Building Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Elevate Your <span className="text-gradient">Professional Edge</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From resume to portfolio—build visible, verifiable proof that makes recruiters take you seriously.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-primary/30 transition-all duration-400 overflow-hidden group-hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <ul className="space-y-2 mb-4 flex-1">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs font-medium text-foreground/80 mb-5">
                    {service.summary}
                  </p>

                  <Link to={service.link} className="mt-auto">
                    <Button
                      className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground text-sm group/btn"
                      size="default"
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
