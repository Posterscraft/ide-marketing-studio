import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { PortfolioProject } from "@/hooks/usePortfolio";

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectDetailModal = ({ project, open, onOpenChange }: ProjectDetailModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium">{project.title}</DialogTitle>
          <DialogDescription className="text-base">
            {project.client}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Category Badge */}
          <div>
            <Badge variant="secondary" className="text-sm">
              {project.category}
            </Badge>
          </div>

          {/* Description */}
          {project.description && (
            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">About the Project</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
          )}

          {/* Tags */}
          <div>
            <h3 className="text-lg font-medium text-foreground mb-3">Technologies & Services</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">Project Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="p-4 bg-surface rounded-lg border border-border">
                    <div className="text-2xl font-medium text-foreground mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Link */}
          {project.project_url && (
            <div>
              <a
                href={project.project_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-primary-foreground rounded-lg elevation-2 hover:elevation-3 material-transition font-medium"
              >
                <span>Visit Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;
