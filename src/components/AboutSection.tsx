import { motion } from "framer-motion";
import { Target, Users, Award } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Proof, Not Promises",
      description: "We believe in showing real work. Every service we offer focuses on creating tangible, verifiable proof of your capabilities.",
    },
    {
      icon: Users,
      title: "Recruiter-Focused",
      description: "Our approach is designed around what hiring managers and recruiters actually look for when evaluating candidates.",
    },
    {
      icon: Award,
      title: "Career-Ready Results",
      description: "From resume to portfolio, we ensure every deliverable is professional, polished, and ready for the corporate world.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            About <span className="text-gradient">Launch My Career</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Launch My Career is dedicated to helping fresh graduates and early-career professionals 
            enter the corporate world with <strong className="text-foreground">proof, not promises</strong>. 
            We understand that breaking into the industry can be overwhelming—especially when you don't 
            know where to start.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
