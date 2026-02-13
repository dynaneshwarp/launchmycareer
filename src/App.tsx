import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import GetStarted from "./pages/GetStarted";
import FreeGuidance from "./pages/FreeGuidance";
import ResumeBuilding from "./pages/services/ResumeBuilding";
import LinkedInGitHub from "./pages/services/LinkedInGitHub";
import PortfolioWebsites from "./pages/services/PortfolioWebsites";
import ResumeReview from "./pages/reviews/ResumeReview";
import ProfileReview from "./pages/reviews/ProfileReview";
import PortfolioReview from "./pages/reviews/PortfolioReview";
import ResumeReviewForm from "./pages/reviews/ResumeReviewForm";
import ProfileReviewForm from "./pages/reviews/ProfileReviewForm";
import PortfolioReviewForm from "./pages/reviews/PortfolioReviewForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/free-guidance" element={<FreeGuidance />} />
          <Route path="/services/resume-building" element={<ResumeBuilding />} />
          <Route path="/services/linkedin-github" element={<LinkedInGitHub />} />
          <Route path="/services/portfolio-websites" element={<PortfolioWebsites />} />
          <Route path="/reviews/resume-review" element={<ResumeReview />} />
          <Route path="/reviews/resume-review/form" element={<ResumeReviewForm />} />
          <Route path="/reviews/profile-review" element={<ProfileReview />} />
          <Route path="/reviews/profile-review/form" element={<ProfileReviewForm />} />
          <Route path="/reviews/portfolio-review" element={<PortfolioReview />} />
          <Route path="/reviews/portfolio-review/form" element={<PortfolioReviewForm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
