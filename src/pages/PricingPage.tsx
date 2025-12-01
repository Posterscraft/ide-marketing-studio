import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      
      <div className="flex flex-1">
        <ProjectExplorer />
        
        <main className="flex-1 overflow-y-auto">
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">
                {"<Pricing />"}
              </div>
              <h1 className="text-4xl lg:text-5xl font-medium text-foreground mb-4">
                Pricing
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Transparent pricing for web development, SEO, creative production, and studio bookings.
              </p>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default PricingPage;
