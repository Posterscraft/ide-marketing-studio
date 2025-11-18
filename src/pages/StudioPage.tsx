import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const StudioPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      
      <div className="flex flex-1">
        <ProjectExplorer />
        
        <main className="flex-1 overflow-y-auto">
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">
                  {"<Studio />"}
                </div>
                <h1 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
                  Our Studio & Showreel
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  State-of-the-art facilities in Baguiati. Watch our latest work.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <Card className="p-8 elevation-3 border border-border bg-surface">
                  <h3 className="text-xl font-medium mb-4 text-foreground">Showreel</h3>
                  <div className="aspect-video bg-editor-gutter rounded-lg flex items-center justify-center mb-4">
                    <Play className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    From concept to delivery, see how we bring visions to life through video, photography, and design.
                  </p>
                </Card>

                <Card className="p-8 elevation-3 border border-border bg-surface">
                  <h3 className="text-xl font-medium mb-4 text-foreground">Studio Location</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Production Studio</h4>
                      <p className="text-sm text-muted-foreground">Baguiati, Kolkata</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Facilities</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Green screen setup</li>
                        <li>• Professional lighting</li>
                        <li>• Audio recording booth</li>
                        <li>• Editing suites</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default StudioPage;
