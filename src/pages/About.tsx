import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logoFull from "@/assets/logo-full.jpeg";
import { CheckCircle, XCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <img 
                src={logoFull} 
                alt="Launch My Career Logo" 
                className="h-24 w-auto object-contain mx-auto mb-8 rounded-lg"
              />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">Launch My Career</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Helping fresh graduates enter the corporate world with confidence, clarity, and proof of their abilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                The <span className="text-gradient">Challenge</span> Fresh Graduates Face
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Breaking into the corporate world isn't easy—especially when you're just starting out. 
                  Many talented graduates struggle not because they lack skills, but because they don't 
                  know how to present themselves professionally.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Common Struggles</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-destructive mt-1">•</span>
                        <span>No idea how to write a professional resume</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-destructive mt-1">•</span>
                        <span>Empty or poorly optimized LinkedIn profiles</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-destructive mt-1">•</span>
                        <span>GitHub accounts with no visible projects</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-destructive mt-1">•</span>
                        <span>No portfolio to showcase their work</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft">
                    <h3 className="text-lg font-semibold text-foreground mb-3">The Result</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-destructive mt-1">•</span>
                        <span>Applications get overlooked by recruiters</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-destructive mt-1">•</span>
                        <span>Difficulty standing out among other candidates</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-destructive mt-1">•</span>
                        <span>Loss of confidence during the job search</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-destructive mt-1">•</span>
                        <span>Feeling unprepared for the corporate world</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What We <span className="text-gradient">Actually Do</span>
              </h2>

              <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Launch My Career focuses on one thing: helping you show proof of your skills, not just make claims.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* What We Do */}
                <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="w-7 h-7 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">What We Do</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Provide guidance on building professional resumes</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Help optimize your LinkedIn profile for visibility</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Assist in setting up and organizing your GitHub</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Guide you in creating a portfolio website</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Offer honest, beginner-friendly career advice</span>
                    </li>
                  </ul>
                </div>

                {/* What We Don't Do */}
                <div className="p-8 rounded-3xl bg-destructive/5 border border-destructive/20">
                  <div className="flex items-center gap-3 mb-6">
                    <XCircle className="w-7 h-7 text-destructive" />
                    <h3 className="text-xl font-bold text-foreground">What We Don't Do</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>We do not offer job guarantees or placements</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>We do not sell training courses or certifications</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>We do not make fake promises about your career</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>We do not pressure you into paid services</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>We do not use fake testimonials or claims</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Promise */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Promise</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We promise to be transparent, ethical, and supportive. Our only goal is to help you 
                present your genuine skills in the most professional way possible. No shortcuts, 
                no false claims—just real guidance for real career growth.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
