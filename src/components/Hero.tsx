import { Calendar, Monitor, Smartphone, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-surface px-4 py-1.5 rounded-t border border-b-0 border-border text-sm font-medium text-foreground"
          >
            home.xml
          </motion.div>
          <span className="material-icons text-base text-muted-foreground cursor-pointer hover:text-foreground">
            close
          </span>
        </div>
        <div className="flex items-center gap-1">
          {[
            { view: "desktop" as const, icon: Monitor },
            { view: "tablet" as const, icon: Tablet },
            { view: "mobile" as const, icon: Smartphone },
          ].map(({ view, icon: Icon }) => (
            <motion.button
              key={view}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDeviceView(view)}
              className={`p-1.5 rounded material-transition ${
                deviceView === view
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label={`${view} view`}
            >
              <Icon className="w-4 h-4" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Canvas */}
      <div className="container mx-auto px-4 py-16 lg:py-24 flex justify-center">
        <div
          className={`${getDeviceClass()} material-transition flex flex-col items-center justify-center text-center px-6 lg:px-12`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono mb-6"
          >
            {"<PostersCraft />"}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground mb-6 leading-tight"
          >
            We craft bold visuals,<br />
            <span className="gradient-primary bg-clip-text text-transparent">
              digital solutions
            </span> &<br />
            performance marketing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            Posters, banners, commercials, wedding films, web development, mobile apps, SEO, and data-driven digital campaigns.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-cta text-cta-foreground hover:opacity-90 material-transition elevation-2 ripple-effect"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Brief
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/5 material-transition"
                >
                  About Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Code Snippet Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-surface border border-border rounded-lg p-6 elevation-2 max-w-2xl w-full text-left"
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="w-3 h-3 rounded-full bg-destructive"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.55 }}
                className="w-3 h-3 rounded-full bg-cta"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
                className="w-3 h-3 rounded-full bg-primary"
              />
              <span className="text-xs text-muted-foreground ml-2 font-mono">project.config</span>
            </div>
            <motion.pre
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="font-mono text-sm text-foreground leading-relaxed"
            >
              <code>
                <span className="text-code-keyword">const</span> project = {"{"}{"\n"}
                {"  "}name: <span className="text-code-string">"Your Brand"</span>,{"\n"}
                {"  "}services: [<span className="text-code-string">"creative"</span>,{" "}
                <span className="text-code-string">"marketing"</span>],{"\n"}
                {"  "}impact: <span className="text-code-string">"✨ Extraordinary"</span>
                {"\n"}
                {"}"};
              </code>
            </motion.pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
