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

  const categories = ["All", "Web Development", "Poster & Ad Design", "SEO", "Branding"];

  const projects: Project[] = [
    {
      title: "EFiling Infotech",
      client: "EFiling Infotech",
      category: "Web Development",
      tags: ["Website", "SEO", "Digital Marketing"],
      metrics: [
        { label: "Platform", value: "Custom" },
        { label: "Service", value: "SEO + Dev" },
      ],
      image: "bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700",
    },
    {
      title: "NeoSigner",
      client: "NeoSigner",
      category: "Web Development",
      tags: ["Website", "SEO", "Optimization"],
      metrics: [
        { label: "Platform", value: "Web App" },
        { label: "Service", value: "SEO + Dev" },
      ],
      image: "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600",
    },
    {
      title: "Vardhaan Studio",
      client: "Vardhaan Studio",
      category: "Poster & Ad Design",
      tags: ["Posters", "Social Media", "Ad Creatives"],
      metrics: [
        { label: "Platform", value: "Facebook" },
        { label: "Type", value: "Ads" },
      ],
      image: "bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-600",
    },
    {
      title: "Techsalicious",
      client: "Techsalicious",
      category: "Poster & Ad Design",
      tags: ["Tech Posters", "Social Media", "Branding"],
      metrics: [
        { label: "Platform", value: "Facebook" },
        { label: "Type", value: "Ads" },
      ],
      image: "bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-600",
    },
    {
      title: "Get DSC Online Free",
      client: "DSC Services",
      category: "Poster & Ad Design",
      tags: ["Digital Posters", "Marketing", "Social"],
      metrics: [
        { label: "Platform", value: "Facebook" },
        { label: "Type", value: "Campaigns" },
      ],
      image: "bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600",
    },
    {
      title: "Business Solutions Campaign",
      client: "Enterprise Client",
      category: "Poster & Ad Design",
      tags: ["Corporate", "Marketing", "Print"],
      metrics: [
        { label: "Format", value: "Digital" },
        { label: "Type", value: "Ads" },
      ],
      image: "bg-gradient-to-br from-slate-700 via-gray-700 to-zinc-800",
    },
    {
      title: "Retail Marketing Posters",
      client: "Retail Brand",
      category: "Poster & Ad Design",
      tags: ["Retail", "Promotions", "Print"],
      metrics: [
        { label: "Format", value: "Multi" },
        { label: "Type", value: "Posters" },
      ],
      image: "bg-gradient-to-br from-red-500 via-orange-500 to-amber-600",
    },
    {
      title: "Service Industry Ads",
      client: "Service Provider",
      category: "Poster & Ad Design",
      tags: ["Services", "Digital", "Marketing"],
      metrics: [
        { label: "Platform", value: "Social" },
        { label: "Type", value: "Ads" },
      ],
      image: "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600",
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
