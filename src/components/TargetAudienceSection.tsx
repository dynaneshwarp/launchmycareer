import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Briefcase, AlertCircle } from "lucide-react";

const TargetAudienceSection = () => {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Fresh Graduates",
      description: "Recently completed your degree and looking to break into the corporate world with confidence.",
    },
    {
      icon: BookOpen,
      title: "Final-Year Students",
      description: "Preparing early for placement season and want to stand out from your peers.",
    },
    {
      icon: Briefcase,
      title: "Early-Career Professionals",
      description: "0–3 years of experience, looking to upgrade your professional presence and grow faster.",
    },
  ];

  return (
    <section id="who-is-this-for" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who Is <span className="text-gradient">This For?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Launch My Career is designed specifically for those at the beginning of their professional journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-soft">
                <audience.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{audience.title}</h3>
              <p className="text-sm text-muted-foreground">{audience.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Important Note</h4>
              <p className="text-sm text-muted-foreground">
                This platform is <strong className="text-foreground">not</strong> meant for people looking for instant job guarantees. 
                We focus on helping you build genuine proof of your skills—not making unrealistic promises.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
