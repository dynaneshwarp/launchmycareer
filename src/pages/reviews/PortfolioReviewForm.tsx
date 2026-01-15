import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PortfolioReviewForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const fullName = (formData.get('fullName') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const mobile = (formData.get('mobile') as string)?.trim();
    const portfolioUrl = (formData.get('portfolioUrl') as string)?.trim();

    // Validation
    if (!fullName || fullName.length < 2 || fullName.length > 100) {
      toast({
        title: "Invalid name",
        description: "Please enter a valid name (2-100 characters).",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (!mobile || mobile.length < 10 || mobile.length > 15) {
      toast({
        title: "Invalid mobile number",
        description: "Please enter a valid mobile number.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (!portfolioUrl) {
      toast({
        title: "Portfolio URL required",
        description: "Please enter your portfolio website URL.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Basic URL validation
    try {
      new URL(portfolioUrl);
    } catch {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid portfolio website URL.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('portfolio_review_submissions')
        .insert({
          full_name: fullName,
          email: email,
          mobile: mobile,
          portfolio_url: portfolioUrl,
        });

      if (error) {
        console.error('Database error:', error);
        throw error;
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Thank You!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Our team will review your portfolio and contact you shortly with a comprehensive 
                rating and improvement suggestions—including domain support if needed.
              </p>
              <Link to="/">
                <Button variant="outline" size="lg">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <Link to="/reviews/portfolio-review">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio Review
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Get Your Portfolio Reviewed
              </h1>
              <p className="text-lg text-muted-foreground">
                Submit your portfolio website for expert review. Receive a rating out of 10, 
                improvement suggestions, and domain/hosting support if needed.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    maxLength={100}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    maxLength={255}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number *</Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    required
                    maxLength={15}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolioUrl">Portfolio Website URL *</Label>
                  <Input
                    id="portfolioUrl"
                    name="portfolioUrl"
                    type="url"
                    placeholder="https://your-portfolio.com"
                    required
                    maxLength={500}
                    className="h-12"
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter the full URL of your portfolio website
                  </p>
                </div>

                <Button
                  type="submit"
                  size="xl"
                  className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:opacity-90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit for Free Review"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting, you agree to receive feedback via email. We respect your privacy 
                  and will never share your information.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioReviewForm;
