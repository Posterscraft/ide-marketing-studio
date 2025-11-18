import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 gradient-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">PC</span>
              </div>
              <span className="font-medium text-foreground">PostersCraft</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Bold visuals & performance marketing for brands that dare to stand out.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary material-transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary material-transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary material-transition"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary material-transition">
                  Creative Production
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary material-transition">
                  Ad Creatives
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary material-transition">
                  Branding & Identity
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary material-transition">
                  Social Campaigns
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary material-transition">
                  Studio Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#studio" className="text-muted-foreground hover:text-primary material-transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-primary material-transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#clients" className="text-muted-foreground hover:text-primary material-transition">
                  Clients
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary material-transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary material-transition">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary material-transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary material-transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary material-transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-status-bar border-t border-border">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between text-xs text-status-text">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Connected • PostersCraft Studio
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground material-transition">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground material-transition">
              Terms
            </a>
            <span>© 2024 PostersCraft. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
