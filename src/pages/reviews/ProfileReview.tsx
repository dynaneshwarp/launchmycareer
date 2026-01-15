import { motion } from "framer-motion";
import { ArrowLeft, Linkedin, Github, Check, Shield, Users, Star, Eye, Award, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProfileReview = () => {
  const whatWeReview = [
    {
      title: "LinkedIn Activity & Consistency",
      description: "We review your posting frequency, engagement patterns, and overall profile consistency.",
    },
    {
      title: "Job Role Alignment",
      description: "We check if your job role, project work, and listed skills actually align with each other.",
    },
    {
      title: "Skills & Endorsements",
      description: "We verify your skills endorsements, certifications, and whether your proof of work is visible.",
    },
    {
      title: "HR Attention Factor",
      description: "We evaluate whether your profile structure and content attracts recruiter attention or not.",
    },
    {
      title: "GitHub Profile Analysis",
      description: "We review your repository organization, README files, contribution graph, and project visibility.",
    },
    {
      title: "Cross-Platform Consistency",
      description: "We check if your LinkedIn and GitHub tell a cohesive story about your professional journey.",
    },
  ];

  const whatYouGet = [
    {
      icon: BarChart3,
      title: "Profile Rating (Out of 10)",
      description: "Your profiles will be rated on a scale of 1-10 based on recruiter appeal and completeness.",
    },
    {
      icon: Eye,
      title: "Improvement Guidance",
      description: "Free, actionable suggestions on how to improve your profiles immediately.",
    },
    {
      icon: Award,
      title: "Suggestion Report",
      description: "A detailed report highlighting strengths and areas for improvement.",
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
                Profile Rating
              </span>
              <span className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent rounded-full">
                Recruiter Perspective
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              LinkedIn & GitHub <span className="text-gradient">Profile Review</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
              Get your professional profiles reviewed the way <strong className="text-foreground">recruiters actually see them</strong>. 
              Understand what's working, what's not, and how to improve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/reviews/profile-review/form">
                <Button size="xl" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 text-primary-foreground shadow-lg">
                  Get Your Profile Reviewed
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Reviews */}
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Reviewers from MNCs</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your profiles will be reviewed by <strong className="text-foreground">experts from multinational corporations 
                  and corporate environments</strong> who understand what recruiters look for when scanning profiles.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                <Linkedin className="w-6 h-6 text-[#0077B5]" />
                <span className="font-medium">LinkedIn Analysis</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                <Github className="w-6 h-6 text-foreground" />
                <span className="font-medium">GitHub Review (Optional)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Analyze */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Analyze</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive review of your professional online presence
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
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shrink-0">
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
              Actionable insights to improve your professional presence
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
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clear Statement */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Commitment</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                This is a completely free service. No selling, no pressure. We provide honest feedback 
                and actionable suggestions because we genuinely want to help you succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="w-5 h-5 text-blue-500" />
                  <span>Free Improvement Guidance</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="w-5 h-5 text-blue-500" />
                  <span>Suggestion Report Shared</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="w-5 h-5 text-blue-500" />
                  <span>No Pressure</span>
                </div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Reviewed?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Submit your profiles and get expert insights from the recruiter's perspective.
            </p>
            <Link to="/reviews/profile-review/form">
              <Button size="xl" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 text-primary-foreground shadow-lg">
                Get Your Profile Reviewed
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfileReview;
