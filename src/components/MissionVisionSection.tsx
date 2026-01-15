import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const MissionVisionSection = () => {
  return (
    <section id="mission-vision" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Mission & Vision</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What drives us every day to help fresh graduates succeed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-soft">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Help freshers confidently start their corporate careers by converting their skills, 
                learning, and projects into visible proof through resumes, portfolios, and professional profiles.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-accent to-primary flex items-center justify-center mb-6 shadow-soft">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Create a future where every graduate—regardless of background—has clarity, confidence, 
                and a strong professional presence, and where talent is judged by real work, not just words.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
