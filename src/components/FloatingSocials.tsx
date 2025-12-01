import { Facebook, Linkedin } from "lucide-react";

const FloatingSocials = () => {
  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-3">
      <a
        href="https://www.facebook.com/posterscraft"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground elevation-4 hover:elevation-6 material-transition group"
        aria-label="Facebook"
      >
        <Facebook className="w-5 h-5 group-hover:scale-110 material-transition" />
      </a>
      <a
        href="https://www.linkedin.com/company/posterscraft/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground elevation-4 hover:elevation-6 material-transition group"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5 group-hover:scale-110 material-transition" />
      </a>
    </div>
  );
};

export default FloatingSocials;
