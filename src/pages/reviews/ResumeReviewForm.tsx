import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, FileSearch, Upload, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ResumeReviewForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const maxSize = 10 * 1024 * 1024; // 10MB
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document.",
          variant: "destructive",
        });
        return;
      }
      
      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 10MB.",
          variant: "destructive",
        });
        return;
      }
      
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const fullName = (formData.get('fullName') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const mobile = (formData.get('mobile') as string)?.trim();

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

    if (!resumeFile) {
      toast({
        title: "Resume required",
        description: "Please upload your resume.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      let resumeUrl: string | null = null;

      // Upload resume to storage
      const fileExt = resumeFile.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('review-resumes')
        .upload(fileName, resumeFile);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw new Error('Failed to upload resume');
      }

      resumeUrl = uploadData.path;

      // Save to database
      const { error } = await supabase
        .from('resume_review_submissions')
        .insert({
          full_name: fullName,
          email: email,
          mobile: mobile,
          resume_url: resumeUrl,
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
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Thank You!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Our team will review your resume and contact you shortly with honest, 
                actionable feedback to help you improve.
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
          <Link to="/reviews/resume-review">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Resume Review
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FileSearch className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Get Your Resume Reviewed
              </h1>
              <p className="text-lg text-muted-foreground">
                Submit your resume for free expert review. We'll provide honest feedback 
                to help you understand what's working and what needs improvement.
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
                  <Label htmlFor="resume">Upload Resume *</Label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      required
                    />
                    <div className={`h-32 rounded-xl border-2 border-dashed ${resumeFile ? 'border-emerald-500 bg-emerald-500/5' : 'border-border'} flex flex-col items-center justify-center transition-colors`}>
                      <Upload className={`w-8 h-8 mb-2 ${resumeFile ? 'text-emerald-500' : 'text-muted-foreground'}`} />
                      {resumeFile ? (
                        <p className="text-sm font-medium text-emerald-600">{resumeFile.name}</p>
                      ) : (
                        <>
                          <p className="text-sm font-medium text-muted-foreground">Click or drag to upload</p>
                          <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX (Max 10MB)</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="xl"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-90 text-primary-foreground"
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

export default ResumeReviewForm;
