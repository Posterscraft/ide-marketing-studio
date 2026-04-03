import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface Testimonial {
  client: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  project: string;
}

const Clients = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = [
    { name: "Phoenix Real Esthetic", url: "https://www.phoenixrealesthatic.com/" },
    { name: "Phoenix Travelopedia", url: "https://www.phoenixtravelopedia.com/" },
    { name: "EFiling Infotech", url: "https://www.efilinginfotech.com/" },
    { name: "Vastraa Studio", url: "https://vastraastudio.com/" },
    { name: "Lumina Studio", url: "https://www.luminastudio.in/" },
    { name: "The Timeliners Kolkata", url: "https://www.thetimelinerskolkata.com/" },
    { name: "Suitespott", url: "https://www.suitespott.com/" },
    { name: "Futuregrace Technologies", url: "https://www.futuregracetechnologies.com/" },
    { name: "Futuregrace Consultancy", url: "https://www.futuregraceconsultancy.com/" },
    { name: "Chill Video Wala", url: "https://www.chillvideowala.com/" },
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
    {
      client: "Ananya Roy",
      role: "Founder",
      company: "Startup Hub",
      quote: "They built our entire web presence from scratch. The website is fast, modern, and converts visitors into customers. Best investment we made!",
      rating: 5,
      project: "Web Development",
    },
    {
      client: "Vikram Singh",
      role: "Owner",
      company: "Fashion Boutique",
      quote: "The video reels they created for our collection launch went viral! Professional quality with quick turnaround. Absolutely recommend them!",
      rating: 5,
      project: "Reels & Video Editing",
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="clients" className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Clients Logo Strip */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">
            {"<Clients />"}
          </div>
          <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-6 lg:mb-8">Trusted by leading brands</h2>
          <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4">
            {clients.map((client, index) => (
              <a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 lg:px-4 lg:py-2 bg-surface rounded-lg elevation-1 hover:elevation-3 material-transition cursor-pointer group"
              >
                <span className="text-xs lg:text-sm font-medium text-muted-foreground group-hover:text-primary material-transition">
                  {client.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-6 lg:mb-8">
          <h2 className="text-2xl lg:text-4xl font-medium text-foreground mb-2 lg:mb-4">
            Client Testimonials
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8">
            Real feedback from real projects.
          </p>
        </div>

        {/* Scrollable Testimonials */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-surface elevation-3 items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground material-transition -ml-2 lg:-ml-5 hidden md:flex"
            aria-label="Scroll testimonials left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div
            ref={scrollRef}
            className="flex gap-4 lg:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px] p-4 lg:p-6 elevation-2 hover:elevation-3 material-transition border border-border bg-surface snap-start"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3 lg:mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-cta text-cta" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm lg:text-base text-foreground mb-4 lg:mb-6 leading-relaxed line-clamp-4">
                  "{testimonial.quote}"
                </blockquote>

                {/* Client Info */}
                <div className="pt-3 lg:pt-4 border-t border-border">
                  <div className="flex items-start gap-2 lg:gap-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-medium text-sm lg:text-base">
                      {testimonial.client.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground text-sm lg:text-base truncate">{testimonial.client}</div>
                      <div className="text-xs lg:text-sm text-muted-foreground truncate">
                        {testimonial.role}, {testimonial.company}
                      </div>
                      <div className="text-xs text-primary mt-1 font-mono truncate">
                        Project: {testimonial.project}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-surface elevation-3 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground material-transition -mr-2 lg:-mr-5 hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile scroll hint */}
        <p className="text-xs text-muted-foreground text-center mt-4 md:hidden">
          ← Swipe to see more →
        </p>
      </div>
    </section>
  );
};

export default Clients;
