import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  client: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  project: string;
}

const Clients = () => {
  const clients = [
    { name: "EFiling Infotech", url: "https://www.efilinginfotech.com/" },
    { name: "NeoSigner", url: "https://neosigner.com/" },
    { name: "Vardhaan Studio", url: "https://www.facebook.com/Vardhaanstudio" },
    { name: "Techsalicious", url: "https://www.facebook.com/techsalicious/" },
    { name: "Get DSC Online", url: "https://www.facebook.com/getdsconlinefree" },
    { name: "Business Solutions", url: "https://www.facebook.com/profile.php?id=61572944314862" },
    { name: "Enterprise Client", url: "https://www.facebook.com/profile.php?id=61574123769484" },
    { name: "Service Provider", url: "https://www.facebook.com/profile.php?id=61578239124222" },
  ];

  const testimonials: Testimonial[] = [
    {
      client: "Rajesh Kumar",
      role: "Marketing Director",
      company: "TechCorp India",
      quote: "PostersCraft delivered exceptional creative work. The team understood our vision and executed it flawlessly. Our campaign ROI increased by 340%.",
      rating: 5,
      project: "Product Launch Campaign",
    },
    {
      client: "Priya Sharma",
      role: "Bride",
      company: "Wedding Client",
      quote: "Our wedding film is a masterpiece! Every moment captured beautifully. The team was professional and creative. We can't stop watching it!",
      rating: 5,
      project: "Cinematic Wedding Film",
    },
    {
      client: "Michael Chen",
      role: "CEO",
      company: "InnovateTech",
      quote: "Complete brand transformation in record time. PostersCraft's design thinking and execution speed is unmatched. Highly recommended!",
      rating: 5,
      project: "Brand Identity Redesign",
    },
  ];

  return (
    <section id="clients" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Clients Logo Strip */}
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">
            {"<Clients />"}
          </div>
          <h2 className="text-2xl font-medium text-foreground mb-8">Trusted by leading brands</h2>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {clients.map((client, index) => (
              <a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-surface rounded-lg elevation-1 hover:elevation-3 material-transition cursor-pointer group"
              >
                <span className="text-lg font-medium text-muted-foreground group-hover:text-primary material-transition">
                  {client.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Real feedback from real projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 elevation-2 hover:elevation-3 material-transition border border-border bg-surface"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cta text-cta" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-medium">
                    {testimonial.client.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">{testimonial.client}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                    <div className="text-xs text-primary mt-1 font-mono">
                      Project: {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
