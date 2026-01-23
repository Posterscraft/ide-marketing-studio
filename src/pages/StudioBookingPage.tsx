import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const StudioBookingPage = () => {
  const studioServices = [
    "Wedding Photography & Videography",
    "Pre-Wedding Shoots",
    "Corporate Events",
    "Commercial Shoots",
    "Brand Photography",
    "Product Photography",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      
      <div className="flex flex-1">
        <ProjectExplorer />
        
        <main className="flex-1 overflow-y-auto">
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">
                {"<StudioBooking />"}
              </div>
              <h1 className="text-4xl lg:text-5xl font-medium text-foreground mb-4">
                Studio Booking
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Professional photography and videography studio space available for weddings, 
                pre-weddings, corporate events, commercial shoots, and brand photography.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-surface rounded-xl p-6 elevation-2 border border-border">
                  <h2 className="text-xl font-medium text-foreground mb-4">Our Studio Services</h2>
                  <ul className="space-y-3">
                    {studioServices.map((service, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface rounded-xl p-6 elevation-2 border border-border">
                  <h2 className="text-xl font-medium text-foreground mb-4">Contact Us</h2>
                  <p className="text-muted-foreground mb-4">
                    For studio bookings, pricing, and availability, please get in touch with us 
                    or visit our dedicated studio website.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="https://www.luminastudio.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-primary-foreground rounded-lg elevation-2 hover:elevation-3 material-transition font-medium"
                    >
                      Visit Lumina Studio
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Phone:</span>{" "}
                      <a href="tel:+918981104129" className="hover:text-primary material-transition">
                        +91 89811 04129
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default StudioBookingPage;
