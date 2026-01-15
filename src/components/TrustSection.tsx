import { motion } from "framer-motion";
import { ShieldCheck, Heart, Target, Users } from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "No Fake Promises",
    description: "We provide realistic guidance based on industry standards, not exaggerated claims.",
  },
  {
    icon: Heart,
    title: "No Paid Pressure",
    description: "Our initial consultation is completely free. We believe in value first, always.",
  },
  {
    icon: Target,
    title: "Real Skill Representation",
    description: "We focus on showcasing your genuine abilities, not inflating your profile.",
  },
  {
    icon: Users,
    title: "Designed for Beginners",
    description: "Our entire process is tailored for freshers with little to no experience.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built on Trust & Transparency
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We believe in honest, straightforward career guidance that puts your success first.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-2xl bg-gradient-hero border border-border/50 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center shadow-soft">
                <point.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
