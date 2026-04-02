import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Monitor, Cpu, Film, Palette, Camera, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import MobileBottomNav from "@/components/MobileBottomNav";

const StudioPage = () => {
  const editingSetups = [
    {
      title: "Video Editing Suite",
      description: "Professional-grade video editing with high-performance workstations running Adobe Premiere Pro, DaVinci Resolve, and Final Cut Pro. Our editors craft compelling narratives from raw footage.",
      icon: <Film className="w-6 h-6" />,
      specs: ["4K/8K RAW Processing", "Multi-cam Editing", "Real-time Color Grading"]
    },
    {
      title: "Reels & Short-form Content",
      description: "Specialized setup for creating viral-ready social media content. Quick turnaround with trending effects, transitions, and music sync for Instagram, YouTube Shorts, and TikTok.",
      icon: <Monitor className="w-6 h-6" />,
      specs: ["Vertical & Square Formats", "Trending Templates", "Same-day Delivery"]
    },
    {
      title: "Motion Graphics Lab",
      description: "After Effects and Cinema 4D powered workstations for stunning motion graphics, animated logos, title sequences, and visual effects that elevate your content.",
      icon: <Palette className="w-6 h-6" />,
      specs: ["3D Animation", "Logo Animation", "VFX Compositing"]
    },
    {
      title: "Color Grading Suite",
      description: "Calibrated reference monitors and DaVinci Resolve for cinematic color grading. We ensure your footage has that professional, polished look.",
      icon: <Cpu className="w-6 h-6" />,
      specs: ["HDR Grading", "Film LUTs", "Color Matching"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      
      <div className="flex flex-1">
        <ProjectExplorer />
        
        <main className="flex-1 overflow-y-auto flex flex-col pb-16 lg:pb-0">
          <SEO title="Our Studio" description="Visit PostersCraft's professional studio in Baguiati, Kolkata. State-of-the-art video editing, motion graphics, and post-production facilities." path="/studio" />
          <div className="bg-surface-variant border-b border-border px-4 flex items-center h-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-surface px-4 py-1.5 rounded-t border border-b-0 border-border text-sm font-medium text-foreground"
            >
              studio.tsx
            </motion.div>
          </div>
          <section className="py-12 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="mb-8 lg:mb-12 text-center">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">
                  {"<Studio />"}
                </div>
                <h1 className="text-2xl lg:text-4xl font-medium text-foreground mb-4">
                  Our Studio & Post-Production House
                </h1>
                <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                  State-of-the-art facilities in Baguiati. Professional editing setups for video, reels, and motion graphics.
                </p>
              </div>

              {/* Studio Location Card */}
              <div className="max-w-2xl mx-auto mb-12 lg:mb-16">
                <Card className="p-6 lg:p-8 elevation-3 border border-border bg-surface">
                  <h3 className="text-lg lg:text-xl font-medium mb-4 text-foreground">Studio Locations</h3>
                  <div className="space-y-4 lg:space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Camera className="w-5 h-5 text-primary" />
                        <h4 className="font-medium text-foreground">Production Studio</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Lumina Studio, Baguiati, Kolkata</p>
                      <a 
                        href="https://www.luminastudio.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        Visit Website <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Film className="w-5 h-5 text-primary" />
                        <h4 className="font-medium text-foreground">Post-Production House</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">The Timeliners Kolkata</p>
                      <a 
                        href="https://www.thetimelinerskolkata.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        Visit Website <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Editing Setups Section */}
              <div className="max-w-6xl mx-auto">
                <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-6 lg:mb-8 text-center">
                  Our Editing & Post-Production Setup
                </h2>
                <p className="text-muted-foreground text-center mb-8 lg:mb-12 max-w-3xl mx-auto text-sm lg:text-base">
                  We've invested in industry-standard hardware and software to deliver broadcast-quality content. 
                  Our team of experienced editors work with the latest tools to ensure your project looks stunning.
                </p>

                <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                  {editingSetups.map((setup, index) => (
                    <Card key={index} className="p-5 lg:p-6 elevation-2 hover:elevation-3 material-transition border border-border bg-surface">
                      <div className="flex items-start gap-3 lg:gap-4">
                        <div className="p-2 lg:p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                          {setup.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base lg:text-lg font-medium text-foreground mb-2">{setup.title}</h3>
                          <p className="text-xs lg:text-sm text-muted-foreground mb-3 lg:mb-4">{setup.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {setup.specs.map((spec, i) => (
                              <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-mono">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Services Overview */}
              <div className="max-w-4xl mx-auto mt-12 lg:mt-16">
                <Card className="p-6 lg:p-8 elevation-2 border border-border bg-surface">
                  <h3 className="text-lg lg:text-xl font-medium text-foreground mb-4 text-center">What We Edit</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
                    {[
                      "Wedding Films",
                      "Corporate Videos",
                      "Instagram Reels",
                      "YouTube Content",
                      "Music Videos",
                      "Documentaries",
                      "Product Videos",
                      "Promotional Ads"
                    ].map((service, index) => (
                      <div key={index} className="text-center p-3 lg:p-4 bg-secondary/30 rounded-lg">
                        <span className="text-xs lg:text-sm font-medium text-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      <MobileBottomNav />
    </div>
    </div>
  );
};

export default StudioPage;
