import { Link, useLocation } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.jpeg";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const getHref = (section: string) => {
    return isHome ? `#${section}` : `/#${section}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logoIcon} 
            alt="Launch My Career Logo" 
            className="w-10 h-10 rounded-xl object-cover shadow-soft group-hover:shadow-glow transition-all duration-300"
          />
          <span className="text-xl font-bold text-foreground">
            Launch My Career
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium">
            About Us
          </Link>
          <a href={getHref("services")} className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium">
            Services
          </a>
          <a href={getHref("faq")} className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium">
            FAQ
          </a>
          <Link to="/free-guidance" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium">
            Free Guidance
          </Link>
        </nav>
        <Link
          to="/get-started"
          className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-300"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Header;
