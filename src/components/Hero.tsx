import { Play, Calendar, Monitor, Smartphone, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Hero = () => {
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const getDeviceClass = () => {
    switch (deviceView) {
      case "mobile":
        return "w-[375px] h-[667px]";
      case "tablet":
        return "w-[768px] h-[1024px]";
      default:
        return "w-full h-[600px]";
    }
  };

  return (
    <section id="home" className="bg-editor-bg border-b border-border">
      {/* Editor Tab Bar */}
      <div className="bg-surface-variant border-b border-border px-4 flex items-center justify-between h-10">
        <div className="flex items-center gap-2">
          <div className="bg-surface px-4 py-1.5 rounded-t border border-b-0 border-border text-sm font-medium text-foreground">
            home.xml
          </div>
          <span className="material-icons text-base text-muted-foreground cursor-pointer hover:text-foreground">
            close
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setDeviceView("desktop")}
            className={`p-1.5 rounded material-transition ${
              deviceView === "desktop"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Desktop view"
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDeviceView("tablet")}
            className={`p-1.5 rounded material-transition ${
              deviceView === "tablet"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Tablet view"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDeviceView("mobile")}
            className={`p-1.5 rounded material-transition ${
              deviceView === "mobile"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Mobile view"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Canvas */}
      <div className="container mx-auto px-4 py-16 lg:py-24 flex justify-center">
        <div
          className={`${getDeviceClass()} material-transition flex flex-col items-center justify-center text-center px-6 lg:px-12`}
        >
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono mb-6">
            {"<PostersCraft />"}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground mb-6 leading-tight">
            We craft bold visuals,<br />
            <span className="gradient-primary bg-clip-text text-transparent">
              digital solutions
            </span> &<br />
            performance marketing
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl">
            Posters, banners, commercials, wedding films, web development, mobile apps, SEO, and data-driven digital campaigns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-cta text-cta-foreground hover:opacity-90 material-transition elevation-2 ripple-effect"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Showreel
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/5 material-transition"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Brief
            </Button>
          </div>

          {/* Code Snippet Preview */}
          <div className="bg-surface border border-border rounded-lg p-6 elevation-2 max-w-2xl w-full text-left">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-cta"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-xs text-muted-foreground ml-2 font-mono">project.config</span>
            </div>
            <pre className="font-mono text-sm text-foreground leading-relaxed">
              <code>
                <span className="text-code-keyword">const</span> project = {"{"}{"\n"}
                {"  "}name: <span className="text-code-string">"Your Brand"</span>,{"\n"}
                {"  "}services: [<span className="text-code-string">"creative"</span>,{" "}
                <span className="text-code-string">"marketing"</span>],{"\n"}
                {"  "}impact: <span className="text-code-string">"✨ Extraordinary"</span>
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
