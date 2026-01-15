import { motion } from "framer-motion";
import { ArrowLeft, Globe, Check, ExternalLink, Code, Cloud, User, Briefcase, Award, FolderOpen, Mail, Github, Linkedin, FileText, Sparkles, Eye, Shield, Zap, Target, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import portfolioHero from "@/assets/portfolio-hero.jpg";
import portfolioShowcase from "@/assets/portfolio-showcase.jpg";
import portfolioOwnership from "@/assets/portfolio-ownership.jpg";

const PortfolioWebsites = () => {
  const portfolioFeatures = [
    {
      icon: User,
      title: "Professional Image",
      description: "AI-generated professional photo if you don't have one, ensuring your first impression is polished and corporate-ready.",
    },
    {
      icon: ExternalLink,
      title: "Smart Redirect Buttons",
      description: "Direct links to your GitHub, LinkedIn, Resume, and live project demos—giving recruiters instant access to your proof of work.",
    },
    {
      icon: Briefcase,
      title: "About & Career Focus",
      description: "A compelling introduction that tells your story, highlights your career aspirations, and positions you as a serious candidate.",
    },
    {
      icon: Award,
      title: "Education & Experience",
      description: "Structured sections showcasing your academic background and any relevant professional experiences.",
    },
    {
      icon: Sparkles,
      title: "Skills & Expertise",
      description: "Visual skill presentation that highlights your technical competencies and areas of expertise.",
    },
    {
      icon: FolderOpen,
      title: "Featured Projects",
      description: "Detailed project showcases with explanations of what you built, technologies used, and links to live demos.",
    },
    {
      icon: Code,
      title: "More Projects Section",
      description: "Additional project links pointing to your GitHub repositories for those who want to explore deeper.",
    },
    {
      icon: Shield,
      title: "Verified Certifications",
      description: "Display your certifications with visible verification links, adding credibility to your profile.",
    },
    {
      icon: Mail,
      title: "Get-in-Touch Section",
      description: "A functional contact form that delivers messages directly to your email, making it easy for recruiters to reach you.",
    },
  ];

  const whyPortfolioMatters = [
    {
      icon: Target,
      title: "Beyond the Resume",
      description: "In today's high-competition, low-demand job market, resumes alone are not enough. Hundreds of candidates apply for the same role—most with similar qualifications. A portfolio sets you apart.",
    },
    {
      icon: Eye,
      title: "Visible Proof of Work",
      description: "A portfolio acts as living proof of what you can do. Recruiters want to see what you did, how you did it, and why it matters—not just read claims on a resume.",
    },
    {
      icon: Zap,
      title: "Automatic Profile Boost",
      description: "Attaching a portfolio link to your resume, LinkedIn, Naukri, and other job platforms automatically increases your profile strength compared to candidates without one.",
    },
  ];

  const ownershipFeatures = [
    {
      icon: Code,
      title: "Full Source Code",
      description: "You receive the complete, working source code of your portfolio website. No black boxes, no locked templates.",
    },
    {
      icon: Github,
      title: "GitHub Ready",
      description: "Code is structured and ready to be pushed to your own GitHub repository, demonstrating your ownership.",
    },
    {
      icon: Cloud,
      title: "Online Hosting",
      description: "Your portfolio is hosted online and accessible to anyone with the link—share it everywhere.",
    },
    {
      icon: Shield,
      title: "Complete Ownership",
      description: "The portfolio is 100% yours—you own it, control it, and can modify it anytime. No subscriptions, no platform lock-in.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={portfolioHero} 
            alt="Professional portfolio website" 
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
                Digital Resume
              </span>
              <span className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Full Ownership
              </span>
              <span className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Recruiter-Ready
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Creating <span className="text-gradient">Portfolio Websites</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
              A portfolio is not optional—it's a <strong className="text-foreground">digital resume with proof</strong>. 
              It's where recruiters see what you've built, how you think, and why they should consider you 
              over hundreds of other candidates.
            </p>

            <div className="p-6 rounded-2xl bg-card border border-border/50 inline-block">
              <p className="text-foreground font-medium">
                Your portfolio increases <span className="text-primary">shortlisting probability</span>, builds <span className="text-primary">confidence before interviews</span>, and gives you <span className="text-primary">complete ownership</span> of your digital presence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Portfolio Matters */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why a Portfolio is <span className="text-gradient">Essential</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In today's competitive job market, visibility matters more than ever
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyPortfolioMatters.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-lg">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-12 mb-20"
          >
            <div className="lg:w-1/2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Professional, <span className="text-gradient">Recruiter-Friendly</span> Portfolios
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We don't use generic templates. Every portfolio is <strong className="text-foreground">handcrafted after direct discussion</strong> with you. 
                Your creativity, preferences, and career goals are incorporated to create something that truly represents who you are.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We take time to understand your projects, your story, and what makes you unique. The result is a portfolio that 
                <strong className="text-foreground"> speaks for you</strong> even when you're not in the room.
              </p>
              <p className="text-foreground font-medium">
                The result? A portfolio that looks clean, premium, confident, and corporate-ready.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={portfolioShowcase} 
                  alt="Portfolio website showcase" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete portfolio solution designed to impress recruiters and showcase your best work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portfolioFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-card transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ownership Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/5"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={portfolioOwnership} 
                  alt="Code ownership and deployment" 
                  className="w-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-3/5"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Code, Hosting & <span className="text-gradient">Complete Ownership</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Unlike template-based solutions where you're locked into a platform, you receive 
                <strong className="text-foreground"> full ownership</strong> of everything we create for you. 
                No monthly fees, no platform dependencies, no restrictions.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {ownershipFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 border border-primary/20 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  See It in <span className="text-gradient">Action</span>
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Words can only describe so much. We believe in showing, not just telling. 
                  Explore a live demo portfolio to see exactly what you'll get—test all features, 
                  browse projects, and experience the quality firsthand.
                </p>

                <p className="text-foreground font-medium mb-8">
                  You can explore and test all features in the demo portfolio.
                </p>

                <a 
                  href="https://vinodbavageportfolio.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 group">
                    <Globe className="w-5 h-5 mr-2" />
                    Explore Demo Portfolio
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shortlisting Advantage */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The <span className="text-gradient">Shortlisting Advantage</span></h2>
              <p className="text-lg text-muted-foreground">
                How a portfolio changes the way recruiters see your application
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-muted/50 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <FileText className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-muted-foreground">Without Portfolio</h3>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-0.5">✗</span>
                    <span>Resume gets lost in hundreds of applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-0.5">✗</span>
                    <span>No way to verify claims or demonstrate skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-0.5">✗</span>
                    <span>Recruiters move to the next candidate quickly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-0.5">✗</span>
                    <span>Profile looks incomplete on job platforms</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">With Portfolio</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Instant access to your work samples and demos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Live demos prove your technical capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Recruiters spend more time on your profile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Stronger presence on LinkedIn, Naukri, etc.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-hero border border-primary/20">
              <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
              <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                "A portfolio doesn't just show what you've done—it shows 
                <span className="text-gradient"> who you're becoming</span>."
              </p>
              <p className="text-muted-foreground mt-6 text-lg">
                Make recruiters see your potential, not just your experience.
              </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Portfolio?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step towards a professional online presence that makes recruiters take notice 
              and sets you apart from the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8">
                  Get Started
                </Button>
              </Link>
              <a 
                href="https://vinodbavageportfolio.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Demo First
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioWebsites;
