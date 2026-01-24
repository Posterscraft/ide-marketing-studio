import { Video, Image, Palette, TrendingUp, Smartphone, Building, Film } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Service {
  name: string;
  scope: string;
  deliverables: string[];
  icon: React.ReactNode;
  turnaround: string;
  priceFrom: string;
}

const Services = () => {
  const services: Service[] = [
    {
      name: "Creative Production",
      scope: "video, photo, banners",
      deliverables: ["Shoot", "Edit", "Color Grade", "Motion Graphics"],
      icon: <Video className="w-6 h-6" />,
      turnaround: "5-10 days",
      priceFrom: "₹15,000",
    },
    {
      name: "Video & Reels Editing",
      scope: "YouTube, Instagram, corporate",
      deliverables: ["Cut & Edit", "Color Grade", "Sound Design", "Motion GFX"],
      icon: <Film className="w-6 h-6" />,
      turnaround: "2-5 days",
      priceFrom: "₹5,000",
    },
    {
      name: "Web Development",
      scope: "websites, web apps, e-commerce",
      deliverables: ["Design", "Development", "Hosting", "Maintenance"],
      icon: <Image className="w-6 h-6" />,
      turnaround: "4-8 weeks",
      priceFrom: "₹75,000",
    },
    {
      name: "Mobile App Development",
      scope: "iOS, Android, cross-platform",
      deliverables: ["UI/UX", "Development", "Testing", "Deployment"],
      icon: <Smartphone className="w-6 h-6" />,
      turnaround: "8-16 weeks",
      priceFrom: "₹1,50,000",
    },
    {
      name: "SEO & Digital Marketing",
      scope: "on-page, off-page, analytics",
      deliverables: ["Audit", "Optimization", "Content", "Reporting"],
      icon: <TrendingUp className="w-6 h-6" />,
      turnaround: "Ongoing",
      priceFrom: "₹25,000/mo",
    },
    {
      name: "Branding & Identity",
      scope: "logo, guidelines, collateral",
      deliverables: ["Logo Design", "Brand Kit", "Style Guide", "Templates"],
      icon: <Palette className="w-6 h-6" />,
      turnaround: "10-15 days",
      priceFrom: "₹25,000",
    },
    {
      name: "Social Media Campaigns",
      scope: "strategy, content, ads",
      deliverables: ["Content Plan", "Post Design", "Ad Copy", "Analytics"],
      icon: <TrendingUp className="w-6 h-6" />,
      turnaround: "Monthly",
      priceFrom: "₹20,000/mo",
    },
    {
      name: "Studio Booking",
      scope: "wedding, pre-wedding, corporate, commercial, brand shoots",
      deliverables: ["Studio Space", "Equipment", "Crew", "Post-Production"],
      icon: <Building className="w-6 h-6" />,
      turnaround: "Hourly/Daily",
      priceFrom: "Contact Us",
    },
  ];

  return (
    <section id="services" className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8 lg:mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">
            {"<Services />"}
          </div>
          <h2 className="text-2xl lg:text-4xl font-medium text-foreground mb-4">
            Our Service Portfolio
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl">
            Full-stack creative and marketing solutions, coded for maximum impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-4 lg:p-6 elevation-2 hover:elevation-4 material-transition border border-border bg-surface group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3 lg:mb-4">
                <div className="p-2 lg:p-3 rounded-lg bg-primary/10 text-primary group-hover:gradient-primary group-hover:text-primary-foreground material-transition">
                  {service.icon}
                </div>
                <span className="text-xs font-mono text-cta bg-cta/10 px-2 py-1 rounded">
                  {service.priceFrom}
                </span>
              </div>

              <h3 className="text-base lg:text-xl font-medium text-foreground mb-2">
                {service.name}
              </h3>

              <div className="bg-editor-bg rounded p-3 lg:p-4 mb-3 lg:mb-4 font-mono text-xs border border-border">
                <div className="text-code-keyword">
                  {"<service "}
                  <span className="text-code-string">
                    scope="{service.scope}"
                  </span>
                  {">"}
                </div>
                <div className="ml-2 lg:ml-4 my-2 text-foreground text-xs">
                  deliverables: [
                  {service.deliverables.map((item, i) => (
                    <span key={i}>
                      {i > 0 && ", "}
                      <span className="text-code-string">"{item}"</span>
                    </span>
                  ))}
                  ]
                </div>
                <div className="text-code-keyword">{"</service>"}</div>
              </div>

              <div className="flex items-center justify-between text-xs lg:text-sm">
                <span className="text-muted-foreground">
                  <span className="material-icons text-sm align-middle mr-1">schedule</span>
                  {service.turnaround}
                </span>
                <span className="text-primary group-hover:underline material-transition">
                  Learn more →
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
