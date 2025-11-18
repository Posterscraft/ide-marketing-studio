import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Project {
  title: string;
  client: string;
  category: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  image: string;
}

const Portfolio = () => {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Commercial", "Wedding", "Branding", "Social", "Banner"];

  const projects: Project[] = [
    {
      title: "Luxury Watch Campaign",
      client: "TimeLux Brands",
      category: "Commercial",
      tags: ["Video", "Photography", "Retouching"],
      metrics: [
        { label: "Views", value: "2.3M" },
        { label: "Engagement", value: "+45%" },
      ],
      image: "bg-gradient-to-br from-slate-900 via-slate-700 to-amber-600",
    },
    {
      title: "Dream Wedding Film",
      client: "Sharma & Patel",
      category: "Wedding",
      tags: ["Cinematic", "Drone", "Color Grade"],
      metrics: [
        { label: "Duration", value: "8 min" },
        { label: "Locations", value: "5" },
      ],
      image: "bg-gradient-to-br from-rose-400 via-pink-300 to-purple-400",
    },
    {
      title: "Tech Startup Rebrand",
      client: "InnovateTech",
      category: "Branding",
      tags: ["Logo", "Identity", "Guidelines"],
      metrics: [
        { label: "Deliverables", value: "50+" },
        { label: "Turnaround", value: "12 days" },
      ],
      image: "bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-500",
    },
    {
      title: "Instagram Carousel Ads",
      client: "FashionForward",
      category: "Social",
      tags: ["Design", "Copy", "Motion"],
      metrics: [
        { label: "CTR", value: "4.8%" },
        { label: "ROAS", value: "6.2x" },
      ],
      image: "bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500",
    },
    {
      title: "Mall Billboard Campaign",
      client: "MegaMall Group",
      category: "Banner",
      tags: ["Print Design", "Installation", "Outdoor"],
      metrics: [
        { label: "Size", value: "40x20 ft" },
        { label: "Locations", value: "3" },
      ],
      image: "bg-gradient-to-br from-orange-400 via-red-400 to-pink-500",
    },
    {
      title: "Product Launch Video",
      client: "GadgetPro",
      category: "Commercial",
      tags: ["Animation", "VFX", "Sound Design"],
      metrics: [
        { label: "Duration", value: "90 sec" },
        { label: "Shares", value: "15K+" },
      ],
      image: "bg-gradient-to-br from-emerald-400 via-green-500 to-lime-500",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

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
            Case studies from our latest creative executions.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm material-transition ${
                  filter === cat
                    ? "gradient-primary text-primary-foreground elevation-2"
                    : "bg-surface text-foreground hover:bg-secondary elevation-1"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden elevation-2 hover:elevation-4 material-transition border border-border bg-surface group cursor-pointer"
            >
              {/* Project Preview */}
              <div
                className={`h-48 ${project.image} flex items-center justify-center text-white text-4xl font-bold relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 material-transition" />
                <span className="material-icons text-6xl opacity-40">play_circle</span>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.client}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

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
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary/5 rounded-lg material-transition elevation-1">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
