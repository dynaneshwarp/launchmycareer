import { motion } from "framer-motion";
import { ArrowLeft, Globe, Check, Shield, Users, Star, Eye, Award, BarChart3, Server, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PortfolioReview = () => {
  const whatWeReview = [
    {
      title: "Portfolio Structure & Presentation",
      description: "We analyze how your portfolio is organized and whether the layout effectively showcases your work.",
    },
    {
      title: "Project Explanations",
      description: "We review how you explain your projects—the clarity, depth, and effectiveness of your descriptions.",
    },
    {
      title: "All Buttons, Links & Demos",
      description: "We check every button, link, and demo to ensure they work correctly and lead where they should.",
    },
    {
      title: "Visual Attractiveness",
      description: "We evaluate the overall visual appeal and whether the design creates a positive impression.",
    },
    {
      title: "Recruiter Impact Assessment",
      description: "We assess whether your portfolio would leave a lasting impression on hiring managers.",
    },
    {
      title: "Credibility Check",
      description: "We suggest improvements to increase your portfolio's trustworthiness and professional appeal.",
    },
  ];

  const whatYouGet = [
    {
      icon: BarChart3,
      title: "Portfolio Rating (Out of 10)",
      description: "Your portfolio will be rated on design, content, functionality, and recruiter appeal.",
    },
    {
      icon: Eye,
      title: "Improvement Suggestions",
      description: "Detailed, actionable suggestions on how to make your portfolio more impactful.",
    },
    {
      icon: Server,
      title: "Domain & Hosting Support",
      description: "If your portfolio is strong but lacks a custom domain or professional hosting, we'll help.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/#expert-reviews">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Expert Reviews
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full">
                100% Free
              </span>
              <span className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent rounded-full">
                Full Analysis
              </span>
              <span className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent rounded-full">
                Domain Support
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Portfolio Review & <span className="text-gradient">Domain Support</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
              Know how strong your portfolio really is. Get <strong className="text-foreground">expert analysis on 
              structure, presentation, and recruiter impact</strong>—plus support for custom domains and hosting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/reviews/portfolio-review/form">
                <Button size="xl" className="bg-gradient-to-r from-violet-500 to-purple-600 hover:opacity-90 text-primary-foreground shadow-lg">
                  Get Your Portfolio Reviewed
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expert Analysis */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Portfolio Analysis</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our experts will thoroughly analyze your portfolio website, checking everything from 
                  <strong className="text-foreground"> visual design to functionality to recruiter appeal</strong>. 
                  We leave no stone unturned.
                </p>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <p className="text-foreground font-medium text-lg">
                We test every link, every button, every demo—because <span className="text-primary">details matter</span> when recruiters are reviewing your work.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Review */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Review</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete evaluation of your portfolio from multiple angles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whatWeReview.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-card transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Receive</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive feedback plus support to take your portfolio to the next level
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whatYouGet.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="text-center p-8 rounded-2xl bg-card border border-border/50"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Support Note */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg">
                  <LinkIcon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Domain & Hosting Support</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    If your portfolio content is strong but it lacks:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-foreground">
                      <Check className="w-5 h-5 text-violet-500" />
                      <span>A custom domain (yourname.com)</span>
                    </li>
                    <li className="flex items-center gap-3 text-foreground">
                      <Check className="w-5 h-5 text-violet-500" />
                      <span>Professional hosting setup</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    We'll provide guidance and support to help you set these up. A professional URL makes 
                    a significant difference in how recruiters perceive your work.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clear Statement */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="p-8 rounded-3xl bg-muted/50 border border-border">
              <Shield className="w-12 h-12 text-violet-500 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Promise</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                This is honest, expert feedback with no hidden agenda. We genuinely want to help 
                you present your work in the best possible way to recruiters.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="w-5 h-5 text-violet-500" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="w-5 h-5 text-violet-500" />
                  <span>No Upselling</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="w-5 h-5 text-violet-500" />
                  <span>Real Expert Insights</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Expert Feedback?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Submit your portfolio and get comprehensive insights on how to make it stand out.
            </p>
            <Link to="/reviews/portfolio-review/form">
              <Button size="xl" className="bg-gradient-to-r from-violet-500 to-purple-600 hover:opacity-90 text-primary-foreground shadow-lg">
                Get Your Portfolio Reviewed
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioReview;
