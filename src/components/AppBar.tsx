import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";

const AppBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Studio", href: "/studio" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Clients", href: "/clients" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-surface elevation-2 border-b border-border">
      <div className="flex items-center h-14 px-4 gap-4">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center gap-3 min-w-[200px]">
          <img src={logo} alt="PostersCraft Logo" className="w-8 h-8 object-contain" />
          <span className="font-medium text-foreground hidden sm:block">PostersCraft</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded material-transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-secondary/50 rounded material-transition"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-2 ml-auto">
          <Link to="/contact">
            <Button
              size="sm"
              className="gradient-primary text-primary-foreground hover:opacity-90 material-transition elevation-2"
            >
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-surface border-t border-border elevation-2 animate-in slide-in-from-top">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-sm text-foreground hover:bg-secondary/50 border-b border-border/50 material-transition"
            >
              {item.label}
            </Link>
          ))}
          <div className="p-4">
            <Link to="/contact">
              <Button className="w-full gradient-primary text-primary-foreground">
                Get a Quote
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default AppBar;
