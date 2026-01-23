import { motion } from "framer-motion";

const TechStack = () => {
  const webTechStack = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "WordPress", category: "CMS" },
    { name: "Shopify", category: "E-commerce" },
  ];

  const appTechStack = [
    { name: "React Native", category: "Cross-platform" },
    { name: "Flutter", category: "Cross-platform" },
    { name: "Swift", category: "iOS" },
    { name: "Kotlin", category: "Android" },
    { name: "Firebase", category: "Backend" },
    { name: "Supabase", category: "Backend" },
  ];

  const marketingTools = [
    { name: "Google Analytics", category: "Analytics" },
    { name: "SEMrush", category: "SEO" },
    { name: "Ahrefs", category: "SEO" },
    { name: "Google Ads", category: "Advertising" },
    { name: "Meta Ads", category: "Advertising" },
    { name: "Mailchimp", category: "Email" },
    { name: "HubSpot", category: "CRM" },
    { name: "Hootsuite", category: "Social" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-surface-variant">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">
            {"<TechStack />"}
          </div>
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
            Our Technology Arsenal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="bg-surface rounded-xl p-6 elevation-2 border border-border">
            <h3 className="text-xl font-medium text-foreground mb-4 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              Web Development
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {webTechStack.map((tech, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-mono hover:bg-primary hover:text-primary-foreground material-transition cursor-default"
                >
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* App Development */}
          <div className="bg-surface rounded-xl p-6 elevation-2 border border-border">
            <h3 className="text-xl font-medium text-foreground mb-4 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cta"></span>
              App Development
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {appTechStack.map((tech, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="px-3 py-1.5 bg-cta/10 text-cta rounded-full text-sm font-mono hover:bg-cta hover:text-cta-foreground material-transition cursor-default"
                >
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Marketing & SEO */}
          <div className="bg-surface rounded-xl p-6 elevation-2 border border-border">
            <h3 className="text-xl font-medium text-foreground mb-4 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-secondary-foreground"></span>
              Marketing & SEO
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {marketingTools.map((tool, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-mono hover:bg-secondary-foreground hover:text-secondary material-transition cursor-default"
                >
                  {tool.name}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Post Production Link */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Looking for professional video editing and post-production services?
          </p>
          <a
            href="https://www.thetimelinerskolkata.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-primary-foreground rounded-lg elevation-2 hover:elevation-3 material-transition font-medium"
          >
            Visit The Timeliners Kolkata →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
