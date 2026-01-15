import { motion } from "framer-motion";
import { ArrowLeft, Linkedin, Github, Check, Eye, Globe, Users, Code, MessageSquare, GitBranch, Target, Zap, Award, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import linkedinGithubHero from "@/assets/linkedin-github-hero.jpg";
import githubProfile from "@/assets/github-profile.jpg";

const LinkedInGitHub = () => {
  const linkedinFeatures = [
    {
      icon: Eye,
      title: "Professional Profile Image & Banner",
      description: "We create polished visuals using advanced tools that reflect your personal brand and make a strong first impression.",
    },
    {
      icon: Users,
      title: "Project-Based Structuring",
      description: "Your profile is organized around real projects and measurable outcomes—not vague job descriptions.",
    },
    {
      icon: MessageSquare,
      title: "Role-Relevant Descriptions",
      description: "Clear, impactful descriptions that align with your target roles and speak the language recruiters understand.",
    },
    {
      icon: Globe,
      title: "Direct Proof Links",
      description: "GitHub repositories, portfolio websites, and live demos added directly to your profile for instant validation.",
    },
    {
      icon: Target,
      title: "Recruiter Search Optimization",
      description: "Your profile is optimized to appear in recruiter searches for relevant roles and skills.",
    },
  ];

  const githubFeatures = [
    {
      icon: Code,
      title: "Professional Profile Setup",
      description: "A compelling GitHub bio and profile README that showcases your expertise and development journey.",
    },
    {
      icon: GitBranch,
      title: "Repository Organization",
      description: "Structured repositories and project files that demonstrate professionalism and attention to detail.",
    },
    {
      icon: MessageSquare,
      title: "README Excellence",
      description: "Comprehensive README files that explain your projects clearly—what, why, and how.",
    },
    {
      icon: Zap,
      title: "Technical Impact Showcase",
      description: "Highlighting your problem-solving abilities and the real technical impact of your work.",
    },
    {
      icon: Users,
      title: "Collaboration Learning",
      description: "Guidance on commits, branches, and contributing to others' projects to show teamwork skills.",
    },
    {
      icon: Lightbulb,
      title: "Open Source Guidance",
      description: "Learn to explore, debug, and contribute to open source—making you look like an active developer.",
    },
  ];

  const deliverables = [
    "Professional profile image and banner creation",
    "Structured profile around real projects and outcomes",
    "Clear, role-relevant descriptions and headlines",
    "Direct proof links to GitHub, portfolio, live demos",
    "Improved visibility in recruiter searches",
    "Professional GitHub bio and profile README",
    "Organized repositories with proper structure",
    "Comprehensive README files and documentation",
    "Showcased problem-solving and technical impact",
    "Collaboration guidance through commits and branches",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={linkedinGithubHero} 
            alt="Professional profiles on screens" 
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
                Professional
              </span>
              <span className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Proof-Based
              </span>
              <span className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Recruiter-Focused
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Optimizing <span className="text-gradient">LinkedIn & GitHub</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
              In the corporate world, public profiles matter more than claims. Your LinkedIn and GitHub are 
              <strong className="text-foreground"> your public interview before the actual interview</strong>—the first place 
              recruiters validate your resume.
            </p>

            <div className="p-6 rounded-2xl bg-card border border-border/50 inline-block">
              <p className="text-foreground font-medium">
                We help you show recruiters <span className="text-primary">what you did</span>, how you did it, and <span className="text-primary">why it matters</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why This Matters</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Many candidates apply and comment on job posts, but when recruiters visit their profiles, 
                there is <strong className="text-foreground">no resume, no portfolio, and no visible work</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-muted/50 border border-border">
                <h3 className="text-xl font-bold mb-4 text-destructive">The Average Candidate</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Generic headline like "Aspiring Software Developer"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Empty GitHub with no README or documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Copy-pasted job descriptions in experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>No proof links or portfolio</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-primary">The Standout Candidate</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Role-specific headline with clear value proposition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Well-organized GitHub with detailed project READMEs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Project-based descriptions with measurable impact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Direct links to live demos and portfolio</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LinkedIn Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0A66C2] flex items-center justify-center shadow-lg">
              <Linkedin className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">LinkedIn Optimization</h2>
              <p className="text-muted-foreground">Build a profile that attracts recruiters and opens doors</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {linkedinFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-[#0A66C2]/30 hover:shadow-card transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center mb-4 group-hover:bg-[#0A66C2]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#0A66C2]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/5"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center shadow-lg">
                  <Github className="w-8 h-8 text-background" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">GitHub Optimization</h2>
                  <p className="text-muted-foreground">Showcase your code professionally</p>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-card mb-8">
                <img 
                  src={githubProfile} 
                  alt="Developer reviewing code" 
                  className="w-full"
                />
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your GitHub profile is where you demonstrate real technical skills. We help you organize and 
                present your repositories in a way that showcases problem-solving abilities and 
                technical impact.
              </p>
              <p className="text-foreground font-medium">
                Make your profile look like an active developer, not a passive learner.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-3/5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {githubFeatures.map((feature, idx) => (
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

      {/* Mindset Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Mindset Shift</h2>
              <p className="text-lg text-muted-foreground">
                Standing out in today's job market requires a different approach
              </p>
            </div>

            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 border border-primary/10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow">
                  <Lightbulb className="w-10 h-10 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Standing out is <strong className="text-foreground">not</strong> about commenting "interested" on every job post. 
                    It's not about sending generic connection requests with copy-pasted messages.
                  </p>
                  <p className="text-xl font-bold text-foreground">
                    It's about having a profile that <span className="text-primary">speaks for you</span> when you're not present.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promise & Philosophy */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Promise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We manually organize and present your work so your profile looks <strong className="text-foreground">professional, 
                  credible, and recruiter-ready</strong>. Every element is intentional and aligned with 
                  what hiring managers look for.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-muted/50 border border-border">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">Core Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We help candidates stand out by presenting <strong className="text-foreground">real proof, not noise</strong>. Your profiles 
                  should tell a story of competence and dedication that resonates with recruiters 
                  before you even speak to them.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaway */}
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
                "If your profile looks average, you will be treated like an average candidate."
              </p>
              <p className="text-muted-foreground mt-6 text-lg">
                Show recruiters <span className="text-primary font-medium">what you did</span>, how you did it, 
                and <span className="text-primary font-medium">why it matters</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Get</h2>
            <p className="text-lg text-muted-foreground">A complete profile transformation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {deliverables.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Profiles?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your LinkedIn and GitHub into powerful assets that validate your resume 
              and attract recruiters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8">
                  Get Started
                </Button>
              </Link>
              <Link to="/services/portfolio-websites">
                <Button size="lg" variant="outline">
                  Next: Build Your Portfolio
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

export default LinkedInGitHub;
