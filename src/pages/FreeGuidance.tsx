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
  Mail, 
  Phone,
  MessageSquare,
  CheckCircle2,
  Heart,
  HelpCircle,
  Lightbulb,
  GraduationCap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const careerStages = [
  {
    id: "student",
    label: "Still in College",
    description: "Final year or about to graduate",
    icon: GraduationCap,
  },
  {
    id: "fresher",
    label: "Fresh Graduate",
    description: "Recently graduated, seeking first job",
    icon: Lightbulb,
  },
  {
    id: "early-career",
    label: "Early Career",
    description: "0-2 years of experience",
    icon: Heart,
  },
  {
    id: "exploring",
    label: "Just Exploring",
    description: "Curious to learn more",
    icon: HelpCircle,
  },
];

const FreeGuidance = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [careerStage, setCareerStage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const { error } = await supabase
        .from('free_guidance_submissions')
        .insert({
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          phone: formData.get('phone') as string || null,
          career_stage: careerStage,
          message: formData.get('message') as string,
        });

      if (error) throw error;
      
      setIsSubmitted(true);
      toast({
        title: "Message Received!",
        description: "We'll get back to you with helpful guidance soon.",
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
                <Heart className="w-12 h-12 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                We're Happy to Help!
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                Thank you for reaching out. Our team will review your message and get back to you with personalized guidance within 24 hours.
              </p>
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-card mb-8">
                <h3 className="font-semibold mb-3">While you wait...</h3>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    Explore our services to understand how we can help
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    Check out our FAQ for common questions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    Think about your career goals and questions
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="outline" size="lg">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <Link to="/#services">
                  <Button variant="hero" size="lg">
                    Explore Services
                  </Button>
                </Link>
              </div>
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
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
          
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
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
                Free Career Guidance
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Have Questions? <span className="text-gradient">We're Here to Help</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Whether you're just starting out, feeling lost, or simply have questions about your career path — reach out. No sales pitch, just honest guidance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
              {/* Left Column - Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 space-y-8"
              >
                <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
                  <h3 className="text-xl font-bold mb-4">Why Reach Out?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Heart className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">No Pressure</span>
                        <p className="text-sm text-muted-foreground">This isn't a sales call. We genuinely want to help.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Lightbulb className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Real Advice</span>
                        <p className="text-sm text-muted-foreground">Get practical, honest guidance based on real industry experience.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <HelpCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Any Question Welcome</span>
                        <p className="text-sm text-muted-foreground">Career clarity, resume tips, skill priorities — ask anything.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
                  <p className="text-sm text-muted-foreground italic">
                    "We started this because we wish someone had given us honest career guidance when we were starting out. Now we're here to be that for you."
                  </p>
                  <p className="text-sm font-medium mt-3">— The Launch My Career Team</p>
                </div>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-3"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                        <User className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">Your Details</h2>
                        <p className="text-sm text-muted-foreground">So we can get back to you</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="What should we call you?"
                          required
                          className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            Email <span className="text-destructive">*</span>
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

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            Phone <span className="text-muted-foreground text-xs">(optional)</span>
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Career Stage */}
                  <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">Where Are You Now?</h2>
                        <p className="text-sm text-muted-foreground">This helps us give better advice</p>
                      </div>
                    </div>

                    <RadioGroup 
                      value={careerStage} 
                      onValueChange={setCareerStage}
                      className="grid sm:grid-cols-2 gap-4"
                    >
                      {careerStages.map((stage) => (
                        <label
                          key={stage.id}
                          htmlFor={stage.id}
                          className={`relative flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            careerStage === stage.id
                              ? "border-primary bg-primary/5 shadow-soft"
                              : "border-border/50 hover:border-primary/30 hover:bg-muted/30"
                          }`}
                        >
                          <RadioGroupItem value={stage.id} id={stage.id} className="mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-0.5">
                              <stage.icon className={`w-4 h-4 ${careerStage === stage.id ? "text-primary" : "text-muted-foreground"}`} />
                              <span className="font-semibold text-sm">{stage.label}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{stage.description}</p>
                          </div>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Message */}
                  <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">Your Question or Message</h2>
                        <p className="text-sm text-muted-foreground">What's on your mind?</p>
                      </div>
                    </div>

                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Feel free to ask anything — about your career path, skill priorities, resume concerns, job search struggles, or anything else you're curious about..."
                      required
                      rows={6}
                      className="rounded-xl bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-muted-foreground max-w-md">
                      We respect your privacy. Your information is only used to respond to your inquiry.
                    </p>
                    <Button
                      type="submit"
                      variant="hero"
                      size="xl"
                      className="w-full sm:w-auto min-w-[180px]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FreeGuidance;
