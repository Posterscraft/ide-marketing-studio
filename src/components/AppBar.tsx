import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo-only.png";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/hooks/useTheme";

const AppBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();
  
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Studio", href: "/studio" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Clients", href: "/clients" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-surface elevation-2 border-b border-border">
      <div className="flex items-center h-20 px-4 gap-2 lg:gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 lg:gap-3 min-w-0">
          <img src={logo} alt="PostersCraft Logo" className="h-[38px] w-auto object-contain" style={isDark ? { filter: 'brightness(0) invert(1)' } : undefined} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="px-3 xl:px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded material-transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1 lg:gap-2 ml-auto">
          <ThemeToggle />
          
          {/* Mobile Menu Button removed - using bottom nav */}

          <Link to="/contact" className="hidden sm:block">
            <Button
              size="sm"
              className="gradient-primary text-primary-foreground hover:opacity-90 material-transition elevation-2 text-xs lg:text-sm"
            >
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu - hidden since we use bottom nav */}
    </header>
  );
};

export default AppBar;
