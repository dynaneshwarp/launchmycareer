import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.jpeg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Mission */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <img 
                src={logoIcon} 
                alt="Launch My Career Logo" 
                className="w-10 h-10 rounded-xl object-cover"
              />
              <span className="text-xl font-bold">Launch My Career</span>
            </div>
            <p className="text-background/70 max-w-md text-sm leading-relaxed">
              Helping fresh graduates enter the corporate world with confidence. We transform your skills into visible proof that employers trust.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-6 text-sm">
              <Link to="/about" className="text-background/70 hover:text-background transition-colors">
                About Us
              </Link>
              <a href="/#services" className="text-background/70 hover:text-background transition-colors">
                Services
              </a>
              <a href="/#faq" className="text-background/70 hover:text-background transition-colors">
                FAQ
              </a>
              <Link to="/free-guidance" className="text-background/70 hover:text-background transition-colors">
                Free Guidance
              </Link>
            </div>
          </div>

          {/* CTA and Back to Top */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              to="/free-guidance"
              className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              Get Free Guidance
            </Link>
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-xl bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Launch My Career. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
