import { motion } from "framer-motion";
import { ArrowLeft, FileSearch, Check, Shield, Users, Star, Eye, Award, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ResumeReview = () => {
  const whatWeReview = [
    {
      title: "Why Your Resume Isn't Getting Shortlisted",
      description: "We identify the exact reasons your resume might be getting filtered out by ATS systems or ignored by recruiters.",
    },
    {
      title: "What HRs Actually Look For",
      description: "Based on real hiring experience, we tell you what recruiters prioritize and what they skip over.",
    },
    {
      title: "Content vs Template Analysis",
      description: "We assess whether your content and template choices are helping or hurting your chances.",
    },
    {
      title: "What Improvements Truly Matter",
      description: "Not all resume advice is equal. We focus on changes that will make a real difference in your job search.",
    },
  ];

  const trustPoints = [
    {
      icon: Users,
      title: "Real Hiring Managers",
      description: "Reviews conducted by professionals currently working in hiring roles at top corporate companies.",
    },
    {
      icon: Shield,
      title: "Completely Free",
      description: "This service is 100% free. No hidden fees, no upselling, no pressure to buy anything.",
    },
    {
      icon: Star,
      title: "Unbiased Feedback",
      description: "Our only goal is to help you understand your mistakes and improve. No sales agenda.",
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
                Expert Feedback
              </span>
              <span className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent rounded-full">
                No Selling
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Resume Review by <span className="text-gradient">Real Experts</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
              Get your resume reviewed by real experts who understand how hiring actually works. 
              Not generic advice—<strong className="text-foreground">real insights from people who make hiring decisions every day</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/reviews/resume-review/form">
                <Button size="xl" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-90 text-primary-foreground shadow-lg">
                  Get Your Resume Reviewed for Free
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Reviews Your Resume */}
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0 shadow-lg">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Reviews Your Resume?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your resume will be reviewed by <strong className="text-foreground">experts currently working as hiring managers 
                  and professionals in top corporate companies</strong>. These are people who review resumes daily and 
                  make real hiring decisions.
                </p>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <p className="text-foreground font-medium text-lg">
                Reviews are based on <span className="text-primary">real hiring experience</span>, not theory or generic templates.
              </p>
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
              Our expert reviewers focus on what actually matters for getting shortlisted
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whatWeReview.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-card transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Trust This Review?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in transparency and honesty above everything else
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
                className="text-center p-8 rounded-2xl bg-card border border-border/50"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <point.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
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
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
              <MessageCircle className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Promise</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                This review is completely free with no strings attached. We have no selling intention. 
                The only goal is to help candidates understand their mistakes and improve.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span>Unbiased Feedback</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span>No Hidden Costs</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span>Real Expert Insights</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Honest Feedback?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Submit your resume and get expert insights that will actually help you improve.
            </p>
            <Link to="/reviews/resume-review/form">
              <Button size="xl" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-90 text-primary-foreground shadow-lg">
                Get Your Resume Reviewed for Free
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResumeReview;
