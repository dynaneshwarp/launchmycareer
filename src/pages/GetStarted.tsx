import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  ArrowLeft, 
  Send, 
  User, 
  Phone, 
  Mail, 
  Target, 
  Linkedin, 
  Github, 
  Upload, 
  MessageSquare,
  CheckCircle2,
  Sparkles,
  FileText,
  Globe,
  Briefcase
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    id: "resume",
    title: "Building Strong Resumes",
    description: "ATS-friendly, proof-based resume from scratch",
    icon: FileText,
  },
  {
    id: "linkedin-github",
    title: "LinkedIn & GitHub Optimization",
    description: "Professional public profiles that validate your work",
    icon: Linkedin,
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Digital resume with full ownership",
    icon: Globe,
  },
  {
    id: "all-three",
    title: "Complete Career Package",
    description: "All three services for maximum impact",
    icon: Sparkles,
  },
];

const GetStarted = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [hasResume, setHasResume] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const resumeFile = formData.get('resume') as File | null;
    
    try {
      let resumeUrl: string | null = null;
      
      // Upload resume if provided
      if (resumeFile && resumeFile.size > 0) {
        const fileExt = resumeFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('resumes')
          .upload(fileName, resumeFile);
        
        if (uploadError) throw uploadError;
        
        // Get the file path for storage
        resumeUrl = uploadData.path;
      }
      
      const { error } = await supabase
        .from('get_started_submissions')
        .insert({
          full_name: formData.get('fullName') as string,
          mobile: formData.get('mobile') as string,
          email: formData.get('email') as string,
          career_goal: formData.get('careerGoal') as string,
          linkedin_url: formData.get('linkedin') as string || null,
          github_url: formData.get('github') as string || null,
          selected_service: selectedService,
          has_resume: hasResume === 'yes',
          resume_url: resumeUrl,
          message: formData.get('message') as string || null,
        });

      if (error) throw error;
      
      setIsSubmitted(true);
      toast({
        title: "Application Received!",
        description: "Our team will review your details and reach out soon.",
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
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
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center py-20"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Thank You for Reaching Out!
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                We've received your application. Our team will carefully review your details and contact you within 24-48 hours to discuss the next steps.
              </p>
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-card mb-8">
                <h3 className="font-semibold mb-3">What happens next?</h3>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    Our team reviews your profile and requirements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    We schedule a free consultation call
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">3.</span>
                    We create a personalized plan for your career goals
                  </li>
                </ul>
              </div>
              <Link to="/">
                <Button variant="outline" size="lg">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
          
          <div className="container mx-auto px-4 py-16 relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Start Your Journey
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Let's Build Your <span className="text-gradient">Career Together</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Fill out the form below and our team will connect with you to understand your goals and create a personalized plan for your career success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <form onSubmit={handleSubmit} className="space-y-12">
                {/* Section 1: Basic Details */}
                <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <User className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Basic Details</h2>
                      <p className="text-sm text-muted-foreground">Tell us about yourself</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-sm font-medium">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        required
                        className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobile" className="text-sm font-medium flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Mobile Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Career Information */}
                <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Career Information</h2>
                      <p className="text-sm text-muted-foreground">Help us understand your goals</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="careerGoal" className="text-sm font-medium flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Career Goal / Target Job Role <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="careerGoal"
                        name="careerGoal"
                        placeholder="e.g., Frontend Developer, Data Analyst, Product Manager"
                        required
                        className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="linkedin" className="text-sm font-medium flex items-center gap-2">
                          <Linkedin className="w-4 h-4" />
                          LinkedIn Profile URL
                        </Label>
                        <Input
                          id="linkedin"
                          name="linkedin"
                          type="url"
                          placeholder="https://linkedin.com/in/yourprofile"
                          className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="github" className="text-sm font-medium flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          GitHub Profile URL <span className="text-muted-foreground text-xs">(optional)</span>
                        </Label>
                        <Input
                          id="github"
                          name="github"
                          type="url"
                          placeholder="https://github.com/yourusername"
                          className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Service Selection */}
                <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Select Your Service</h2>
                      <p className="text-sm text-muted-foreground">Choose what you need help with</p>
                    </div>
                  </div>

                  <RadioGroup 
                    value={selectedService} 
                    onValueChange={setSelectedService}
                    className="grid md:grid-cols-2 gap-4"
                    required
                  >
                    {services.map((service) => (
                      <label
                        key={service.id}
                        htmlFor={service.id}
                        className={`relative flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                          selectedService === service.id
                            ? "border-primary bg-primary/5 shadow-soft"
                            : "border-border/50 hover:border-primary/30 hover:bg-muted/30"
                        }`}
                      >
                        <RadioGroupItem value={service.id} id={service.id} className="mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <service.icon className={`w-4 h-4 ${selectedService === service.id ? "text-primary" : "text-muted-foreground"}`} />
                            <span className="font-semibold">{service.title}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                        {service.id === "all-three" && (
                          <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
                            Best Value
                          </span>
                        )}
                      </label>
                    ))}
                  </RadioGroup>
                  {!selectedService && (
                    <p className="text-sm text-muted-foreground mt-4 flex items-center gap-2">
                      <span className="text-destructive">*</span> Please select a service to continue
                    </p>
                  )}
                </div>

                {/* Section 4: Resume Upload */}
                <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <Upload className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Resume Upload</h2>
                      <p className="text-sm text-muted-foreground">Share your current resume if you have one</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <RadioGroup 
                      value={hasResume} 
                      onValueChange={setHasResume}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <label
                        htmlFor="has-resume-yes"
                        className={`flex items-center gap-3 px-5 py-3 rounded-xl border-2 cursor-pointer transition-all ${
                          hasResume === "yes"
                            ? "border-primary bg-primary/5"
                            : "border-border/50 hover:border-primary/30"
                        }`}
                      >
                        <RadioGroupItem value="yes" id="has-resume-yes" />
                        <span className="font-medium">I have a resume</span>
                      </label>
                      <label
                        htmlFor="has-resume-no"
                        className={`flex items-center gap-3 px-5 py-3 rounded-xl border-2 cursor-pointer transition-all ${
                          hasResume === "no"
                            ? "border-primary bg-primary/5"
                            : "border-border/50 hover:border-primary/30"
                        }`}
                      >
                        <RadioGroupItem value="no" id="has-resume-no" />
                        <span className="font-medium">I don't have a resume yet</span>
                      </label>
                    </RadioGroup>

                    {hasResume === "yes" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="resume" className="text-sm font-medium">
                          Upload Resume <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="resume"
                          name="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          required={hasResume === "yes"}
                          className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                        />
                        <p className="text-xs text-muted-foreground">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                      </motion.div>
                    )}

                    {hasResume === "no" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-4 rounded-xl bg-muted/50 border border-border/50"
                      >
                        <p className="text-sm text-muted-foreground">
                          No worries! We'll help you build one from scratch based on your projects and experience.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Section 5: Message */}
                <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Tell Us More</h2>
                      <p className="text-sm text-muted-foreground">Share your background, expectations, or questions</p>
                    </div>
                  </div>

                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your background, career goals, any specific concerns or questions you have. The more you share, the better we can help you..."
                    rows={6}
                    className="rounded-xl bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                  <p className="text-sm text-muted-foreground max-w-md">
                    By submitting this form, you agree to be contacted by our team regarding your career services.
                  </p>
                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full sm:w-auto min-w-[200px]"
                    disabled={isSubmitting || !selectedService}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Application
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;
