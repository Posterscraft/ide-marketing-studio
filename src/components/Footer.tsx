const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      {/* Status Bar */}
      <div className="bg-status-bar">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-status-text">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Connected • PostersCraft Studio
            </span>
          </div>
          
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span>© 2024 PostersCraft. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
