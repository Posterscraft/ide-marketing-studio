import { Facebook, Linkedin, Instagram } from "lucide-react";

const FloatingSocials = () => {
  return (
    <div className="fixed right-4 bottom-20 lg:bottom-4 md:right-6 z-40 flex flex-col gap-2 md:gap-3">
      <a
        href="https://www.instagram.com/posterscraft_official/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 md:w-12 md:h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground elevation-4 hover:elevation-6 material-transition group"
        aria-label="Instagram"
      >
        <Instagram className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 material-transition" />
      </a>
      <a
        href="https://www.facebook.com/posterscraft"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 md:w-12 md:h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground elevation-4 hover:elevation-6 material-transition group"
        aria-label="Facebook"
      >
        <Facebook className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 material-transition" />
      </a>
      <a
        href="https://www.linkedin.com/company/posterscraft/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 md:w-12 md:h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground elevation-4 hover:elevation-6 material-transition group"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 material-transition" />
      </a>
    </div>
  );
};

export default FloatingSocials;
