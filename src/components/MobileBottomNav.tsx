import { Home, Briefcase, Image, Users, Phone, Info, Film } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileBottomNav = () => {
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Services", href: "/services", icon: Briefcase },
    { label: "Studio", href: "/studio", icon: Film },
    { label: "Portfolio", href: "/portfolio", icon: Image },
    { label: "Clients", href: "/clients", icon: Users },
    { label: "About", href: "/about", icon: Info },
    { label: "Contact", href: "/contact", icon: Phone },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-border elevation-4 lg:hidden safe-area-bottom">
      <div className="flex items-center justify-around px-1 py-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.label}
              to={item.href}
              className={`flex flex-col items-center justify-center py-1.5 px-1 min-w-0 flex-1 rounded-lg material-transition ${
                active
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`w-5 h-5 ${active ? "text-primary" : ""}`} />
              <span className={`text-[10px] mt-0.5 truncate ${active ? "font-semibold text-primary" : ""}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
