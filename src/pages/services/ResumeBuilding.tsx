import { motion } from "framer-motion";
import { ArrowLeft, FileText, Check, Shield, Target, Sparkles, Clock, Users, Code, Layers, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import resumeHero from "@/assets/resume-hero.jpg";
import resumeAts from "@/assets/resume-ats.png";

const ResumeBuilding = () => {
  const processSteps = [
    {
      step: "01",
      title: "Deep Project Analysis",
      description: "We thoroughly analyze all your projects, especially GitHub repositories, to understand the real work you've done—the challenges faced, solutions implemented, and impact created.",
      icon: Target,
    },
    {
      step: "02",
      title: "Skill Extraction & Validation",
      description: "We extract only genuine skills that you've actually demonstrated in your projects. No padding, no guessing—every skill can be backed by evidence.",
      icon: Sparkles,
    },
    {
      step: "03",
      title: "Recruiter-Focused Writing",
      description: "Every bullet point is crafted using proven resume rules. We write in the language recruiters understand—action verbs, quantified impact, and clear value propositions.",
      icon: Users,
    },
    {
      step: "04",
      title: "Role Alignment",
      description: "We align your resume content with your targeted job roles, ensuring the right keywords and experiences are highlighted for maximum relevance.",
      icon: Layers,
    },
    {
      step: "05",
      title: "LaTeX Formatting",
      description: "Your resume is built using LaTeX for a clean, professional structure that stands out visually while maintaining perfect readability and consistency.",
      icon: Code,
    },
    {
      step: "06",
      title: "ATS Optimization & Review",
      description: "We ensure your resume passes through Applicant Tracking Systems with proper formatting, keywords, and structure. Then we validate using trusted ATS tools and real HR feedback.",
      icon: Shield,
    },
  ];

  const whatMakesUsDifferent = [
    {
      icon: FileText,
      title: "Built from Scratch",
      description: "No templates, no copy-paste. Every resume is created fresh based on your unique background and goals.",
    },
    {
      icon: Target,
      title: "Project-Driven Content",
      description: "We extract powerful bullet points directly from your real projects—what you built, why you built it, and what impact it had.",
    },
    {
      icon: Shield,
      title: "No Filler Content",
      description: "We remove vague statements and buzzwords. Every line serves a purpose and adds credibility to your profile.",
    },
    {
      icon: Zap,
      title: "Interview-Ready",
      description: "Because your resume is based on real work, you can confidently discuss every point in interviews without memorizing scripts.",
    },
  ];

  const trustPoints = [
    { 
      icon: Users,
      title: "Fully Manual Process", 
      description: "Every resume is handcrafted by experts who understand both technical roles and recruiter expectations. No AI generation, no shortcuts." 
    },
    { 
      icon: Shield,
      title: "No Fake Skills", 
      description: "We never add skills you haven't demonstrated. If it's not in your projects, it's not on your resume. Period." 
    },
    { 
      icon: Award,
      title: "Real Work Only", 
      description: "Resume content strictly reflects actual achievements. This means you'll never be caught off-guard in interviews." 
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={resumeHero} 
            alt="Professional resume review" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/#services">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Proof-Driven
              </span>
              <span className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
                ATS-Friendly
              </span>
              <span className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Project-Focused
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Building Strong <span className="text-gradient">Resumes</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
              Fresh graduates struggle to build strong resumes—not because they lack skills, 
              but because they don't know how to present their projects in a way that 
              <strong className="text-foreground"> recruiters and ATS systems understand</strong>.
            </p>

            <div className="p-6 rounded-2xl bg-card border border-border/50 inline-block mb-8">
              <p className="text-foreground font-medium">
                We craft resumes that are <span className="text-primary">handcrafted</span>, <span className="text-primary">project-driven</span>, <span className="text-primary">proof-based</span>, and <span className="text-primary">recruiter-validated</span>.
              </p>
            </div>

            <a 
              href="https://drive.google.com/file/d/1IQWryKG9JhMMZbhqED2H2zcxKEuKummQ/view" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="gap-2">
                <FileText className="w-4 h-4" />
                View Resume Example
              </Button>
            </a>
           </motion.div>
         </div>
       </section>

      {/* The Problem We Solve */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Real Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Most candidates have done meaningful work but present it poorly. They use generic templates, 
              copy buzzwords from the internet, and list skills they can't demonstrate. 
              <strong className="text-foreground"> The result? Their resume gets filtered out by ATS or ignored by recruiters.</strong>
            </p>
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 inline-block">
              <p className="text-lg font-medium text-foreground">
                Your work deserves to be seen. We make sure it is.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Value Proposition */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="lg:w-1/2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
                <FileText className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Handcrafted from Scratch, Based on <span className="text-gradient">Real Work</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Launch My Career, resumes are manually handcrafted from scratch, 
                based entirely on your real projects and skills. We don't use 
                templates or AI-generated content—every word is intentional.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We study each project deeply, understanding not just what you built, but 
                <strong className="text-foreground"> the problems you solved</strong> and 
                <strong className="text-foreground"> the value you created</strong>.
              </p>
              <p className="text-foreground font-medium">
                Your resume becomes a truthful representation of your capabilities—one that 
                stands up to interview questions.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={resumeAts} 
                  alt="ATS-friendly resume design" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm font-medium text-primary">LaTeX-formatted • ATS-optimized • Recruiter-approved</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This isn't about making your resume "look nice"—it's about making it work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whatMakesUsDifferent.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-card transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our 6-Step Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach that transforms your projects into a compelling, interview-ready resume
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl bg-card border border-border/50 group hover:border-primary/30 hover:shadow-card transition-all"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg">
                  {step.step}
                </div>
                <div className="pt-4">
                  <step.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why This Is <span className="text-gradient">Trustworthy</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in authenticity over embellishment. Our approach ensures your resume is credible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {trustPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <point.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Note */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 md:p-12 rounded-3xl bg-muted/50 border border-border">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Eligibility Note</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    This service is designed for candidates who have completed at least 
                    <strong className="text-foreground"> 3–4 real projects</strong> and actively use 
                    <strong className="text-foreground"> GitHub</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    If you don't have enough projects yet, don't worry. We provide guidance on 
                    what to build first—practical projects that demonstrate real skills and create 
                    genuine resume content.
                  </p>
                  <div className="p-6 rounded-xl bg-card border border-border">
                    <p className="text-foreground font-medium italic text-lg">
                      "We don't write resumes to impress everyone.<br />
                      We write resumes that <span className="text-primary">prove your work</span> to recruiters."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Resume?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step towards a resume that truly represents your skills and potential. 
              A resume that gets you interviews, not rejections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8">
                  Get Started
                </Button>
              </Link>
              <Link to="/services/linkedin-github">
                <Button size="lg" variant="outline">
                  Next: Optimize Your Profiles
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResumeBuilding;
