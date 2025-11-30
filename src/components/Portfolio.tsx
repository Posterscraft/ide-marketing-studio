import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { usePortfolio, PortfolioProject } from "@/hooks/usePortfolio";
import ProjectDetailModal from "./ProjectDetailModal";
import { Loader2 } from "lucide-react";

const Portfolio = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleProjectClick = (project: PortfolioProject) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-surface-variant">
      <div className="container mx-auto px-4">
        <div className="mb-12">
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
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm material-transition ${
                  categoryFilter === cat
                    ? "gradient-primary text-primary-foreground elevation-2"
                    : "bg-surface text-foreground hover:bg-secondary elevation-1"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground font-mono mr-2 py-2">Tags:</span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1 rounded-full text-xs material-transition ${
                  selectedTags.includes(tag)
                    ? "bg-primary text-primary-foreground elevation-1"
                    : "bg-surface text-muted-foreground hover:bg-secondary border border-border"
                }`}
              >
                {tag}
              </button>
            ))}
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="px-3 py-1 rounded-full text-xs bg-destructive/10 text-destructive hover:bg-destructive/20 material-transition"
              >
                Clear tags
              </button>
            )}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {/* Projects Grid */}
        {!isLoading && filteredProjects && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="overflow-hidden elevation-2 hover:elevation-4 material-transition border border-border bg-surface group cursor-pointer"
              >
                {/* Project Preview */}
                <div className="h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 flex items-center justify-center text-white text-4xl font-bold relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 material-transition" />
                  <span className="material-icons text-6xl opacity-40">visibility</span>
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

                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
                      {project.metrics.map((metric, i) => (
                        <div key={i}>
                          <div className="text-lg font-medium text-foreground">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredProjects && filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No projects match your filters.</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
};

export default Portfolio;
