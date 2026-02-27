import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { usePortfolio, PortfolioProject } from "@/hooks/usePortfolio";
import { Loader2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const { data: projects, isLoading } = usePortfolio();

  // Get unique categories and tags
  const categories = ["All", ...new Set(projects?.map((p) => p.category) || [])];
  const allTags = [...new Set(projects?.flatMap((p) => p.tags) || [])];

  // Filter projects
  const filteredProjects = projects?.filter((p) => {
    const matchesCategory = categoryFilter === "All" || p.category === categoryFilter;
    const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => p.tags.includes(tag));
    return matchesCategory && matchesTags;
  });

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-surface-variant">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">
            {"<Portfolio />"}
          </div>
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Real work from real clients across web development, SEO, and creative design.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm material-transition ${
                  categoryFilter === cat
                    ? "gradient-primary text-primary-foreground elevation-2"
                    : "bg-surface text-foreground hover:bg-secondary elevation-1"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground font-mono mr-2 py-2">Tags:</span>
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1 rounded-full text-xs material-transition ${
                  selectedTags.includes(tag)
                    ? "bg-primary text-primary-foreground elevation-1"
                    : "bg-surface text-muted-foreground hover:bg-secondary border border-border"
                }`}
              >
                {tag}
              </motion.button>
            ))}
            {selectedTags.length > 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTags([])}
                className="px-3 py-1 rounded-full text-xs bg-destructive/10 text-destructive hover:bg-destructive/20 material-transition"
              >
                Clear tags
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {/* Projects Grid */}
        {!isLoading && filteredProjects && (
          <motion.div
            key={`${categoryFilter}-${selectedTags.join(",")}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={cardVariants} transition={{ duration: 0.5 }}>
                <Card className="overflow-hidden elevation-2 hover:elevation-4 material-transition border border-border bg-surface group transform hover:-translate-y-1">
                  {/* Project Preview */}
                  <div className="h-48 relative overflow-hidden">
                    {project.image_url ? (
                      <>
                        <img 
                          src={project.image_url} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 material-transition" />
                        <span className="material-icons text-6xl opacity-40 text-primary">web</span>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-medium text-foreground mb-1 group-hover:text-primary material-transition">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.client}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Visit Project Link */}
                    {project.project_url && (
                      <a
                        href={project.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 mt-2 gradient-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 material-transition elevation-1"
                      >
                        Visit Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty State */}
        {!isLoading && filteredProjects && filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-lg text-muted-foreground">No projects match your filters.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
